import * as api from '@/api';
import { onMounted, ref, Ref, watch } from '@vue/composition-api';

const DEAL_STATUSES = [
  {
    text: 'Done',
    value: 'DONE',
  },
  {
    text: 'In progress',
    value: 'IN_PROGRESS',
  },
  {
    text: 'Canceled',
    value: 'CANCELED',
  },
];

export function useDeals() {
  const deals: Ref<boolean> = ref(true);
  const selectedDealStatus: Ref<any> = ref('IN_PROGRESS');

  const loadDeals = async (status: any) => {
    const { data } = await api.fetchDealsByStatus(status);
    deals.value = data.result;
  };

  onMounted(async () => {
    await loadDeals(selectedDealStatus.value);
  });

  const cancelDeal = async (dealId: number) => {
    await api.changeDealStatus(dealId, 'CANCELED');
    await loadDeals(selectedDealStatus.value);
  };

  const confirmDeal = async (deal: any) => {
    await api.changeDealStatus(deal.id, 'DONE');
    await loadDeals(selectedDealStatus.value);
  };

  watch(selectedDealStatus, (newStatus: any) => loadDeals(newStatus));

  return {
    deals,
    cancelDeal,
    DEAL_STATUSES,
    selectedDealStatus,
    confirmDeal,
  };
}
