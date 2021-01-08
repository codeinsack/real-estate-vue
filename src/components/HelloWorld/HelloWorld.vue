<template>
  <div class="hello">HELLO WORLD</div>
</template>

<script>
export default {
  setup() {
    const { logout, user } = useApp();
    return {
      logout,
      user,
    };
  },
};
</script>

<style scoped></style>
