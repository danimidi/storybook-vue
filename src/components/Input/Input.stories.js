import Input from './Input.vue';

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
export default {
  title: 'AliDesignSystem/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {},
  decorators: [
    () => ({ template: '<div class="sk-w-80 sk-h-[54px]"><story/></div>' }),
  ],
};

// More on writing stories with args: https://storybook.js.org/docs/vue/writing-stories/args
export const Primary = {
  args: {
    placeholder: 'Input',
  },
};
