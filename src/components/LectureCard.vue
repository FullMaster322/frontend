<template>
  <div class="lecture-card" @click="handleClick">
    <div class="lecture-number">{{ index }}</div>
    <div class="lecture-title" v-html="highlightedTitle"></div>
    <p v-if="lecture.snippet" v-html="highlightedSnippet" class="lecture-snippet"></p>
  </div>
</template>

<script>
export default {
  name: 'LectureCard',
  props: {
    lecture: { type: Object, required: true },
    index: { type: Number, required: true },
    searchQuery: { type: String, default: '' }
  },
  computed: {
    highlightedTitle() {
      const title = this.lecture.NAME || this.lecture.name || 'Без названия'
      if (!this.searchQuery) return title
      const regex = new RegExp(`(${this.escapeRegExp(this.searchQuery)})`, 'gi')
      return title.replace(regex, '<mark>$1</mark>')
    },
    highlightedSnippet() {
      if (!this.lecture.snippet || !this.searchQuery) return this.lecture.snippet || ''
      const regex = new RegExp(`(${this.escapeRegExp(this.searchQuery)})`, 'gi')
      return this.lecture.snippet.replace(regex, '<mark>$1</mark>')
    }
  },
  methods: {
    handleClick() {
      const lectureId = this.lecture.ID || this.lecture.id || 0
      const lectureIndex = Number(this.index) || 1
      this.$router.push({
        name: 'lecture',
        params: { lectureIndex, lectureId }
      })
    },
    escapeRegExp(string) {
      return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
    }
  }
}
</script>

<style scoped>
.lecture-snippet {
  font-size: 13px;
  color: rgba(255, 255, 255, 0.8);
  margin-top: 4px;
}

mark {
  background-color: yellow;
  color: black;
  padding: 0 2px;
  border-radius: 2px;
}
</style>


<style scoped>
.lecture-card {
  display: flex;
  align-items: center;
  background: #00bfff28;
  border-radius: 12px;
  cursor: pointer;
  padding: 18px 20px;
  transition: all 0.2s ease;
  gap: 20px;
  border: 1px solid transparent;
  width: 400px;
}

.lecture-card:hover {
  background: rgba(255, 255, 255, 0.06);
  border-color: rgba(255, 255, 255, 0.1);
  transform: translateY(-2px);
}

.lecture-number {
  width: 32px;
  color: rgba(255, 255, 255, 0.781);
  font-size: 16px;
  font-weight: 500;
  font-feature-settings: "tnum";
  font-variant-numeric: tabular-nums;
}

.lecture-title {
  flex: 1;
  color: white;
  font-size: 15px;
  font-weight: 400;
  line-height: 1.4;
  letter-spacing: -0.2px;
}

.lecture-card {
  animation: fadeIn 0.3s ease forwards;
  opacity: 0;
}

@keyframes fadeIn {
  to {
    opacity: 1;
  }
}

@media (max-width: 768px) {
  .lecture-card {
    padding: 14px 16px;
    gap: 16px;
  }

  .lecture-number {
    width: 28px;
    font-size: 12px;
  }

  .lecture-title {
    font-size: 13px;
  }
}
</style>
