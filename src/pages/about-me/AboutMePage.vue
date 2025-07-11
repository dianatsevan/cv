// TODO: rework ai generated code

<template>
  <div class="about-me-page">
    <!-- EDITOR AREA (Tabs + Code) -->
    <div class="editor-area">
      <!-- Main Editor Content -->
      <div class="editor-content">
        <div class="line-numbers">
          <span v-for="n in 16" :key="n">{{ n }}</span>
        </div>
        <div class="code-text">
          <pre>
/**
 * About me
 * I have 5 years of experience in web
 * development lorem ipsum dolor sit amet,
 * consectetur adipiscing elit, sed do eiusmod
 * tempor incididunt ut labore et dolore
 * magna aliqua. Ut enim ad minim veniam,
 * quis nostrud exercitation ullamco laboris
 * nisi ut aliquip ex ea commodo consequat.
 * Duis aute irure dolor in reprehenderit in
 *
 * Duis aute irure dolor in reprehenderit in
 * voluptate velit esse cillum dolore eu fugiat
 * nulla pariatur. Excepteur sint occaecat
 * officia deserunt mollit anim id est laborum.
 */
          </pre>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use './about-me-page.scss';
</style>
