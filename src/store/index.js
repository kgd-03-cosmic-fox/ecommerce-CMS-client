import Vue from 'vue'
import Vuex from 'vuex'
import ProductsAPI from '../api/productsAPI'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    messageSuccess: '',
    messageError: '',
    statusAdd: '',
    statusDelete: '',
    statusEdit: '',
    validate: '',
    operator: ''
  },
  mutations: {
    SET_VALIDATE_OPERATOR (state, payload) {
      state.validate = payload.validate
      state.operator = payload.operator
    },
    SET_PRODUCTS (state, payload) {
      state.products = payload
    },
    SET_MESSAGE_SUCCESS (state, payload) {
      state.messageSuccess = payload
    },
    SET_MESSAGE_ERROR (state, payload) {
      state.messageError = payload
    },
    SET_STATUS_ADD (state, payload) {
      state.statusAdd = payload
    },
    SET_STATUS_EDIT (state, payload) {
      state.statusEdit = payload
    },
    SET_STATUS_DELETE (state, payload) {
      state.statusDelete = payload
    }
  },
  actions: {
    fetchProducts (context) {
      ProductsAPI({
        method: 'get',
        url: '/products',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(({ data }) => {
          context.commit('SET_PRODUCTS', data)
        })
        .catch(err => {
          context.commit('SET_MESSAGE_ERROR', err.message)
        })
    },
    addProducts (context, payload) {
      ProductsAPI({
        method: 'post',
        url: '/products',
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
          context.commit('SET_MESSAGE_SUCCESS', data.message)
          context.dispatch('fetchProducts')
          context.commit('SET_STATUS_ADD', 'success')
        })
        .catch(err => {
          context.commit('SET_MESSAGE_ERROR', err.response.data.message)
          context.commit('SET_STATUS_ADD', 'failed')
        })
    },
    deleteProducts (context, payload) {
      ProductsAPI({
        method: 'delete',
        url: `/products/${payload}`,
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(({ data }) => {
          context.commit('SET_STATUS_DELETE', 'success')
          context.commit('SET_MESSAGE_SUCCESS', data.message)
          context.dispatch('fetchProducts')
        })
        .catch(err => {
          context.commit('SET_MESSAGE_ERROR', err.response.data.message)
          context.commit('SET_STATUS_DELETE', 'failed')
        })
    },
    editProducts (context, payload) {
      ProductsAPI({
        method: 'put',
        url: `/products/${payload.id}`,
        data: {
          name: payload.dataEdit.name,
          image_url: payload.dataEdit.image_url,
          price: payload.dataEdit.price,
          stock: payload.dataEdit.stock
        },
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(({ data }) => {
          context.commit('SET_STATUS_EDIT', 'success')
          context.commit('SET_MESSAGE_SUCCESS', data.message)
          context.dispatch('fetchProducts')
        })
        .catch(err => {
          context.commit('SET_MESSAGE_ERROR', err.response.data.message)
          context.commit('SET_STATUS_EDIT', 'failed')
        })
    }

  },
  getters: {

  }
})
