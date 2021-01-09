import VueRouter from 'vue-router';
import * as api from '@/api';

export function useApp(router: VueRouter) {
  const logout = async () => {
    await api.logout();
    router.replace('/login');
    localStorage.removeItem('isAuthenticated');
  };

  return {
    logout,
  };
}
