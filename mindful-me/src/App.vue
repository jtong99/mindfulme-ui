<template>
  <!-- <div> -->
  <div class="min-h-screen bg-gradient-to-br from-blue-300 to-green-200">
    <header class="sticky top-0 py-7">
      <div class="uppercase font-bold text-4xl sm:text-6xl justify-self-center font-doto">mindful me</div>
    </header>
    <!-- <HomePage /> -->
    <RouterView />
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router'
// import HomePage from './views/HomePage.vue';
</script>

<style scoped lang="scss"></style>
