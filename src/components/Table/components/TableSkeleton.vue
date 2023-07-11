<script>
import Skeleton from './Skeleton';

export default {
  name: 'TableSkeleton',
  props: {
    headers: { type: Array, default: () => [] },
  },
  components: {
    Skeleton,
  },
};
</script>

<template>
  <div class="sk-h-full sk-w-full">
    <Skeleton class="sk-h-5 sk-rounded-lg" />
  </div>
</template>
