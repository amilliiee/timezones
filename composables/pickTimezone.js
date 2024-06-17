import { timezones } from 'vue-timezone-picker';

export default {
    data() {
        return {
            selectedTimezone: null,
            timezones: timezones.map(tz => ({ value: tz.name, text: tz.name }))
        };
    };
}