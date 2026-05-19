<template>
  <div id="app">
    <HeaderComponent />
    <div class="main-content">
      <router-view />
    </div>
  </div>
</template>

<script>
import HeaderComponent from './components/HeaderComp.vue';

export default {
  name: 'App',
  components: {
    HeaderComponent
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&family=Space+Grotesk:wght@400;500;600&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: #ffffff;
  font-family: 'Outfit', -apple-system, BlinkMacSystemFont, sans-serif;

}

.main-content {
  min-height: 100vh;
}

h2, h3, h4, h5, h6 {
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 600;
  letter-spacing: -0.02em;
}

h1 {

  font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  font-weight: bold;
}

h2 {
  font-size: 2rem;
  color: #ffffff;
  padding-left: 1rem;
  margin: 1.5rem 0 1rem;
}

h3 {
  font-size: 1.5rem;
  color: #e2e8f0;
  margin: 1rem 0 0.75rem;
}

p {
  font-size: 1rem;
  color: #cbd5e1;
  line-height: 1.7;
  margin-bottom: 1rem;
}

code, pre, kbd, .code-block {
  font-family: 'Fira Code', 'JetBrains Mono', 'Courier New', monospace;
  font-size: 0.85rem;
  background: rgba(0, 0, 0, 0.3);
  padding: 0.2rem 0.4rem;
  border-radius: 6px;
}

ul, ol {
  color: #cbd5e1;
  line-height: 1.7;
  margin-left: 1.5rem;
}

li {
  margin: 0.5rem 0;
}






@media (max-width: 768px) {
  .main-content {
    padding-top: 70px;
  }

  h1 {
    font-size: 2rem;
  }

  h2 {
    font-size: 1.5rem;
  }

  h3 {
    font-size: 1.2rem;
  }

  p, li {
    font-size: 0.9rem;
  }
}

@keyframes fade {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

h1, h2, h3, p {
  animation: fade 0.2s forwards;
}

h2 {
  animation-delay: 0.2s;
  opacity: 0;
  animation-fill-mode: forwards;
}

p {
  animation-delay: 0.2s;
  opacity: 0;
  animation-fill-mode: forwards;
}
</style>
