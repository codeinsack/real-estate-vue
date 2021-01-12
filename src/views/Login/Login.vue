<template>
  <VContainer fill-height fluid>
    <VRow justify="center">
      <VCol cols="6">
        <VCard class="pa-12" width="500">
          <VCardTitle>Login</VCardTitle>
          <VCardSubtitle>Please enter your data</VCardSubtitle>
          <VCardText>
            <VTextField v-model="data.email" label="Email" placeholder="Email" />
            <VTextField
              v-model="data.password"
              label="Password"
              type="password"
              placeholder="Password"
            />
          </VCardText>
          <VCardActions class="d-flex justify-space-between mt-3">
            <RouterLink class="ml-2" to="/register">Register</RouterLink>
            <VBtn color="primary" outlined @click="submit">Submit</VBtn>
          </VCardActions>
        </VCard>
      </VCol>
    </VRow>
  </VContainer>
</template>

<script>
import { defineComponent } from '@vue/composition-api';
import { useLogin, useEventHandlers } from './Login';

export default defineComponent({
  setup(props, { root }) {
    const { data } = useLogin();
    const { submit } = useEventHandlers(data, root.$router);

    return {
      data,
      submit,
    };
  },
});
</script>

<style scoped lang="scss"></style>
