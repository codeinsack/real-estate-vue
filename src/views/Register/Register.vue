<template>
  <VContainer fill-height fluid>
    <VRow justify="center">
      <VCol cols="6">
        <VCard class="pa-12">
          <VCardTitle>Register</VCardTitle>
          <VCardSubtitle>Please enter your data</VCardSubtitle>
          <VCardText>
            <VTextField v-model="data.credentials.email" placeholder="Email" />
            <VTextField v-model="data.credentials.password" placeholder="Password" />
            <VTextField v-model="data.name" placeholder="Name" />
            <VTextField v-model="data.sureName" placeholder="Surname" />
            <VTextField v-model="data.telephoneNumber" placeholder="Phone" />
            <VSelect v-model="data.userRole" :items="USER_ROLES" placeholder="Role" />
          </VCardText>
          <VCardActions class="d-flex justify-end mt-3">
            <VBtn color="primary" outlined @click="submit">Submit</VBtn>
          </VCardActions>
        </VCard>
      </VCol>
    </VRow>
  </VContainer>
</template>

<script>
import { defineComponent } from '@vue/composition-api';
import { useRegister, useEventHandlers } from './Register';

export default defineComponent({
  setup() {
    const { data, USER_ROLES } = useRegister();
    const { submit } = useEventHandlers(data);

    return {
      data,
      USER_ROLES,
      submit,
    };
  },
});
</script>

<style scoped lang="scss"></style>
