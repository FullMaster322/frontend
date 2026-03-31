<template>
  <div class="lectures-container">
    <SearchComp v-model="search" />

    <div v-if="loading">Загрузка...</div>
    <div v-else-if="error">{{ error }}</div>
    <div v-else-if="!lectures.length">{{ emptyMessage }}</div>
    <div v-else class="lectures-list">
      <LectureCard
  v-for="(lecture, i) in lectures"
  :key="lecture.id"
  :lecture="lecture"
  :index="i + 1"
  :search-query="search"
/>
    </div>
  </div>
</template>

<script>
import SearchComp from './SearchComp.vue'
import LectureCard from './LectureCard.vue'
import { apiClient } from '../services/api'

export default {
  components: { SearchComp, LectureCard },
  data() {
    return {
      search: '',
      lectures: [],
      allLectures: [],
      loading: false,
      error: null,
      emptyMessage: 'Нет совпадений',
      isMounted: false,
      currentRequest: null
    }
  },
  watch: {
    search: {
      immediate: true,
      handler: 'fetchLectures'
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
    async fetchLectures() {
      if (!this.search) {
        this.lectures = this.allLectures
        return
      }

      this.loading = true
      this.error = null

      try {
        if (this.currentRequest) this.currentRequest.abort()
        this.currentRequest = new AbortController()

        const data = await apiClient.post(
          '/search',
          { query: this.search },
          { signal: this.currentRequest.signal }
        )

        if (!this.isMounted) return

        if (data.message) {
          this.lectures = []
          this.emptyMessage = data.message
        } else {
          this.lectures = data
        }
      } catch (e) {
        if (e.name === 'AbortError') return
        console.error(e)
        if (this.isMounted) this.error = 'Ошибка поиска'
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
</style>
