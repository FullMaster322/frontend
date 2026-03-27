<template>
  <header class="header" :style="{ paddingRight: scrollbarWidth + 'px' }">
    <nav class="nav">
      <span
        v-for="item in navItems"
        :key="item.path"
        :class="{ active: activeSection === item.section }"
        @click="navigate(item.path)"
        class="nav-item"
      >
        {{ item.label }}
      </span>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'HeaderComponent',
  data() {
    return {
      activeSection: null,
      scrollbarWidth: 0,
      navItems: [
        { label: 'Главная', path: 'home', section: 'home' },
        { label: 'Лекции', path: 'lectures', section: 'lectures' },
        { label: 'Калькулятор формул', path: 'calculator', section: 'calculator' },
        { label: 'Проверь себя', path: 'tests', section: 'tests' }
      ]
    };
  },
  methods: {
    navigate(routeName) {
      this.$router.push({ name: routeName });
    },
    updateActiveFromRoute(route) {
      const path = route.path;

      const activeItem = this.navItems.find(item => path.includes(`/${item.path}`)) ||
                        (path === '/' && this.navItems.find(item => item.path === 'home'));

      this.activeSection = activeItem ? activeItem.section : null;
    },
    getScrollbarWidth() {
      const div = document.createElement('div');
      div.style.overflowY = 'scroll';
      div.style.width = '50px';
      div.style.height = '50px';
      div.style.visibility = 'hidden';
      document.body.appendChild(div);
      const scrollbarWidth = div.offsetWidth - div.clientWidth;
      document.body.removeChild(div);
      return scrollbarWidth;
    }
  },
  watch: {
    $route(to) {
      this.updateActiveFromRoute(to);
    }
  },
  mounted() {
    this.updateActiveFromRoute(this.$route);
    this.scrollbarWidth = this.getScrollbarWidth();

    // Обновляем ширину при изменении размера окна
    window.addEventListener('resize', () => {
      this.scrollbarWidth = this.getScrollbarWidth();
    });
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.scrollbarWidth);
  }
};
</script>

<style scoped>
.header {
  width: 100%;
  background: rgba(20, 25, 35, 0.6);
  backdrop-filter: blur(14px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  z-index: 9999;
  text-align: center;
  position: fixed;
  top: 0;
  left: 0;
  box-sizing: border-box; /* Добавьте это */
}

.nav {
  padding: 20px 0;
}

.nav-item {
  cursor: pointer;
  color: rgb(212, 212, 212);
  transition: 0.2s;
  font-size: 16px;
  padding: 8px 12px;
  font-family: inherit;
}

.nav-item:not(:first-child) {
  margin-left: 25px;
}

.nav-item:hover {
  color: white;
}

.nav-item.active {
  color: #00bfff;
  border-bottom: 2px solid #00bfff;
}

@media (max-width: 768px) {
  .nav {
    padding: 15px 0;
  }

  .nav-item {
    font-size: 14px;
    padding: 6px 8px;
  }

  .nav-item:not(:first-child) {
    margin-left: 15px;
  }
}
</style>
