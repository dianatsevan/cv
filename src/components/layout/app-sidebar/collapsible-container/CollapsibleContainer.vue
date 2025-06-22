<template>
  <div class="collapsible" :data-collapsed="isCollapsed">
    <div class="header" @click="isCollapsed = !isCollapsed">
      <ChevronSolidDownIcon class="chevron" />
      <slot name="header" />
    </div>

    <ul class="content">
      <slot name="content" />
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ChevronSolidDownIcon } from '@/components/icons';
import { ref } from 'vue';

const isCollapsed = ref(false);
</script>

<style scoped lang="scss">
@use '@/styles/variables/theme/aliases/theme';
@use '@/styles/variables/theme/colors';

.collapsible {
  border-bottom: 1px solid theme.$stroke;
}

.header {
  display: flex;
  align-items: center;
  padding: utils.rem(12px) utils.rem(24px);
  border-bottom: 1px solid theme.$stroke;
  font-weight: bold;
  font-size: utils.rem(16px);
  color: colors.$slate-50;
  cursor: pointer;
}

.chevron {
  margin-right: utils.rem(12px);
  transition: transform 0.2s ease;
}

.content {
  display: flex;
  flex-direction: column;
  gap: utils.rem(8px);
  padding: utils.rem(12px);
  margin: 0;
  list-style: none;
  overflow: hidden;
}

.collapsible[data-collapsed='true'] {
  & .header {
    border-bottom: 0;
  }

  & .chevron {
    transform: rotate(-90deg);
  }

  .content {
    max-height: 0;
    padding: 0;
  }
}
</style>
