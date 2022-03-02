<script setup lang="ts">
import { useStack } from "../../../../store/useStack";

const stackStore = useStack();

const props = defineProps({
  cardData: {
    type: Number,
    required: true
  }
})

function handleCardSelection() {
  stackStore.selectCard(props.cardData);
}

</script>

<template>
  <div class="stack-card" @click="handleCardSelection">
    <p>{{ cardData }}</p>
  </div>
</template>

<style scoped>
div.stack-card {
  margin: 1% 0 1% 0;
  padding: 1% 0 1% 0;
  background-color: #fafafa;
}
</style>