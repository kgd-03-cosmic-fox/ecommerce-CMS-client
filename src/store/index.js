import Vue from 'vue'
import Vuex from 'vuex'
import cmsAPI from '../api/cms-api.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: []
  },
  mutations: {
    updateProductsState(state, payload) {
      state.products = payload;
    }
  },
  actions: {
    fetchProductDatas(context) {
      cmsAPI({
        url: `/products`,
        method: "GET",
        headers: {
          access_token: localStorage.getItem("access_token")
        }
          .then((data) => {
            context.commit('updateProductsState', data)
          })
          .catch((err) => {
            console.log(err);
          })
      })
    }
  },
  modules: {
  }
})
