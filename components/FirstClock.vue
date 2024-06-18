<template>
    <div class="flex flex-col h-screen items-center justify-center relative">
      <!-- formats the text above the "clock" -->
      <div class="absolute top-24 font-bold text-lg mt-80 w-60 h-10 border-black border-4 rounded-lg bg-gray-100">
        <p class="text-center">{{ currentTime.timezone }}</p>
        <!-- <TimezonePicker /> -->
      </div>
      <!-- the "clock" -->
      <div
        class="flex flex-col items-center justify-center w-60 h-24 m-auto px-8 border-black border-8 rounded-xl shadow-xl relative bg-gray-100"
      >
        <!-- only shows hours and minutes -->
        <p class="font-bold py-4 text-5xl">
          {{ currentTime.time.toLocaleTimeString([], { hour12: true }).slice(0, -6) }}
        </p>
        <!-- only shows AM or PM -->
        <p class="absolute bottom-2 right-2 font-bold text-lg">
          {{ currentTime.time.toLocaleTimeString([], { hour12: true }).slice(-2) }}
        </p>
      </div>
    </div>
  </template>
  
  <script>
  import { useCurrentTime } from "../composables/useCurrentTime";
  
  export default {
    name: "CurrentTimeExample",
    setup() {
      const { currentTime } = useCurrentTime();
      console.log(currentTime.value);
      return { currentTime };
    },
  };
  </script>
  