import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'

Vue.use(Vuex)

export function createStore () {
  return new Vuex.Store({
    state: {
      product: {}
    },
    actions: {
      fetchItem ({ commit ,router, pr}) {
          commit('setProduct', pr)
        // })
      }
    },
    mutations: {
      setProduct (state, product) {
        Vue.set(state.product, product)
      }
    },
    getters
  })
}
