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
    name: 'dashboard',
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
];

const router = new VueRouter({ mode: 'history', routes });

export default router;
