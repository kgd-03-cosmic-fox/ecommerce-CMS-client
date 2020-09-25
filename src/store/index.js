import Vue from 'vue'
import Vuex from 'vuex'
import instanceAPI from '../api/instanceAPI.js'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 15,
    items: [],
    detail: {},
    notification: ''
  },
  mutations: {
    SET_ITEMS (state, payload) {
      state.items = payload
    },
    SET_DETAIL (state, payload) {
      state.detail = payload
    },
    SET_NOTIFICATION (state, payload) {
      state.notification = payload
    },
    SET_EDIT_ITEMS (state, payload) {
      state.editItem = payload
    }
  },
  actions: {
    fetchItem (context, payload) {
      instanceAPI({
        method: 'get',
        url: 'https://ecommerge-cms.herokuapp.com/admin/items',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(({ data }) => {
          context.commit('SET_NOTIFICATION', payload.message)
          setTimeout(() => {
            context.commit('SET_NOTIFICATION', '')
          }, 2000)
          context.commit('SET_ITEMS', data)
          // this.$router.push({ path: '/products' })
        })
        .catch(err => {
          console.log(err)
        })
    },
    addItems (context, payload) {
      instanceAPI({
        method: 'POST',
        url: 'https://ecommerge-cms.herokuapp.com/admin/items',
        data: {
          name: payload.name,
          image_url: payload.image_url,
          price: payload.price,
          stock: payload.stock
        },
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(({ data }) => {
          context.dispatch('fetchItem', { message: 'Item Added' })
        })
        .catch(err => {
          console.log(err.message)
        })
    },
    fetchDetailItem (context, payload) {
      instanceAPI({
        method: 'get',
        url: `https://ecommerge-cms.herokuapp.com/admin/items/${payload.id}`,
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(({ data }) => {
          context.commit('SET_DETAIL', data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    deleteItem (context, payload) {
      instanceAPI({
        method: 'DELETE',
        url: `https://ecommerge-cms.herokuapp.com/admin/items/${payload.id}`,
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(({ data }) => {
          context.dispatch('fetchItem', { message: 'Delete Success' })
        })
        .catch(err => {
          console.log(err.message)
        })
    },
    editItem (context, payload) {
      instanceAPI({
        method: 'put',
        url: `https://ecommerge-cms.herokuapp.com/admin/items/${payload.id}`,
        data: {
          name: payload.item.name,
          price: payload.item.price,
          stock: payload.item.stock
        },
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(({ data }) => {
          context.dispatch('fetchItem', { message: 'Edit Success' })
          // this.$router.push({ path: '/products' })
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
})
