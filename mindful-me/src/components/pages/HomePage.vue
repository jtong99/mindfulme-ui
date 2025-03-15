<template>
  <header class="sticky top-0 py-7">
    <div class="uppercase font-bold text-6xl justify-self-center font-doto">mindful me</div>
  </header>
  <div class="flex flex-col gap-6 items-center font-mono py-7">
    <div class="font-semibold text-3xl">Welcome to MindfulMe!</div>
    <div class="text-base mono">We are thrilled that you have chosen us.</div>
    <BasicButton
      label="Sign Up"
      action="sign-up"
      btnClass="bg-transparent hover:bg-blue-500 text-blue-700 hover:text-white border-blue-500 hover:border-transparent"
    />
    <BasicButton
      label="Sign In"
      action="sign-in"
      btnClass="bg-red-500 hover:bg-transparent text-white hover:text-red-700 border-transperant hover:border-red-500"
    />
    <div class="text-xs">Created by John, Dhanush, Alex and Vicky</div>
  </div>
</template>

<script setup>
import BasicButton from '../BasicButton.vue'
</script>
