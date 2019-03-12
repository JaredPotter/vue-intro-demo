/* eslint-disable */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null,
  },
  getters: {
    user(state) {
      return state.user;
    }
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    }
  },
  actions: {
    login(store, payload) {
      // Async call to authentiation system.

      // On positive response, set user.
      store.commit('setUser', { username: payload.username });
    },
    logout(store) {
      store.commit('setUser', null);
    }
  }
})
