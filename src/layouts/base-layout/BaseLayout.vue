<template>
  <div class="base-layout">
    <!-- Header -->
    <header class="header">
      <nav class="nav">
        <!-- Brand / Site name (left) -->
        <div class="brand">diana-tsevan</div>

        <!-- Navigation links (right) -->
        <ul class="nav-links">
          <li><router-link to="/hello">_hello</router-link></li>
          <li><router-link to="/about-me">_about-me</router-link></li>
          <li><router-link to="/projects">_projects</router-link></li>
          <li><router-link to="/contact-me">_contact-me</router-link></li>
        </ul>
      </nav>
    </header>

    <!-- Main content (router-view displays page components) -->
    <main class="main-content">
      <router-view />
    </main>

    <!-- Footer -->
    <footer class="footer">
      <div class="footer-container">
        <span>find me in:</span>
        <ul class="social-links">
          <li>
            <a href="https://twitter.com/username" target="_blank" rel="noopener">Twitter</a>
          </li>
          <li>
            <a href="https://facebook.com/username" target="_blank" rel="noopener">Facebook</a>
          </li>
        </ul>
      </div>
    </footer>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'BaseLayout',
})
</script>

<style scoped>
/* Base layout to make the page fill the viewport height. */
.base-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #0e1111; /* dark background */
  color: #fff; /* text color */
  font-family: 'Fira Code', monospace; /* example font */
  margin: 0;
}

/* Header styling */
.header {
  padding: 0 2rem;
  height: 60px;
  display: flex;
  align-items: center;
  background-color: #1a1f1f;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
}

.nav {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* Brand or site name */
.brand {
  font-size: 1.2rem;
  font-weight: bold;
}

/* Navigation links */
.nav-links {
  list-style: none;
  display: flex;
  gap: 1.5rem;
  margin: 0;
  padding: 0;
}

.nav-links li {
  display: inline-block;
}

.nav-links a {
  color: #fff;
  text-decoration: none;
  transition: color 0.2s ease-in-out;
}

.nav-links a:hover {
  color: #62dafc; /* highlight color on hover */
}

/* Main content: grows to fill remaining space */
.main-content {
  flex: 1;
  padding: 2rem;
}

/* Footer styling */
.footer {
  background-color: #1a1f1f;
  color: #fff;
  padding: 1rem 2rem;
  text-align: center;
}

.footer-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}

.social-links {
  list-style: none;
  display: flex;
  gap: 1rem;
  padding: 0;
  margin: 0;
}

.social-links a {
  color: #fff;
  text-decoration: none;
  transition: color 0.2s ease-in-out;
}

.social-links a:hover {
  color: #62dafc;
}
</style>
