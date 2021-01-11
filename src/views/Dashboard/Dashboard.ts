import { fetchApartments, fetchCurrentUser } from '@/api';
import { onMounted, ref, Ref } from '@vue/composition-api';
import { pick } from 'lodash';

export function useDashboard(emit: any) {
  const apartments: Ref<boolean> = ref(true);

  onMounted(async () => {
    const { data: apartmentsData } = await fetchApartments();
    apartments.value = apartmentsData.resultList;
    const { data: user } = await fetchCurrentUser();
    const userData = pick(user, ['name', 'sureName', 'userRole']);
    emit('userDataFetched', userData);
  });

  return {
    apartments,
  };
}
