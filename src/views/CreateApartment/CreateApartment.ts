import { reactive, onMounted, ref } from '@vue/composition-api';
import { fetchAllCountries } from '@/api';

const initialData = {
  address: '',
  countryId: 0,
  numberOfRooms: 0,
  price: 0,
};

export function useCreateApartment() {
  const data: any = reactive({ ...initialData });
  const countries: any = ref([]);

  onMounted(async () => {
    const { data } = await fetchAllCountries();
    countries.value = data;
  });

  const create = () => {
    console.log(data);
  };

  return {
    data,
    countries,
    create,
  };
}
