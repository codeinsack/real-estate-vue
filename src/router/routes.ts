import Vue from 'vue';
import VueRouter from 'vue-router';

import Dashboard from '@/views/Dashboard/Dashboard.vue';
import Register from '@/views/Register/Register.vue';
import Login from '@/views/Login/Login.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/dashboard',
    component: Dashboard,
    alias: '/',
  },
  {
    path: '/login',
    component: Login,
  },
  {
    path: '/register',
    component: Register,
  },
];

const router = new VueRouter({ mode: 'history', routes });

export default router;
