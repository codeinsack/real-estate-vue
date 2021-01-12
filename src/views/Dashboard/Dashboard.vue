<template>
  <VContainer>
    <VRow class="mt-6">
      <VCol v-for="(apartment, index) in apartments" :key="apartment.id" class="d-flex child-flex">
        <VCard class="mx-auto" max-width="300">
          <VImg
            class="white--text align-end"
            :src="require(`@/assets/${index + 1}.jpg`)"
            height="200"
          >
            <VCardTitle
              v-text="
                new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(
                  apartment.price
                )
              "
            />
            <VCardSubtitle class="white--text">
              <div>{{ `${apartment.owner.name} ${apartment.owner.sureName}` }}</div>
              <div>{{ apartment.owner.telephoneNumber }}</div>
            </VCardSubtitle>
          </VImg>
          <VCardTitle>
            <span class="mr-1">{{ apartment.numberOfRooms }}</span>
            <span>room(s)</span>
          </VCardTitle>
          <VCardSubtitle>
            <div>{{ apartment.countryName }}</div>
            <div>{{ apartment.address }}</div>
          </VCardSubtitle>
          <VCardActions v-if="userData && userData.userRole === 'BUYER'">
            <VBtn color="orange lighten-2" text @click="createDeal(apartment.id)">
              Have a deal
            </VBtn>
          </VCardActions>
        </VCard>
      </VCol>
    </VRow>
  </VContainer>
</template>

<script>
import { defineComponent } from '@vue/composition-api';
import { useDashboard } from './Dashboard';

export default defineComponent({
  props: {
    userData: {
      type: Object,
    },
  },
  setup(props, { emit }) {
    const { apartments, createDeal } = useDashboard(emit);

    return {
      apartments,
      createDeal,
    };
  },
});
</script>

<style scoped lang="scss"></style>
