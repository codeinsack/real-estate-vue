import * as api from '@/api';
import { onMounted, ref, Ref } from '@vue/composition-api';
import { pick } from 'lodash';

export function useDashboard(emit: any) {
  const apartments: Ref<boolean> = ref(true);

  onMounted(async () => {
    const { data: apartmentsData } = await api.fetchApartments();
    apartments.value = apartmentsData.resultList;
    const { data: user } = await api.fetchCurrentUser();
    const userData = pick(user, ['name', 'sureName', 'userRole']);
    localStorage.setItem('user', JSON.stringify(userData));
    emit('userDataFetched', userData);
  });

  const createDeal = async (apartmentId: number) => {
    await api.createDeal(apartmentId);
  };

  return {
    apartments,
    createDeal,
  };
}
