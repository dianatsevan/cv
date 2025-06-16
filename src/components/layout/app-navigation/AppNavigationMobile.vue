<template>
  <div class="mobile-nav">
    <div class="caption"># navigate:</div>
    <AppNavigation />
  </div>
</template>

<script setup lang="ts">
import { AppNavigation } from '@/components/layout/app-navigation';
</script>

<style scoped lang="scss">
@use './app-navigation-mobile.scss';
</style>
