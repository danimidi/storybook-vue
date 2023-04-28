<template>
  <input
    :id="id"
    :value="value"
    @input="input"
    :placeholder="placeholder"
    :disabled="disabled"
    autocomplete="off"
    class="sk-w-full sk-h-full sk-text-sm sk-text-dark-grey sk-p-2.5 sk-rounded-lg sk-border sk-border-solid sk-border-grey sk-shadow-default sk-outline-0"
  />
</template>

<script>
export default {
  name: 'Input',
  props: {
    id: String,
    value: String,
    placeholder: String,
    disabled: Boolean,
  },
  methods: {
    input(e) {
      this.$emit('onChangeInput', e.target.value);
    },
  },
};
</script>
