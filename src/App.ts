import VueRouter from 'vue-router';
import * as api from '@/api';
import { computed, ComputedRef, ref } from '@vue/composition-api';
import { capitalize } from 'lodash';

const user = localStorage.getItem('user') || '';

export function useApp(router: VueRouter) {
  const userData: any = ref(JSON.parse(user) || {});

  const logout = async () => {
    await api.logout();
    router.replace('/login');
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('user');
  };

  const setUserData = (data: any) => {
    userData.value = data;
  };

  const fullName: ComputedRef<any> = computed(
    () => `${userData.value.name} ${userData.value?.sureName}`
  );

  const userRole: ComputedRef<any> = computed(() => capitalize(userData.value?.userRole));

  return {
    logout,
    setUserData,
    userData,
    fullName,
    userRole,
  };
}
