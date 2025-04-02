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

<style lang="scss" scoped>
.sidebar {
  width: utils.rem(220px);
  background-color: #1a1f1f;
  border-right: 1px solid #2a2f2f;
  padding: utils.rem(16px);
  overflow-y: auto;
}

.sidebar-header {
  margin-bottom: utils.rem(16px);
  font-weight: bold;
  font-size: utils.rem(16px);
  color: #ddd;
}

/* The checkboxes list */
.tech-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: utils.rem(8px);
}

.tech-list label {
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: utils.rem(8px);
}

.tech-list input[type='checkbox'] {
  accent-color: #62dafc; /* For modern browsers, change checkbox color */
}
</style>
