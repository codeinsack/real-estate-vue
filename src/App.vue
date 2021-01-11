<template>
  <VApp>
    <template v-if="$route.name === 'login' || $route.name === 'register'">
      <RouterView />
    </template>
    <template v-else>
      <VAppBar app clipped-right>
        <div class="d-flex align-center" style="width: 100%">
          <div class="d-flex" style="margin-right: auto">
            <VAvatar class="mr-3" size="48">
              <img alt="Avatar" src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460" />
            </VAvatar>
            <div>
              <div>{{ fullName }}</div>
              <VChip color="red lighten-4" class="ml-0 mr-2 black--text" label small>
                {{ userRole }}
              </VChip>
            </div>
          </div>
          <VBtn class="mr-3" to="/" color="warning" outlined>Go to apartments</VBtn>
          <VBtn class="mr-3" to="/new-apartment" color="success" outlined>Add new apartment</VBtn>
          <VBtn class="mr-3" to="/deals" color="primary" outlined>Deals</VBtn>
          <VBtn color="primary" outlined @click="logout">Logout</VBtn>
        </div>
      </VAppBar>
      <VMain>
        <RouterView @userDataFetched="setUserData" />
      </VMain>
    </template>
  </VApp>
</template>

<script>
import { defineComponent } from '@vue/composition-api';
import { useApp } from './App';

export default defineComponent({
  setup(props, { root }) {
    const { logout, setUserData, userData, fullName, userRole } = useApp(root.$router);

    return {
      logout,
      setUserData,
      userData,
      fullName,
      userRole,
    };
  },
});
</script>

<style scoped lang="scss"></style>
