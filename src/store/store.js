import {createStore} from 'vuex';
export default createStore({
  strict: true,
  state: {
    token: null,
    userInfo: null,
    loggedIn: false,
    snackbar: Object,
    snackbarOpen: false
  },
  mutations: {
    setToken (state, token) {
      state.token = token;
      state.loggedIn = !!(token);
    },
    setUser (state, user) {
      state.userInfo = user;
    },
    setSnackbar (state, snackbar) {
      console.log(snackbar)
      state.snackbar = snackbar.bar;
    }
  },
  actions: {
    setToken ({commit}, token) {
      commit('setToken', token);
    },
    setUser ({commit}, userInfo) {
      commit('setUser', userInfo);
    },
    setSnackbar ({commit}, bar) {
      commit('setSnackbar', bar);
    }
  }
})