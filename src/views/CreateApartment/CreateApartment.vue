<template>
  <VContainer fill-height fluid>
    <VRow justify="center">
      <VCol cols="6">
        <VCard class="pa-12">
          <VCardTitle>Create new apartment</VCardTitle>
          <VCardSubtitle>Please enter your data</VCardSubtitle>
          <VCardText>
            <VTextField v-model="data.address" label="Address" placeholder="Address" />
            <VSelect
              v-model="data.countryId"
              :items="countries"
              label="Country"
              item-value="id"
              item-text="name"
              placeholder="Country"
            />
            <VTextField
              v-model="data.numberOfRooms"
              label="Number of rooms"
              type="number"
              placeholder="Number of rooms"
            />
            <VTextField v-model="data.price" label="Price" type="number" placeholder="Price" />
          </VCardText>
          <VCardActions class="d-flex justify-end mt-3">
            <VBtn color="primary" outlined @click="create">Create</VBtn>
          </VCardActions>
        </VCard>
      </VCol>
    </VRow>
  </VContainer>
</template>

<script>
import { defineComponent } from '@vue/composition-api';
import { useCreateApartment } from './CreateApartment';

export default defineComponent({
  setup(props, { root }) {
    const { countries, data, create } = useCreateApartment(root.$router);

    return {
      data,
      countries,
      create,
    };
  },
});
</script>

<style scoped lang="scss"></style>
