import { reactive, onMounted, ref } from '@vue/composition-api';
import { createNewApartment, fetchAllCountries } from '@/api';
import VueRouter from 'vue-router';

const initialData = {
  address: '',
  countryId: 0,
  numberOfRooms: 0,
  price: 0,
};

export function useCreateApartment(router: VueRouter) {
  const data: any = reactive({ ...initialData });
  const countries: any = ref([]);

  onMounted(async () => {
    const { data } = await fetchAllCountries();
    countries.value = data;
  });

  const create = async () => {
    const preparedData = {
      ...data,
      numberOfRooms: +data.numberOfRooms,
      price: +data.price,
    };
    await createNewApartment(preparedData);
    router.push('/dashboard');
  };

  return {
    data,
    countries,
    create,
  };
}
