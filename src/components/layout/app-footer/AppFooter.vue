<template>
  <footer class="footer">
    <div class="footer-container">
      <span>find me in:</span>
      <ul class="social-links">
        <li>
          <a href="https://twitter.com/username" target="_blank" rel="noopener"
            >Twitter</a
          >
        </li>
        <li>
          <a href="https://facebook.com/username" target="_blank" rel="noopener"
            >Facebook</a
          >
        </li>
      </ul>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
@use '@/styles/variables/theme/aliases/theme';

.footer {
  color: #fff;
  padding: utils.rem(16px) utils.rem(24px);
  text-align: center;
  border-top: 1px solid theme.$stroke;
}

.footer-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: utils.rem(8px);
}

.social-links {
  list-style: none;
  display: flex;
  gap: utils.rem(16px);
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
