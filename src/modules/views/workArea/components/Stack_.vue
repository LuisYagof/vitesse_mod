<script setup lang="ts">
import { storeToRefs, mapActions } from "pinia";
import { useStack } from "../../../../store/useStack";
import StackCard from './StackCard.vue'

// // STORE
const stackStore = useStack();
const { selectedCard, isCardSelected } = storeToRefs(stackStore);
const { selectCard, res } = mapActions(useStack, { selectCard: 'selectCard', res: 'reset' });
// // STORE

const stack: number[] = Array.from(Array(7).keys());

const getStackClass = () => isCardSelected.value ? 'hidden' : '';

</script>

<!-- CON CAMBIO DE CLASE - LO TUVE QUE SACAR DEL TEMPLATE PORQUE TRANSITION SÓLO ACEPTA UN ROOT-ELEMENT (AUNQUE ÉSTE ESTUVIESE COMENTADO) -->

<template>
  <div class="stack" :class="getStackClass()">
    <!-- <div class="stack"> -->
    <h5>Stack</h5>
    <StackCard v-for="card in stack" :card-data="card" />
  </div>
</template>

<style scoped>
div.stack {
  width: 25%;
  /* transition: display 2s ease-in-out; */
  /* animation: stackDisplay; */
}

@keyframes stackDisplay {
  from {transform: translateX(0%);}
  to {transform: translateX(50%);}
}

div.stack.hidden {
  animation: stackDisplay 1s ease-in-out;
  /* display: none; */
}

</style>