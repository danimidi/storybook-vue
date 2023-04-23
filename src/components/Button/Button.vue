<template>
  <button class="button" :style="styles" @click="onClick">
    <div v-if="loading" class="fragment-container">
      <div class="loading-msg">Cargando...</div>
      <div class="loader-spin"></div>
    </div>
    <div v-else class="fragment-container">
      {{ label }}
      <slot></slot>
    </div>
  </button>
</template>

<style lang="scss" scoped></style>

<script>
export default {
  name: 'Button',
  props: {
    label: String,
    theme: {
      type: String,
      default: 'default',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    loading: { type: Boolean, default: false },
  },
  data() {
    return {
      themes: {
        default: {
          backgroundColor: 'white',
          color: '#262628',
        },
        plainRed: {
          backgroundColor: '#fc4848',
          color: 'white',
        },
        disabled: {
          backgroundColor: '#fafafa',
          color: '#c6c6c8',
          border: 'none',
          pointerEvents: 'none',
        },
      },
    };
  },
  methods: {
    onClick() {
      this.$emit('onClick');
    },
  },
  computed: {
    styles() {
      if (this.disabled) return this.themes['disabled'];
      return {
        ...this.themes[this.theme],
        pointerEvents: this.loading ? 'none' : '',
      };
    },
  },
};
</script>

<style lang="css" scoped>
.button {
  width: 100%;
  height: 100%;
  border: 1px solid var(--charcoal-color);
  border-radius: 3rem;
  font-size: 1.4rem;
  font-family: var(--secondary-font);
  font-weight: 600;
  box-shadow: 0px 3px 4px -5px rgba(24, 24, 28, 0.03),
    0px 1px 2px rgba(24, 24, 28, 0.04);
}
.fragment-container {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.loading-msg {
  margin-right: 1.6rem;
  animation: ds-pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
.loader-spin {
  width: 1.6rem;
  height: 1.6rem;
  color: var(--charcoal-color);
  border-right-color: transparent;
  border-radius: 50%;
  border-width: 2px;
  border-style: solid;
  animation: ds-spin 1s linear infinite;
}
@keyframes ds-pulse {
  50% {
    opacity: 0.5;
  }
}
@keyframes ds-spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
