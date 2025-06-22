<template>
  <footer class="footer">
    <p>find me in:</p>

    <ul class="social-links">
      <li v-for="link in links" :key="link.title">
        <a :href="link.url" target="_blank" rel="noopener">
          <component :is="link.icon" />
        </a>
      </li>
    </ul>
  </footer>
</template>

<script setup lang="ts">
import { links } from './links.ts';
</script>

<style lang="scss" scoped>
@use './app-footer.scss';
</style>
