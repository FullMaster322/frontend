<template>
  <header class="header" :style="{ paddingRight: scrollbarWidth + 'px' }">
    <div class="header-inner">
      <div class="center-wrap">
        <div class="center-content">
          <transition name="fade-slide" mode="out-in">
            <SearchPage v-if="isSearch" key="search" ref="searchPage"/>

            <nav v-else key="nav" class="nav">
              <span
                v-for="item in navItems"
                :key="item.path"
                :class="{ active: $route.name === item.path }"
                @click="go(item.path)"
                class="nav-item"
              >
                {{ item.label }}
              </span>
            </nav>
          </transition>
        </div>

        <button class="search-toggle" @click="toggleSearch">
          <span v-if="!isSearch" class="search-btn fas fa-search"></span>
          <span v-else class="search-btn fas fa-close"></span>
        </button>
      </div>
    </div>
  </header>
</template>

<script>
import SearchPage from './SearchPage.vue'

export default {
  components: { SearchPage },

  data() {
    return {
      isSearch: false,
      scrollbarWidth: 0,

      navItems: [
        { label: 'Главная', path: 'home' },
        { label: 'Лекции', path: 'lectures' },
        { label: 'Калькулятор формул', path: 'calculator' },
        { label: 'Проверь себя', path: 'tests' }
      ]
    }
  },

  methods: {
    go(name) {
      this.$router.push({ name })
    },

    toggleSearch() {
      this.isSearch = !this.isSearch
    },

    calcScrollbar() {
      const div = document.createElement('div')
      div.style.cssText = 'overflow:scroll;width:50px;height:50px;visibility:hidden;position:absolute'
      document.body.appendChild(div)

      const width = div.offsetWidth - div.clientWidth
      document.body.removeChild(div)

      return width
    }
  },

  mounted() {
    this.scrollbarWidth = this.calcScrollbar()

    this.onResize = () => {
      this.scrollbarWidth = this.calcScrollbar()
    }

    this.onKey = (e) => {
      if (e.key === 'Escape') this.isSearch = false
    }

    window.addEventListener('resize', this.onResize)
    window.addEventListener('keydown', this.onKey)
  },

  beforeUnmount() {
    window.removeEventListener('resize', this.onResize)
    window.removeEventListener('keydown', this.onKey)
  },
}
</script>

<style scoped>
.header {
  width: 100%;
  height: 60px;
  background: rgba(34, 34, 34, 0.614);
  backdrop-filter: blur(14px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
}

.header-inner {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  gap: 20px;
}

.nav {
  display: flex;
  align-items: center;
  gap: 40px;
}

.nav-item {
  cursor: pointer;
  color: rgb(212, 212, 212);
  transition: 0.2s;
  font-size: 16px;
}

.nav-item:hover {
  color: white;
}

.nav-item.active {
  color: #00da66;
  border-bottom: 2px solid #00da66;
}

.search-toggle {
  font-size: 22px;
  padding: 8px 14px;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  background: none;
  color: rgb(212, 212, 212);
  transition: 0.2s;
}

.search-toggle:hover {
  color: white;
}

.search-wrapper {
  width: 500px;
}

@media (max-width: 768px) {
  .nav {
    gap: 12px;
  }

  .nav-item {
    font-size: 14px;
  }

  .search-wrapper {
    width: 100%;
    padding: 0 10px;
  }
}

.header-inner {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.center-wrap {
  display: flex;
  align-items: center;
  gap: 15px;
}

.center-content {
  width: 500px;
  display: flex;
  justify-content: center;
}

.nav {
  display: flex;
  gap: 30px;
}

.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.25s ease;
}

.fade-slide-enter-from {
  opacity: 0;
  transform: translateY(-8px);
}

.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(8px);
}
</style>
