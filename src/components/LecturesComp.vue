<template>
  <div class="lectures-container">

    <div v-if="loading">Загрузка...</div>
    <div v-else-if="error">{{ error }}</div>
    <div v-else-if="!lectures.length">{{ emptyMessage }}</div>
    <div v-else class="lectures-list">
      <LectureCard class="lecture-card"
  v-for="(lecture) in lectures"
  :key="lecture.id"
  :lecture="lecture"
  :search-query="search"
/>
    </div>
  </div>
</template>

<script>
import LectureCard from './LectureCard.vue'
import { apiClient } from '../services/api'

export default {
  components: { LectureCard },
  data() {
    return {
      lectures: [],
      allLectures: [],
      loading: false,
      error: null,
      emptyMessage: 'Нет совпадений',
      isMounted: false,
      currentRequest: null
    }
  },

  async mounted() {
    this.isMounted = true
    await this.loadAllLectures()
  },
  beforeUnmount() {
    this.isMounted = false
  },
  methods: {
    async loadAllLectures() {
      this.loading = true
      this.error = null
      try {
        const data = await apiClient.get('/lectures')
        if (this.isMounted) {
          this.allLectures = data
          this.lectures = data
        }
      } catch (e) {
        console.error(e)
        if (this.isMounted) this.error = 'Ошибка загрузки лекций'
      } finally {
        if (this.isMounted) this.loading = false
      }
    },
    onLectureClick(lecture) {
      this.$router.push({
        name: 'lecture',
        params: { lectureId: lecture.id || lecture.ID }
      })
    }
  }
}
</script>

<style scoped>
.lectures-container {
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 80px;
  padding: 20px;
}

.lectures-list {
  display: flex;
  gap: 10px;

}

.search-input {
  width: 100%;
  padding: 10px 14px;
  margin-bottom: 20px;
  border-radius: 10px;
  border: 1px solid #ccc;
  font-size: 14px;
}
.lecture-card {
  background-color: #262626;
  transition: 0.15s;
  color: white;
}
.lecture-card:hover {
  background-color: #262626c3;
}
</style>
