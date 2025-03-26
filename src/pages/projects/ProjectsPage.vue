<template>
  <div class="content-container">
    <!-- Example project cards (replace with dynamic data as needed) -->
    <div class="project-card">
      <div class="project-image">
        <!-- Example image -->
        <img src="https://via.placeholder.com/300" alt="Project 1" />
        <!-- Tech icon in top-right corner, optional -->
        <div class="tech-icon">React</div>
      </div>
      <h3>Project 1 // _ui-animations</h3>
      <p>Duis aute irure dolor in velit esse cillum dolore.</p>
      <button class="view-project-btn">view-project</button>
    </div>

    <div class="project-card">
      <div class="project-image">
        <img src="https://via.placeholder.com/300" alt="Project 2" />
        <div class="tech-icon">React</div>
      </div>
      <h3>Project 2 // _tetris-game</h3>
      <p>Duis aute irure dolor in velit esse cillum dolore.</p>
      <button class="view-project-btn">view-project</button>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.content-container {
  display: flex;
  flex-direction: row;
  align-content: flex-start;
  flex-wrap: wrap;
  gap: 1.5rem; /* space between cards */
  padding: 1.5rem;
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
