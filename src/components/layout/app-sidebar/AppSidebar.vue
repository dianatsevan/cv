<template>
  <aside class="sidebar">
    <div class="sidebar-header">
      <span>projects</span>
    </div>

    <ul class="tech-list">
      <li>
        <label>
          <input type="checkbox" checked />
          React
        </label>
      </li>
      <li>
        <label>
          <input type="checkbox" />
          HTML
        </label>
      </li>
      <li>
        <label>
          <input type="checkbox" />
          CSS
        </label>
      </li>
      <li>
        <label>
          <input type="checkbox" />
          Vue
        </label>
      </li>
      <li>
        <label>
          <input type="checkbox" />
          Angular
        </label>
      </li>
      <li>
        <label>
          <input type="checkbox" />
          Gatsby
        </label>
      </li>
      <li>
        <label>
          <input type="checkbox" />
          Flutter
        </label>
      </li>
    </ul>
  </aside>
</template>

<style scoped>
.sidebar {
  width: 220px;
  background-color: #1a1f1f;
  border-right: 1px solid #2a2f2f;
  padding: 1rem;
  overflow-y: auto;
}

.sidebar-header {
  margin-bottom: 1rem;
  font-weight: bold;
  font-size: 1rem;
  color: #ddd;
}

/* The checkboxes list */
.tech-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.tech-list label {
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.tech-list input[type='checkbox'] {
  accent-color: #62dafc; /* For modern browsers, change checkbox color */
}
</style>
