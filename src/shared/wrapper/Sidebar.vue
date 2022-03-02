<template>
  <div class="sidebar-bg" :class="foldedClass()">
    <div class="links">
      <p
        class="sidebar-link"
        v-for="section in sections"
        :key="section.link"
        @click="mockReq"
      >{{ section.name }}</p>
      <!-- @click="handleClickLink(section.link)" -->
      <!-- @click="counterStore.apiMock" -->

      <p
        class="sidebar-link"
        v-for="section in sections"
        :key="section.link"
        @click="handleClickLink()"
      >{{ section.name }}</p>
      <!-- @click="counterStore.callAPI('https://run.mocky.io/v3/7a7a924f-72dd-4cd7-aefa-12be3608e839')" -->
    </div>

    <button v-if="folded" @click="handleFolded">➡</button>
    <button v-else @click="handleFolded">⬅</button>
  </div>
</template>

<script setup lang="ts">
import { mapActions } from "pinia";
import { Ref, ref } from "vue";
import { useCounterStore } from "../../store/useCounter"

const counterStore = useCounterStore();
const { mockReq } = mapActions(useCounterStore, { mockReq: 'apiMock' });

const folded: Ref<boolean> = ref(true);

const sections: any[] = [
  {
    name: 'A',
    link: '/A'
  },
  {
    name: 'B',
    link: '/B'
  },
  {
    name: 'C',
    link: '/C'
  },
  {
    name: 'D',
    link: '/D'
  },
  {
    name: 'E',
    link: '/E'
  },
]

async function handleClickLink(link: string = '') {
  const url = 'https://run.mocky.io/v3/7a7a924f-72dd-4cd7-aefa-12be3608e839';
  counterStore.callAPI(url);
}

function handleFolded() {
  folded.value = !folded.value;
}

const foldedClass: Function = () => folded.value ? 'folded' : 'unfolded'

</script>


<style scoped lang="postcss">
$primgrey: #eeeeee;

div.sidebar-bg {
  background-color: $primgrey;
  display: flex;
  flex-direction: column;
  height: 93vh;
  justify-content: space-between;
  overflow-x: hidden;
  overflow-y: auto;
  position: fixed;
  transition: width .6s ease-out;
  width: 10vw;
  z-index: 999;

  &.folded {
    width: 2vw;
  }
  p.sidebar-link {
    cursor: pointer;
    font-size: 1rem;
    line-height: 2rem;
  }

  button {
    background-color: #414141;
    border-radius: 2px;
    border: none;
    color: #dadada;
    font-family: "Nunito";
    margin: 0.1rem;
    padding: 0.4rem;
  }
}
</style>