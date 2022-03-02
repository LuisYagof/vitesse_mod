<script setup lang="ts">
import Navbar from './shared/wrapper/Navbar.vue';
import Sidebar from './shared/wrapper/Sidebar.vue';

const emits = defineEmits(['catchevent']); // el nombre del evento no permite camelCase, PascalCase, kebab-case

const catchEmit = (emission: string) => {
  console.info(emission);
  // (DO STH WITH EMISSION)
}

</script>

<template>
  <Navbar />

  <div class="wrapper__content">
    <Sidebar />

    <div class="router-view">
      <router-view v-slot="{ Component, route }">
        <!-- <keep-alive> -->
        <component :is="Component" :key="route.name" @catchevent="catchEmit" />
        <!-- </keep-alive> -->
      </router-view>
    </div>

  </div>
</template>

<style>
#app {
  font-family: 'Nunito';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}

div.wrapper__content {
  height: 100%;
  /* min-height: 100%; */
  min-height: 40.975rem;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  /* padding-top: 4.6875rem; */
}

div.router-view{
  overflow-y: auto;
  padding: 1rem 1rem 1rem 3rem;
  flex: 1;
}

</style>
