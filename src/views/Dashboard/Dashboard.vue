<template>
  <div>DASHBOARD</div>
</template>

<script>
import { defineComponent } from '@vue/composition-api';
import { useDashboard } from './Dashboard';

export default defineComponent({
  setup() {
    const { a } = useDashboard();

    return {
      a,
    };
  },
});
</script>

<style scoped lang="scss"></style>
