import { reactive } from '@vue/composition-api';
import { Credentials } from '@/types';
import VueRouter from 'vue-router';
import { login } from '@/api';

const initialData = {
  email: '',
  password: '',
};

export function useLogin() {
  const data: Credentials = reactive({ ...initialData });

  return {
    data,
  };
}

export function useEventHandlers(data: Credentials, router: VueRouter) {
  const submit = async () => {
    await login(data);
    router.replace('/dashboard');
  };

  return {
    submit,
  };
}
