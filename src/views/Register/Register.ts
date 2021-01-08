import { reactive, ref, Ref } from '@vue/composition-api';
import { RegisterData, UserRole } from '@/types';
import VueRouter from 'vue-router';

const initialData = {
  credentials: {
    email: '',
    password: '',
  },
  name: '',
  sureName: '',
  telephoneNumber: '',
  userRole: UserRole.SELLER,
};

const USER_ROLES = [
  {
    text: 'Buyer',
    value: 'BUYER',
  },
  {
    text: 'Seller',
    value: 'SELLER',
  },
];

export function useRegister() {
  const data: RegisterData = reactive({ ...initialData });

  return {
    data,
    USER_ROLES,
  };
}

export function useEventHandlers(data: RegisterData, router: VueRouter) {
  const isFormValid: Ref<boolean> = ref(true);
  const refForm: Ref<any> = ref(null);

  const submit = () => {
    refForm.value.validate();
    if (isFormValid.value) {
      console.log('data', data);
      router.push('/dashboard');
    }
  };

  return {
    submit,
    isFormValid,
    refForm,
  };
}
