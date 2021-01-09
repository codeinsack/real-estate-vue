import Vue from 'vue';
import VueRouter from 'vue-router';

import Dashboard from '@/views/Dashboard/Dashboard.vue';
import Register from '@/views/Register/Register.vue';
import Login from '@/views/Login/Login.vue';
import CreateApartment from '@/views/CreateApartment/CreateApartment.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/dashboard',
    component: Dashboard,
    alias: '/',
    name: 'dashboard',
    meta: {
      protected: true,
    },
  },
  {
    path: '/login',
    component: Login,
    name: 'login',
  },
  {
    path: '/register',
    component: Register,
    name: 'register',
  },
  {
    path: '/new-apartment',
    component: CreateApartment,
    name: 'new-apartment',
    meta: {
      protected: true,
    },
  },
];

const router = new VueRouter({ mode: 'history', routes });

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.protected)) {
    if (localStorage.getItem('isAuthenticated')) {
      next();
    } else {
      next('/login');
    }
  } else {
    next();
  }
});

export default router;
