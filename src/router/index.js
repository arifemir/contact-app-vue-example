import Vue from 'vue';
import VueRouter from 'vue-router';
import ContactsPage from '@/pages/ContactsPage.vue';
import LoginPage from '../pages/LoginPage.vue';
import RegisterPage from '../pages/RegisterPage.vue';
import store from '../store';

Vue.use(VueRouter);

const ifUserExistGoToHome = (next) => {
  if (store.getters.getUser) return next({ name: 'Home' });
  return next();
};

const ifNotHaveUserGoLogin = (next) => {
  if (!store.getters.getUser) return next({ name: 'Login' });
  return next();
};

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: LoginPage,
    beforeEnter(to, from, next) {
      ifUserExistGoToHome(next);
    },
  },
  {
    path: '/register',
    name: 'Register',
    component: RegisterPage,
    beforeEnter(to, from, next) {
      ifUserExistGoToHome(next);
    },
  },
  {
    path: '/home',
    name: 'Home',
    component: ContactsPage,
    beforeEnter(to, from, next) {
      ifNotHaveUserGoLogin(next);
    },
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
