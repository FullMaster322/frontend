<script>
import { lectureService } from '../services/lectureService'

export default {
  props: {
    lectureId: [String, Number],
    lectureIndex: [String, Number],
  },
  data() {
    return {
      lecture: null,
      loading: true,
      error: null
    }
  },
  async mounted() {
    try {
      this.lecture = await lectureService.getById(this.lectureId)
    } catch (err) {
      this.error = 'Ошибка загрузки'
      console.error(err)
    } finally {
      this.loading = false
    }
  }
}
</script>

<template>
  <div v-if="loading">Загрузка лекции...</div>
  <div v-else-if="error">{{ error }}</div>
  <div v-else-if="!lecture">Нет данной лекции</div>
  <div v-else class="lecture-container">
    <div class="lecture">
      <h2 class="lecture-title">Лекция №{{ lectureIndex }}: {{ lecture.NAME }}</h2>
      <p class="lecture-description" v-html="lecture.DESCRIPTION"></p>
    </div>
  </div>
</template>

<style scoped>
div {
  text-align: center;
}
.lecture-container {
  max-width: 1200px;
  margin: 0 auto;
}
.lecture {
  text-align: left;
}
.lecture-description {
  font-size: 16px;
}
.lecture-title {
  font-weight: bold;
  font-size: 26px;
}
</style>
