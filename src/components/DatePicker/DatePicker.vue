<script>
import Datepicker from 'vuejs3-datepicker';

export default {
  name: 'DatePicker',
  components: {
    Picker: Datepicker,
  },
  props: {
    value: { type: String, default: '' },
    placeholder: String,
  },
  data() {
    return {
      dateValue: this.value,
      isOpen: false,
    };
  },
  methods: {
    submitDate(val) {
      this.isOpen = false;
      this.onChangeDate(val);
    },
    onChangeDate(val) {
      this.$emit('onChageDatePicker', val);
      console.log({ val });
    },
  },
};
</script>
<template>
  <div class="dl-w-full dl-h-full">
    <div class="dl-w-fit">
      <Picker
        v-model="dateValue"
        :value="dateValue"
        :inline="true"
        @selected="submitDate"
      >
      </Picker>
    </div>
  </div>
</template>

<style lang="css">
.vuejs3-datepicker__calendar-topbar {
  background-color: #e65e22 !important;
}
.vuejs3-datepicker__calendar .cell.selected {
  background-color: #e65e22 !important;
}
.vuejs3-datepicker__calendar .cell.selected:hover {
  background-color: #e65e22 !important;
}
.vuejs3-datepicker__calendar .cell:hover {
  border-color: #e65e22 !important;
  background-color: #e65e22 !important;
}
</style>
