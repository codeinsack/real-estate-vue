<template>
  <VApp>
    <template v-if="$route.name === 'login' || $route.name === 'register'">
      <RouterView />
    </template>
    <template v-else>
      <VAppBar app clipped-right>
        <div class="d-flex justify-end" style="width: 100%">
          <VBtn color="primary" outlined>Logout</VBtn>
        </div>
      </VAppBar>
      <VMain>
        <RouterView />
      </VMain>
    </template>
  </VApp>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style></style>
