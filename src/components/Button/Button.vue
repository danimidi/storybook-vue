<script>
export default {
  name: 'Button',
  props: {
    label: String,
    theme: {
      type: String,
      default: 'default',
    },
    hasIcon: Boolean,
    disabled: Boolean,
  },
  data() {
    return {
      themes: {
        default: 'sk-bg-white sk-text-dark-grey hover:sk-bg-light-grey',
        darkRed: 'sk-bg-dark-red sk-text-white hover:sk-bg-burgundy',
        plainOrange:
          'sk-bg-primary-orange sk-text-white hover:sk-bg-secondary-orange',
        disabled:
          'sk-bg-charcoal sk-text-dark-grey sk-opacity-75 sk-pointer-events-none',
      },
    };
  },
  methods: {
    onClickButton() {
      this.$emit('onClick');
    },
  },
  computed: {
    styles() {
      if (this.disabled) return this.themes['disabled'];
      return this.themes[this.theme];
    },
  },
};
</script>

<template>
  <button
    @click="onClickButton"
    class="sk-h-full sk-w-full sk-text-sm sk-font-semibold sk-flex sk-items-center sk-justify-center sk-border sk-border-charcoal sk-shadow-default sk-rounded-lg"
    :class="styles"
    :disabled="disabled"
  >
    <div v-show="hasIcon" class="sk-mr-2.5">
      <slot></slot>
    </div>
    {{ label }}
  </button>
</template>
