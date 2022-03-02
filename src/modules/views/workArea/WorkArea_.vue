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

const getStackClass = () => isCardSelected.value ? 'hidden' : 'visible';

</script>

<template>
  <h3>Zona de trabajo</h3>

  <div class="work-area">
    <Stack class="stack_component" :class="getStackClass()"/>
    <Desk />
  </div>
</template>

<style scoped lang="postcss">
h3 {
  margin: 0 0 1% 0;
}
div.work-area {
  display: flex;
  background-color: #eeeeee;
  justify-content: space-around;

  .stack_component {
    &.visible {
      animation: stackAppear 1s ease-in-out;

      @keyframes stackAppear {
        0% {
          transform: translateX(-100%);
          opacity: 0;
          display: none;
          visibility: hidden;
          width: 0%;
        }
        50% {
          transform: translateX(-50%);
          opacity: 0;
        }
        100% {
          transform: translateX(0%);
          opacity: 1;
          visibility: visible;
          width: 25%;
        }
      }
    }

    &.hidden {
      animation: stackFade 1s ease-in-out;
      visibility: hidden;
      width: 0%;
      
      @keyframes stackFade {
        0% {
          transform: translateX(0%);
          opacity: 1;
          visibility: visible;
          width: 25%;
        }
        50% {
          transform: translateX(-50%);
          opacity: 0;
        }
        100% {
          transform: translateX(-100%);
          opacity: 0;
          display: none;
          visibility: hidden;
          width: 0%;
        }
      }
    }
  }
}
</style>