<script setup lang="ts">
import { storeToRefs, mapActions } from "pinia";
import { useStack } from "../../../../store/useStack";

// STORE
const stackStore = useStack();
const { selectedCard, isCardSelected } = storeToRefs(stackStore);
const { res } = mapActions(useStack, { selectCard: 'selectCard', res: 'reset' });
// STORE

</script>

<template>
  <div class="desk" :class="String(isCardSelected)">
    <div class="desk-title">
      <p @click="res">❌</p>
    </div>

    <div class="currentTask" v-if="isCardSelected">
      <p>{{ selectedCard }}</p>
    </div>

    <div class="currentTask" v-else>
      <p>Selecciona una tarea</p>
    </div>
  </div>
</template>

<style scoped>
div.desk {
  width: 100%;
  background-color: #e6e6e6;
}

div.desk-title {
  display: flex;
  justify-content: flex-end;
  padding-right: 1%;
}
</style>