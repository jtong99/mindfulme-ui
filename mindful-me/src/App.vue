<template>
  <div>
    <HomePage />
    <RouterView />
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router';
import HomePage from './components/pages/HomePage.vue';
</script>

<style scoped lang="scss"></style>
