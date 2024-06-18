import { ref, onMounted, onBeforeUnmount } from "vue";
import moment from 'moment-timezone';

export const useCurrentTime = (initialTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone) => {
  const currentTime = ref({
    time: new Date(),
    timezone: initialTimezone,
  });

  const updateCurrentTime = () => {
    currentTime.value.time = new Data();
  };

  // updates every minute
  const updateTimeInterval = onBeforeMount(() => {
    setInterval(updateCurrentTime, 60000);
  });

  onBeforeUnmount(() => {
    clearInterval(updateTimeInterval);
  });

  // passes chosen time zone into second clock
  const updateTimezone = (timezone) => {
    currentTime.value.timezone = timezone;
  }

  // formats time
  const formattedTime = computed(() => {
    return new Intl.DateTimeFormat([], {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    }).format(currentTime.value.time);
  });
  
  return {
    currentTime,
    updateTimezone,
    formattedTime
  };
};
