import Button from './Button.vue';
import { BIconDownload } from 'bootstrap-icons-vue';

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
export default {
  title: 'AliDesignSystem/Button',
  component: Button,
  argTypes: {
    onClick: {},
    theme: {
      control: 'select',
      options: ['default', 'darkRed', 'plainOrange', 'disabled'],
    },
  },
  decorators: [
    () => ({ template: '<div class="sk-w-80 sk-h-[54px]"><story/></div>' }),
  ],
};

// More on writing stories with args: https://storybook.js.org/docs/vue/writing-stories/args
export const Primary = {
  args: {
    label: 'Button',
    theme: 'default',
  },
};

export const Secondary = {
  args: {
    label: 'Button',
    theme: 'darkRed',
  },
};

export const WithIcon = {
  render: (args) => ({
    components: { Button, BIconDownload },
    setup() {
      return { args };
    },
    template:
      '<Button v-bind="args"><BIconDownload class="sk-w-full sk-h-full"></BIconDownload></Button>',
  }),
  args: {
    label: 'Download',
    hasIcon: true,
  },
};
