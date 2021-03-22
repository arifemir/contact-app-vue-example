import Vue from 'vue';
import Vuex from 'vuex';
import { loginService, registerService } from '@/services/userAuthService';
// eslint-disable-next-line import/no-cycle
import router from '@/router';
import { addContactService } from '@/services/contactService';

Vue.use(Vuex);

const localUser = localStorage.getItem('user');
const initialUser = (localUser !== 'undefined' && localUser) && JSON.parse(localUser);

export default new Vuex.Store({
  state: {
    user: initialUser,
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
  },
  actions: {
    async register({ commit }, userData) {
      const user = await registerService(userData);
      localStorage.setItem('user', JSON.stringify(user));
      commit('setUser', user);
      if (user) router.push('/home');
    },
    async login({ commit }, userData) {
      const user = await loginService(userData);
      localStorage.setItem('user', JSON.stringify(user));
      commit('setUser', user);
      if (user) router.push('/home');
    },
    logout({ commit }) {
      localStorage.setItem('user', '');
      commit('setUser', '');
      router.push('/login');
    },
    async addContact({ commit, state }, userData) {
      const { user } = state;
      user.contacts.push(userData);
      await addContactService(user);
      localStorage.setItem('user', JSON.stringify(user));
      commit('setUser', user);
    },
    // async shareContact({ commit, state }, ) {
    //
    // },
  },
  modules: {
  },
  getters: {
    getUser(state) {
      return state.user;
    },
  },

});
