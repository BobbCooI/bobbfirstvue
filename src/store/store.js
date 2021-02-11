import {createStore} from 'vuex';
export default createStore({
  strict: true,
  state: {
    token: null,
    userInfo: null,
    loggedIn: false
  },
  mutations: {
    setToken (state, token) {
      state.token = token
      state.loggedIn = !!(token)
    },
    setUser (state, user) {
      state.userInfo = user
    }
  },
  actions: {
    setToken ({commit}, token) {
      commit('setToken', token)
    },
    setUser ({commit}, userInfo) {
      commit('setUser', userInfo)
    }
  }
})