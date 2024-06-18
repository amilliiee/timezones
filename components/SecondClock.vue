<template>
    <div class="flex flex-col h-screen items-center justify-center relative">
      <!-- formats the text above the "clock" -->
      <div class="absolute top-24 font-bold text-lg mt-80 w-60 h-10 border-black border-4 shadow-lg rounded-lg bg-gray-100">
        <div class="text-center">
            <TimezonePicker @timezone-changed="handleTimezoneChange" />
        </div>
      </div>
      <!-- the "clock" -->
      <div
        class="flex flex-col items-center justify-center w-60 h-24 m-auto px-8 border-black border-8 rounded-xl shadow-xl relative bg-gray-100"
      >
        <!-- only shows hours and minutes -->
        <p class="font-bold py-4 text-5xl">
          {{ formattedTime }}
        </p>
        <!-- only shows AM or PM -->
        <p class="absolute bottom-2 right-2 font-bold text-lg">
          {{ amPm }}
        </p>
      </div>
    </div>
  </template>
  
  <script>
  import { useCurrentTime } from "../composables/useCurrentTime";
  import TimezonePicker from './TimezonePicker.vue';
  
  export default {
    name: "ChosenTime",
    components: { TimezonePicker },
    setup() {
      const { currentTime, updateTimezone } = useCurrentTime();
      const formattedTime = ref('');
      const amPm = ref('')

      const updateFormattedTime = () => {
        const time = new Date(currentTime.value.time.toLocaleString('en-US', {timeZone: currentTime.value.timezone}));
        formattedTime.value = time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true }).slice(0, -2);
        amPm.value = time.toLocaleTimeString([], { hour12: true }).slice(-2);
      };

      onMounted(() => {
        setInterval(updateFormattedTime, 60000)
      });

      const handleTimezoneChange = (timezone) => {
        updateTimezone(timezone);
        updateFormattedTime();
      };

      return { currentTime, formattedTime, amPm, handleTimezoneChange };
    },
  };
  </script>
  