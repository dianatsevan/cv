<template>
  <div class="base-layout">
    <AppHeader />

    <main class="main-content">
      <slot />
      <AppNavigationMobile v-if="isNavigationOpen" />
    </main>

    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import { AppHeader } from '@/components/layout/app-header';
import { AppFooter } from '@/components/layout/app-footer';
import { AppNavigationMobile } from '@/components/layout/app-navigation';
import { useNavigation } from '@/composables/use-navigation';

const { isNavigationOpen } = useNavigation();
defineExpose({
  isNavigationOpen,
});
</script>

<style lang="scss" scoped>
@use '@/styles/media';
@use '@/styles/variables/theme/aliases/theme';

.base-layout {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  border-radius: 8px;
  border: 1px solid theme.$stroke;
  background: theme.$background;
  overflow: hidden;
}

.main-content {
  display: flex;
  flex-direction: column;
  flex: 1;
  position: relative;
}
</style>
