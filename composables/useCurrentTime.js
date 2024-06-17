import { ref, onBeforeUnmount } from "vue";

export const useCurrentTime = () => {
  const currentTime = ref({
    time: new Date(),
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
  });

  const updateCurrentTime = () => {
    currentTime.value = {
      time: new Date(),
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone
    };
  };

  const updateTimeInterval = onBeforeMount(() => {
    setInterval(updateCurrentTime, 1000);
  });

  onBeforeUnmount(() => {
    clearInterval(updateTimeInterval);
  });
  
  return {
    currentTime,
  };
};
