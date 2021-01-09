import { fetchApartments } from '@/api';
import { onMounted, ref, Ref } from '@vue/composition-api';

export function useDashboard() {
  const apartments: Ref<boolean> = ref(true);

  onMounted(async () => {
    const { data } = await fetchApartments();
    apartments.value = data.resultList;
  });

  return {
    apartments,
  };
}
