// TODO: rework ai generated code

<template>
  <div class="projects-editor-layout">
    <AppSidebar />

    <!-- MAIN CONTENT AREA -->
    <div class="editor-content">
      <!-- Sub-header area (tabs or filters) -->
      <div class="sub-header">
        <span class="active-tab">React</span>
        <span class="close-tab">X</span>
      </div>

      <div class="content-container">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { AppSidebar } from '@/components/layout/app-sidebar';
</script>

<style lang="scss" scoped>
.projects-editor-layout {
  display: flex;
  flex: 1;
  height: 100%;
  color: #fff; /* Adjust text color as needed */
}

.editor-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden; /* or auto, if you want scrolling in the main area */
}

/* Sub-header line with the “React” tab and an “X” on the right */
.sub-header {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: utils.rem(8px) utils.rem(16px);
  border-bottom: 1px solid #2a2f2f;
  gap: utils.rem(16px);
}

.active-tab {
  color: #62dafc;
  padding: utils.rem(4px) utils.rem(8px);
  border-radius: 4px;
}

.close-tab {
  margin-left: auto; /* pushes close button to right side */
  cursor: pointer;
  color: #777;
}

/* Where your project cards live */
.content-container {
  height: 100%;
  padding: utils.rem(24px);
  display: flex;
  flex-wrap: wrap;
  gap: utils.rem(24px); /* space between cards */
  overflow-y: auto; /* scroll if lots of cards */
}

/* Example project card styling */
.project-card {
  width: utils.rem(300px);
  border-radius: 8px;
  padding: 1rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.project-image {
  position: relative;
  margin-bottom: 1rem;
  border-radius: 8px;
  overflow: hidden;
}

/* A small corner label or icon for the technology */
.tech-icon {
  position: absolute;
  top: utils.rem(8px);
  right: utils.rem(8px);
  padding: utils.rem(4px) utils.rem(8px);
  border-radius: 4px;
  font-size: utils.rem(12px);
  color: #62dafc;
}

.project-image img {
  display: block;
  width: 100%;
  height: auto;
}

.project-card h3 {
  margin: 0 0 utils.rem(8px);
  color: #62dafc;
  font-size: utils.rem(16px);
}

.project-card p {
  margin: 0 0 utils.rem(16px);
  color: #cdd3de;
  font-size: utils.rem(12px);
  line-height: 1.4;
}

/* “view-project” button */
.view-project-btn {
  color: #ddd;
  border: none;
  border-radius: 4px;
  padding: utils.rem(8px) utils.rem(16px);
  cursor: pointer;
  transition: background-color 0.2s;
}

.view-project-btn:hover {
  background-color: #62dafc;
  color: #1a1f1f;
}
</style>
