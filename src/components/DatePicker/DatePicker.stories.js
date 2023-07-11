import DatePicker from './DatePicker.vue';

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
export default {
  title: 'AliDesignSystem/DatePicker',
  component: DatePicker,
  argTypes: {},
  decorators: [
    () => ({ template: '<div class="dl-w-64 dl-h-10"><story/></div>' }),
  ],
};

// More on writing stories with args: https://storybook.js.org/docs/vue/writing-stories/args
export const BasicDatePicker = {
  args: {
    placeholder: 'DD/MM/YYYY',
    value: '',
  },
};
