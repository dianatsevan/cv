<template>
  <nav class="nav">
    <ul class="nav-links">
      <div class="nav-links__left">
        <li>
          <router-link to="/" @click="toggleNavigation">_hello</router-link>
        </li>
        <li>
          <router-link to="/about-me" @click="toggleNavigation"
            >_about-me</router-link
          >
        </li>
        <li>
          <router-link to="/projects" @click="toggleNavigation"
            >_projects</router-link
          >
        </li>
      </div>

      <li class="nav-links__right">
        <router-link to="/contact-me" @click="toggleNavigation"
          >_contact-me</router-link
        >
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import { useNavigation } from '@/composables/use-navigation';

const { toggleNavigation } = useNavigation();
</script>

<style scoped>
@import './app-navigation.scss';
</style>
