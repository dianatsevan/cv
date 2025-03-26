<template>
  <div class="base-layout">
    <AppHeader />

    <main class="main-content">
      <slot />
    </main>

    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import { AppHeader } from '@/components/layout/app-header'
import { AppFooter } from '@/components/layout/app-footer'
</script>

<style scoped>
.base-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #0e1111;
  color: #fff;
  margin: 0;
}

.main-content {
  display: flex;
  flex-direction: column;
  flex: 1;
}
</style>
