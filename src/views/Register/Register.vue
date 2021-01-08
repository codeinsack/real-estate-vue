<template>
  <VContainer fill-height fluid>
    <VRow justify="center">
      <VCol cols="6">
        <VCard class="pa-12">
          <VCardTitle>Register</VCardTitle>
          <VCardSubtitle>Please enter your data</VCardSubtitle>
          <VCardText>
            <VForm ref="refForm" v-model="isFormValid">
              <VTextField v-model="data.credentials.email" placeholder="Email" />
              <VTextField
                v-model="data.credentials.password"
                type="password"
                placeholder="Password"
                validate-on-blur
              />
              <VTextField
                v-model="data.name"
                :rules="[
                  (v) => !!v || 'Name is required',
                  (v) => v.length >= 3 || 'Length is too short',
                ]"
                placeholder="Name"
              />
              <VTextField v-model="data.sureName" placeholder="Surname" />
              <VTextField v-model="data.telephoneNumber" placeholder="Phone" />
              <VSelect v-model="data.userRole" :items="USER_ROLES" placeholder="Role" />
            </VForm>
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
  setup(props, { root }) {
    const { data, USER_ROLES } = useRegister();
    const { submit, isFormValid, refForm } = useEventHandlers(data, root.$router);

    return {
      data,
      USER_ROLES,
      submit,
      isFormValid,
      refForm,
    };
  },
});
</script>

<style scoped lang="scss"></style>
