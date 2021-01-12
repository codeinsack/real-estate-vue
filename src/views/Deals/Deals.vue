<template>
  <VContainer>
    <VRow class="mt-6">
      <VCol cols="5">
        <VSelect
          v-model="selectedDealStatus"
          :items="DEAL_STATUSES"
          label="Deal status"
          placeholder="Deal status"
          outlined
          dense
        />
      </VCol>
    </VRow>
    <VRow class="mt-6">
      <VCol v-for="(deal, index) in deals" :key="index" class="d-flex child-flex">
        <VCard class="mx-auto pa-3" max-width="300">
          <VCardTitle>
            <div class="mr-1">Buyer: {{ `${deal.buyer.name} ${deal.buyer.sureName}` }}</div>
            <div class="mr-1">Seller: {{ `${deal.seller.name} ${deal.seller.sureName}` }}</div>
          </VCardTitle>
          <VCardSubtitle>
            <div>{{ deal.apartmentDto.address }}</div>
            <div>
              {{
                new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(
                  deal.apartmentDto.price
                )
              }}
            </div>
          </VCardSubtitle>
          <VCardActions
            v-if="deal.status === 'IN_PROGRESS' || userData.userRole === 'SELLER'"
            class="d-flex justify-end"
          >
            <VBtn color="error" outlined @click="cancelDeal(deal.id)"> Cancel </VBtn>
            <VBtn color="success" outlined @click="confirmDeal(deal)"> Confirm </VBtn>
          </VCardActions>
        </VCard>
      </VCol>
    </VRow>
  </VContainer>
</template>

<script>
import { defineComponent } from '@vue/composition-api';
import { useDeals } from './Deals';

export default defineComponent({
  props: {
    userData: {
      type: Object,
    },
  },
  setup() {
    const { deals, cancelDeal, DEAL_STATUSES, selectedDealStatus, confirmDeal } = useDeals();

    return {
      deals,
      cancelDeal,
      DEAL_STATUSES,
      selectedDealStatus,
      confirmDeal,
    };
  },
});
</script>

<style scoped lang="scss"></style>
