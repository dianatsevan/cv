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
import { AppSidebar } from '@/components/layout/app-sidebar'
</script>

<style scoped>
.projects-editor-layout {
  display: flex;
  flex: 1;
  height: 100%;
  background-color: #0e1111; /* Inherit or match your dark theme */
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
  padding: 0.5rem 1rem;
  background-color: #1f2424;
  border-bottom: 1px solid #2a2f2f;
  gap: 1rem;
}

.active-tab {
  background-color: #2f3939;
  color: #62dafc;
  padding: 0.3rem 0.6rem;
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
  padding: 1.5rem;
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem; /* space between cards */
  overflow-y: auto; /* scroll if lots of cards */
}

/* Example project card styling */
.project-card {
  width: 300px;
  background-color: #1a1f1f;
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
  top: 0.5rem;
  right: 0.5rem;
  background-color: #2f3939;
  padding: 0.3rem 0.6rem;
  border-radius: 4px;
  font-size: 0.8rem;
  color: #62dafc;
}

.project-image img {
  display: block;
  width: 100%;
  height: auto;
}

.project-card h3 {
  margin: 0 0 0.5rem;
  color: #62dafc;
  font-size: 1rem;
}

.project-card p {
  margin: 0 0 1rem;
  color: #cdd3de;
  font-size: 0.9rem;
  line-height: 1.4;
}

/* “view-project” button */
.view-project-btn {
  background-color: #2f3939;
  color: #ddd;
  border: none;
  border-radius: 4px;
  padding: 0.4rem 1rem;
  cursor: pointer;
  transition: background-color 0.2s;
}

.view-project-btn:hover {
  background-color: #62dafc;
  color: #1a1f1f;
}
</style>
