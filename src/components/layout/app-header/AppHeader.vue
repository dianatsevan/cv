<template>
  <header class="header">
    <div class="brand">diana-tsevan</div>

    <AppNavigation />

    <button class="menu-icon" @click="toggleNavigation">
      <MenuIcon v-if="!isNavigationOpen" />
      <CrossIcon v-else />
    </button>
  </header>
</template>

<script setup lang="ts">
import { AppNavigation } from '@/components/layout/app-navigation';
import { CrossIcon, MenuIcon } from '@/components/icons';
import { useNavigation } from '@/composables/use-navigation';

const { toggleNavigation, isNavigationOpen } = useNavigation();
</script>

<style scoped>
@import './app-header.scss';
</style>
