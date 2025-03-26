<template>
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
</template>

<style scoped>
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
