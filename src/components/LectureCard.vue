<template>
  <div class="lecture-card" @click="handleClick">
    <div class="lecture-content">
      <div class="lecture-title" v-html="highlightedTitle"></div>
      <p v-if="lecture.snippet" v-html="highlightedSnippet" class="lecture-snippet"></p>
    </div>
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
      const title = this.lecture.NAME || this.lecture.name || 'Без названия';
      if (!this.searchQuery) return title;
      const regex = new RegExp(`(${this.escapeRegExp(this.searchQuery)})`, 'gi');
      return title.replace(regex, '<mark>$1</mark>');
    },
    highlightedSnippet() {
      if (!this.lecture.snippet || !this.searchQuery) return this.lecture.snippet || '';
      const regex = new RegExp(`(${this.escapeRegExp(this.searchQuery)})`, 'gi');
      return this.lecture.snippet.replace(regex, '<mark>$1</mark>');
    }
  },
  methods: {
    handleClick() {
      const lectureId = this.lecture.ID || this.lecture.id || 0;
      const lectureIndex = Number(this.index) || 1;
      this.$router.push({
        name: 'lecture',
        params: { lectureIndex, lectureId },
        query: { search: this.searchQuery } // передаем поисковый запрос
      });
    },
    escapeRegExp(string) {
      return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }
  }
}
</script>

<style scoped>
.lecture-card {
  display: flex;
  align-items: flex-start;

  cursor: pointer;
  padding: 16px 20px;
  gap: 16px;

  width: 420px;
  transition: 0.15s;
}

.lecture-number {
  font-weight: 600;
  font-size: 16px;
  min-width: 32px;
  text-align: center;
}

.lecture-content {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.lecture-title {
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 6px;
  line-height: 1.4;
  text-align: left;

}

.lecture-snippet {
  font-size: 14px;
  color: rgba(0, 0, 0, 0.75);
  line-height: 1.5;
  margin-top: 0;
  text-align: left;
}

mark {
  background-color: #ffd54f;
  color: #000;
  padding: 0 2px;
  border-radius: 2px;
}

@media (max-width: 768px) {
  .lecture-card {
    flex-direction: column;
    width: 100%;
    padding: 12px 16px;
    gap: 12px;
  }

  .lecture-number {
    font-size: 14px;
    min-width: auto;
    text-align: left;
  }

  .lecture-title {
    font-size: 14px;
  }

  .lecture-snippet {
    font-size: 13px;
  }
}
</style>
