<template>
  <VContainer>
    <VRow class="mt-6">
      <VCol class="d-flex child-flex">
        <VCard class="mx-auto" max-width="300"> LIST OF DEALS </VCard>
      </VCol>
    </VRow>
  </VContainer>
</template>

<script>
import { defineComponent } from '@vue/composition-api';
import { useDeals } from './Deals';

export default defineComponent({
  setup() {
    const { deals } = useDeals();

    return {
      deals,
    };
  },
});
</script>

<style scoped lang="scss"></style>
