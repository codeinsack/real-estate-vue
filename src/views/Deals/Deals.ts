import { fetchDealsByStatus } from '@/api';
import { onMounted, ref, Ref } from '@vue/composition-api';

export function useDeals() {
  const deals: Ref<boolean> = ref(true);

  onMounted(async () => {
    const { data } = await fetchDealsByStatus();
    console.log('data', data);
  });

  return {
    deals,
  };
}