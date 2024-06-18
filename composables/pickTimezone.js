import moment from 'moment-timezone';
import { ref, onMounted } from 'vue';

export function useTimezonePicker() {
  const timezones = ref([]);
  
  onMounted(() => {
    timezones.value = moment.tz.names();
  });

  function updateTimezone(event) {
    return event.target.value;
  }

  return {
    timezones,
    updateTimezone
  };
}
