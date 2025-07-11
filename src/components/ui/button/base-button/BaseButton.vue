<template>
  <component
    :is="href ? 'a' : 'button'"
    :class="classes"
    :disabled="disabled || loading"
    :href="href"
    :target="target"
    :rel="computedRel"
    @click="handleClick"
  >
    <span v-if="loading" class="loader"></span>

    <slot></slot>
  </component>
</template>

<script setup lang="ts">
import { computed } from 'vue';

type ButtonVariant = 'filled' | 'ghost' | 'icon' | 'link';
type ButtonColor = 'primary' | 'success' | 'warning' | 'error' | 'default';

interface Props {
  variant: ButtonVariant;
  color?: ButtonColor;
  disabled?: boolean;
  loading?: boolean;
  href?: string;
}

const {
  variant,
  color = 'default',
  disabled = false,
  loading = false,
  href = '',
} = defineProps<Props>();

const target = computed(() => (href ? '_blank' : undefined));
const computedRel = computed(() => (href ? 'noopener noreferrer' : undefined));

const emit = defineEmits<{
  click: [event: MouseEvent];
}>();

const classes = computed(() => [
  'base',
  `${variant}`,
  `${color}`,
  {
    disabled,
    loading,
    link: !!href,
  },
]);

const handleClick = (event: MouseEvent) => {
  if (!disabled && !loading) {
    emit('click', event);
  }
};
</script>

<style lang="scss">
@use './base-button.scss';
</style>
