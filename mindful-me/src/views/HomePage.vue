<template>
  <div class="relative w-full h-screen">
    <!-- <img class="absolute inset-0 bg-cover bg-center" src="@/assets/yoga.png"> -->
    <div class="flex flex-col gap-6 items-center font-mono py-7 max-w-sm m-auto text-center">
      <!-- <div class="font-semibold text-3xl">Welcome to MindfulMe!</div>
      <div class="text-base">We are thrilled that you have chosen us.</div> -->
      <div class="text-xl tracking-widest">A mindful space to return to yourself — for better sleep, meditation, focus, and relaxation.</div>
      <BasicButton
        label="Create Account"
        action="sign-up"
        btnClass="border font-semibold py-2 px-4 shadow-md bg-white hover:bg-slate-400 text-black hover:text-white border-black hover:border-transparent"
        rounded="rounded-40"
      />
      <BasicButton
        label="Already have an account?"
        action="sign-in"
        btnClass="text-white hover:text-slate-500 text-sm"
        :hasBorder="false"
      />
      <div class="text-xs">Created by John, Dhanush, Alex and Vicky</div>
    </div>
  </div>
</template>

<script setup>
import BasicButton from '@/components/BasicButton.vue';
</script>
