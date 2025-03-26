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

<style scoped>
/*
  Root layout: a row of three sections:
    1. left-panel (activity bar)
    2. sidebar (file tree)
    3. editor-area (tabs + code)
*/
.about-me-page {
  display: flex;
  height: 80vh; /* or whatever fits your design */
  background-color: #0e1111; /* dark background */
  color: #cdd3de; /* typical “editor text” color */
}
/* ============ EDITOR AREA (Tabs + Code) ============ */
.editor-area {
  flex: 1;
  display: flex;
  flex-direction: column;
}

/* Main code editor content below tabs */
.editor-content {
  flex: 1;
  display: flex;
  overflow: hidden; /* or auto, to scroll if needed */
}

.line-numbers {
  background-color: #1a1f1f;
  padding: 1rem 0.5rem;
  text-align: right;
  border-right: 1px solid #2a2f2f;
  user-select: none; /* typically line numbers are not selectable */
}

.line-numbers span {
  display: block;
  padding: 0 0.5rem;
  color: #4b5254; /* line number color */
}

.code-text {
  flex: 1;
  padding: 1rem;
  overflow: auto;
}

.code-text pre {
  margin: 0;
  line-height: 1.4;
  color: #80868b; /* comment-style text color */
}
</style>
