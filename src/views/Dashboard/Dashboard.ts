import { fetchApartments } from '@/api';
import { onMounted } from '@vue/composition-api';

export function useDashboard() {
  onMounted(async () => {
    const { data } = await fetchApartments();
    console.log('data', data);
  });

  return {
    a: 10,
  };
}
