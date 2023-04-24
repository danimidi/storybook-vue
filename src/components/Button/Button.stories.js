import Button from './Button.vue';

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
export default {
  title: 'AliDesignSystem/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    onClick: {},
    theme: {
      control: 'select',
      options: ['default', 'darkRed', 'plainOrange', 'disabled'],
    },
  },
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

export const Large = {
  args: {
    label: 'Button',
  },
};

export const Small = {
  args: {
    label: 'Button',
  },
};
