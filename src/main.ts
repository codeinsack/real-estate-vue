import '@/plugins/installCompositionApi';
import Vue from 'vue';
import router from '@/router/routes';
import axios from 'axios';
import App from './App.vue';
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false;

axios.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response.status === 401) {
      router.push('/login');
    }
    return Promise.reject(error.response);
  }
);

new Vue({
  vuetify,
  router,
  render: (h) => h(App),
}).$mount('#app');
