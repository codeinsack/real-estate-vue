<template>
  <div>
    <div class="hello">HELLO WORLD</div>
    <div class="hello">HELLO WORLD</div>
    <div class="hello">{{ a }}</div>
  </div>
</template>

<script>
import { useHelloWorld } from './HelloWorld';

export default {
  setup() {
    const { a } = useHelloWorld();
    return {
      a,
    };
  },
};
</script>

<style scoped></style>
