import { createStore } from 'vuex'

export default createStore({
  state: {
    isDark: false,
  },
  getters: {
    getDark(state) {
      return state.isDark
    },
  },
  mutations: {
    setDark(state, data) {
      state.isDark = data
    },
  },
  actions: {
    setDark({ commit }, data) {
      commit('setDark', data)
    },
  },
  modules: {
  }
})
