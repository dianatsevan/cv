<template>
  <section class="hero-section">
    <div class="intro-text">
      <span class="small-heading">Hi all. I am</span>
      <h1 class="hero-name">Diana Tsevan</h1>
      <h2 class="hero-subtitle">&gt; Front-end developer</h2>
    </div>

    <div class="code-snippet">
      <p>// complete the game to continue</p>
      <p>// you can also see it on my Github page</p>
      <p>
        const githubLink =
        <span class="string">"https://github.com/example/url"</span>
      </p>
    </div>
  </section>
</template>

<script lang="ts"></script>

<style lang="scss" scoped>
@use '@/styles/variables/theme/colors';

.hero-section {
  /* Choose spacing that suits your design */
  padding: utils.rem(32px);

  /* You can adjust the min-height if you want the section taller */
  min-height: 60vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: utils.rem(32px); /* spacing between text blocks */
  flex: 1;

  /* Dark background inherited from your base layout if needed */
  color: #fff;
}

/* Intro text styling */
.intro-text {
  display: flex;
  flex-direction: column;
  gap: utils.rem(8px);
}

/* The small "Hi all. I am" text */
.small-heading {
  font-size: utils.rem(16px);
  color: #aaa; /* a bit softer color */
}

/* The big name text */
.hero-name {
  font-size: utils.rem(48px);
  font-weight: bold;
  margin: 0;
}

/* The sub-heading “> Front-end developer” */
.hero-subtitle {
  font-size: utils.rem(22px);
  margin: 0;
  color: colors.$indigo-500; /* or your preferred accent color */
}

/* Code snippet block styling */
.code-snippet {
  line-height: 1.6;
  color: #bfbfbf; /* subtle text color for “comments” */
  margin-top: utils.rem(16px);
}

/* Distinguish the link string */
.string {
  color: #62dafc;
}
</style>
