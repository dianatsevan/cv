<template>
  <header class="header">
    <nav class="nav">
      <div class="brand">diana-tsevan</div>

      <ul class="nav-links">
        <li><router-link to="/">_hello</router-link></li>
        <li><router-link to="/about-me">_about-me</router-link></li>
        <li><router-link to="/projects">_projects</router-link></li>
        <li><router-link to="/contact-me">_contact-me</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
.header {
  padding: 0 utils.rem(32px);
  height: utils.rem(60px);
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

.brand {
  font-size: utils.rem(18px);
  font-weight: bold;
}

.nav-links {
  list-style: none;
  display: flex;
  gap: utils.rem(24px);
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
  color: #62dafc;
}
</style>
