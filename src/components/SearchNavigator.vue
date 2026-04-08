<template>
  <div v-if="search && matches.length" class="button-container">
    <button @click="prevMatch">⬆</button>
    <button @click="nextMatch">⬇</button>

    <span>
      {{ currentMatchIndex + 1 }} / {{ matches.length }}
    </span>

    <button @click="clearSearch">✕</button>
  </div>
</template>

<script>
export default {
  props: {
    htmlRoot: Object, // ссылка на контейнер где ищем
    search: String
  },

  emits: ['update:search'],

  data() {
    return {
      matches: [],
      currentMatchIndex: -1
    }
  },

 watch: {
  search: {
    handler() {
      this.$nextTick(this.collectMatches)
    },
    immediate: true
  },

  htmlRoot: {
    handler() {
      this.$nextTick(this.collectMatches)
    },
    immediate: true
  }
},

  mounted() {
    window.addEventListener('keydown', this.handleKeys)
    this.collectMatches()
  },

  beforeUnmount() {
    window.removeEventListener('keydown', this.handleKeys)
  },

  methods: {
    collectMatches() {
      if (!this.htmlRoot || !this.search) {
        this.matches = []
        this.currentMatchIndex = -1
        return
      }

      const elements = this.htmlRoot.querySelectorAll('mark')
      this.matches = Array.from(elements)

      if (this.matches.length > 0) {
        this.currentMatchIndex = 0
        this.scrollToMatch(0)
      } else {
        this.currentMatchIndex = -1
      }
    },

    scrollToMatch(index) {
      this.$nextTick(() => {
        const el = this.matches[index]
        if (!el) return

        this.matches.forEach(m => m.classList.remove('active-match'))

        el.classList.add('active-match')

        el.scrollIntoView({
          behavior: 'smooth',
          block: 'center'
        })
      })
    },

    nextMatch() {
      if (!this.matches.length) return

      this.currentMatchIndex =
        (this.currentMatchIndex + 1) % this.matches.length

      this.scrollToMatch(this.currentMatchIndex)
    },

    prevMatch() {
      if (!this.matches.length) return

      this.currentMatchIndex =
        (this.currentMatchIndex - 1 + this.matches.length) % this.matches.length

      this.scrollToMatch(this.currentMatchIndex)
    },

    clearSearch() {
      this.$emit('update:search', '')
      this.matches = []
      this.currentMatchIndex = -1
    },

    handleKeys(e) {
      if (!this.matches.length) return

      if (e.key === 'Enter') {
        e.preventDefault()

        if (e.shiftKey) {
          this.prevMatch()
        } else {
          this.nextMatch()
        }
      }
    }
  }
}
</script>

<style>
  .button-container {
  position: fixed;
  right: 20px;
  top: 80px;
  background-color: white;
  display: block;
}
.button-container div {
  right: 20px;
  align-items: center;
  gap: 10px;
  padding: 10px 8px;
  z-index: 1000;
}

.button-container button {
  width: 36px;
  height: 36px;
  border: none;
  cursor: pointer;
  font-size: 16px;
  transition: all 0.2s ease;
  background: none;
}

.button-container button:hover {
  color: #262626;
}

.button-container button:active {
  color: #262626;
}

.button-container span {
  font-size: 12px;
  color: #262626;
  padding: 20px;
  background: none;
}

</style>
