<script>
import { lectureService } from '../services/lectureService'
import LectureCard from './LectureCard.vue'

export default {
  components: { LectureCard },
  data: () => ({
    lectures: [],
    loading: true,
    error: null
  }),
  async mounted() {
    try {
      this.lectures = await lectureService.getAll()
    } catch {
      this.error = 'Ошибка загрузки'
    } finally {
      this.loading = false
    }
  }
}
</script>

<template>
  <div class="lectures-container">
    <div v-if="loading">Загрузка лекций...</div>
    <div v-else-if="error">{{ error }}</div>
    <div v-else-if="!lectures.length">Нет доступных лекций</div>
    <div v-else class="lectures-list">
      <LectureCard
        v-for="(lecture, i) in lectures"
        :key="lecture.ID"
        :lecture="lecture"
        :index="i + 1"
      />
    </div>
  </div>
</template>



<style scoped>
.lectures-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.lectures-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(25%, 1fr));
  gap: 20px;
}

.loading, .error, .empty {
  text-align: center;
  padding: 40px;
}
</style>
