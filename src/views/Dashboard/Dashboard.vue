<template>
  <VContainer>
    <VRow class="mt-6">
      <VCol v-for="apartment in apartments" :key="apartment.id" class="d-flex child-flex">
        <VCard class="mx-auto" max-width="300">
          <VImg src="https://picsum.photos/300/400" height="200" />
          <VCardTitle> Top western road trips </VCardTitle>
          <VCardSubtitle> 1,000 miles of wonder </VCardSubtitle>
          <VCardActions>
            <VBtn color="orange lighten-2" text> Explore </VBtn>
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
  setup() {
    const { apartments } = useDashboard();

    return {
      apartments,
    };
  },
});
</script>

<style scoped lang="scss"></style>
