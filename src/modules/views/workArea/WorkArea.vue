<script setup lang="ts">
// IMPORTS
import { storeToRefs, mapActions } from "pinia";
import { useStack } from "../../../store/useStack";
import Stack from './components/Stack.vue'
// import Stack from './components/Stack_.vue'
import Desk from './components/Desk.vue'
// IMPORTS

// STORE
const stackStore = useStack();
const { isCardSelected } = storeToRefs(stackStore);
// STORE

</script>

<template>
  <h3>Zona de trabajo</h3>

  <div class="work-area">
    <Transition name="fade" appear>
      <Stack v-if="!isCardSelected" />
    </Transition>
    <Desk />
  </div>
</template>

<style scoped>
div.work-area {
  display: flex;
  background-color: #eeeeee;
  justify-content: space-around;
}

h3 {
  margin: 0 0 1% 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 1s ease-out;
}

.fade-enter-from,
.fade-leave-to {
  transform: translateX(-50%);
  width: 0%;
  opacity: 0;
}
.fade-enter-to,
.fade-leave-from {
  width: 25%;
}
</style>