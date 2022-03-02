<script setup lang="ts">
import { ref, Ref } from 'vue';
import StackCard from './StackCard.vue'

const stack: number[] = Array.from(Array(10).keys());

const sumResult: Ref<number> = ref(0)
const sum = (num1: number, num2: number): void => {
  sumResult.value = num1 + num2
}
const sum2 = (num1: number, num2: number): number => num1 + num2

</script>

<template>
  <div class="stack">
    <h5>Stack</h5>
    <StackCard v-for="card in stack" :card-data="card" />
  </div>
</template>

<style scoped>
div.stack {
  width: 25%;
}
</style>