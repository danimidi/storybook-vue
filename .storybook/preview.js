/** @type { import('@storybook/vue3').Preview } */
import '../src/main.css';
import '../src/fonts.css';
const parameters = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default parameters;
