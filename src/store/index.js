import Vue from 'vue'
import Vuex from 'vuex'
import cmsAPI from '../api/cms-api.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    currentEdit: null,
    errorMessage: null
  },
  mutations: {
    updateProductsState(state, payload) {
      state.products = payload;
    },
    updateCurrentEdit(state, payload) {
      state.currentEdit = payload;
    },
    updateErrorMsg(state, payload) {
      state.errorMessage = payload;
    }
  },
  actions: {
    deleteProductOnDb(context, payload) {
      cmsAPI({
        url: `/products/${payload}`,
        method: `DELETE`,
        headers: {
          access_token: localStorage.getItem("access_token")
        }
      })
        .then(() => {
          context.commit("updateCurrentEdit", null);
          context.commit("updateErrorMsg", null);
          context.dispatch("fetchProductDatas");
        })
        .catch((err) => {
          context.commit("updateErrorMsg", err);
        })
    },
    editProductOnDb(context, payload) {
      cmsAPI({
        url: `/products/${payload.id}`,
        method: `PUT`,
        headers: {
          access_token: localStorage.getItem("access_token")
        },
        data: {
          name: payload.name,
          image_url: payload.image_url,
          price: payload.price,
          stock: payload.stock
        }
      })
        .then(() => {
          context.commit("updateErrorMsg", null);
          context.dispatch("fetchProductDatas");
        })
        .catch((err) => {
          context.commit("updateErrorMsg", err);
        })
        .finally(() => {
          context.commit("updateCurrentEdit", null);
        })
    },
    fetchProductDatas(context) {
      cmsAPI({
        url: `/products`,
        method: "GET",
        headers: {
          access_token: localStorage.getItem("access_token")
        }
      })
        .then(({ data }) => {
          context.commit('updateProductsState', data);
        })
        .catch((err) => {
          context.commit("updateErrorMsg", err);
        })
    },
  },
  modules: {
  }
})
