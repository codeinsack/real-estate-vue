<template>
  <VApp>
    <template v-if="$route.name === 'login' || $route.name === 'register'">
      <RouterView />
    </template>
    <template v-else>
      <VAppBar app clipped-right>
        <div class="d-flex justify-end" style="width: 100%">
          <VBtn class="mr-3" to="/new-apartment" color="success" outlined>Add new apartment</VBtn>
          <VBtn color="primary" outlined @click="logout">Logout</VBtn>
        </div>
      </VAppBar>
      <VMain>
        <RouterView />
      </VMain>
    </template>
  </VApp>
</template>

<script>
import { defineComponent } from '@vue/composition-api';
import { useApp } from './App';

export default defineComponent({
  setup(props, { root }) {
    const { logout } = useApp(root.$router);

    return {
      logout,
    };
  },
});
</script>

<style scoped lang="scss"></style>
