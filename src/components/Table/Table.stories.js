import Table from './Table.vue';
import TableSkeleton from './components/TableSkeleton.vue';
import { headers, rows } from './lib/dataDummy';

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
export default {
  title: 'AliDesignSystem/Table',
  component: Table,
  argTypes: {},
};

// More on writing stories with args: https://storybook.js.org/docs/vue/writing-stories/args
export const BasicTable = {
  render: (args) => ({
    components: { TableSkeleton, Table, headers, rows },
    data() {
      return {
        args,
        loading: true,
      };
    },
    mounted() {
      setTimeout(() => {
        this.loading = false;
      }, 3000);
    },
    template: `
    <TableSkeleton v-if="loading" :headers="args.headers" />
    <div v-else class="sk-w-full sk-h-80">
    <Table v-bind="args"/>
    </div>
    `,
  }),
  args: {},
};
