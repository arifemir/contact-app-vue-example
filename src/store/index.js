import Vue from 'vue';
import Vuex from 'vuex';
import { loginService, registerService } from '@/services/userAuthService';
// eslint-disable-next-line import/no-cycle
import router from '@/router';
import {
  addContactService, contactRequestAcceptService, contactRequestRejectService,
  deleteContactService,
  shareContactService,
} from '@/services/contactService';
import { v4 as uuidv4 } from 'uuid';
import useSwalToast from '@/helpers/swalHelper';
import i18n from '@/plugins/i18n';
import getAllUserService from '@/services/usersService';

Vue.use(Vuex);

const localUser = localStorage.getItem('user');
const initialUser = (localUser !== 'undefined' && localUser) && JSON.parse(localUser);

export default new Vuex.Store({
  state: {
    user: initialUser,
    users: null,
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    setUsers(state, users) {
      state.users = users;
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
      const emailIsTaken = user.contacts.find((contact) => contact.email === userData.email);
      if (emailIsTaken) {
        useSwalToast('warning', i18n.t('emailIsTaken'));
        return;
      }
      const newUserData = { id: uuidv4(), ...userData };
      user.contacts.push(newUserData);
      await addContactService(user);
      localStorage.setItem('user', JSON.stringify(user));
      commit('setUser', user);
    },
    async deleteContact({ commit, state }, id) {
      const { user } = state;
      user.contacts = user.contacts.filter((contact) => contact.id !== id);
      await deleteContactService(user);
      localStorage.setItem('user', JSON.stringify(user));
      commit('setUser', user);
    },
    async shareContact(context, shareData) {
      await shareContactService(shareData.sent, shareData.sentTo[0]);
    },
    async getAllUsers({ commit }) {
      const users = await getAllUserService();
      commit('setUsers', users);
    },
    async acceptContactRequest({ commit, state }, id) {
      const { user } = state;
      user.contacts.push(user.contactRequests.find((cr) => cr.id === id));
      user.contactRequests = user.contactRequests.filter((cr) => cr.id !== id);
      await contactRequestAcceptService(user);
      localStorage.setItem('user', JSON.stringify(user));
      commit('setUser', user);
    },
    async rejectContactRequest({ commit, state }, id) {
      const { user } = state;
      user.contactRequests = user.contactRequests.filter((cr) => cr.id !== id);
      await contactRequestRejectService(user);
      localStorage.setItem('user', JSON.stringify(user));
      commit('setUser', user);
    },
  },
  modules: {
  },
  getters: {
    getUser(state) {
      return state.user;
    },
    getContacts(state) {
      return state.user.contacts;
    },
    getUsers(state) {
      return state.users;
    },
  },

});
