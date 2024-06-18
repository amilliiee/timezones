<template>
  <div>
    <select @change="handleUpdateTimezone" class="w-full h-full appearance-none bg-transparent border-none text-center">
      <option v-for="tz in timezones" :key="tz" :value="tz">
        {{ tz }}
      </option>
    </select>
    <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
      <!-- <svg class="h-8 w-8 fill-current text-white" viewBox="0 0 20 20"> -->
        <svg class="h-8 w-8 fill-current" viewBox="0 0 20 20">
        <path d="M7 7l3 3 3-3z" />
      </svg>
    </div>
  </div>
</template>

<script>
import { useTimezonePicker } from '../composables/pickTimezone';

export default {
  setup(_, { emit }) {
    const { timezones, updateTimezone } = useTimezonePicker();

    function handleUpdateTimezone(event) {
      const timezone = updateTimezone(event);
      emit('timezone-changed', timezone);
    }

    return {
      timezones,
      handleUpdateTimezone
    };
  }
};
</script>