import { reactive } from '@vue/composition-api';
import { RegisterData, UserRole } from '@/types';

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

export function useEventHandlers(data: RegisterData) {
  const submit = () => {
    console.log('data', data);
  };

  return {
    submit,
  };
}
