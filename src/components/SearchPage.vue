<template>
  <div class="search-page">
    <div class="search-bar-wrapper">
      <SearchComp v-model="search" ref="searchPage"/>
      <div class="lectures-list" v-if="results.length">
        <LectureCard style="color: black;"
  v-for="(lecture, i) in results"
  :key="lecture.ID || lecture.id"
  :lecture="lecture"
  :index="i + 1"
  :search-query="search"
  @click.native.prevent="reloadPage"
/>
      </div>
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
    return { search: '', results: [], currentRequest: null, isMounted: false }
  },
  watch: {
    search: { immediate: true, handler: 'fetchResults' },
    $route() { location.reload() }
  },
  mounted() { this.isMounted = true },
  beforeUnmount() {
    this.isMounted = false
    if (this.currentRequest) this.currentRequest.abort()
  },
 methods: {
  async fetchResults() {
    if (!this.search) { this.results = []; return }
    try {
      if (this.currentRequest) this.currentRequest.abort()
      this.currentRequest = new AbortController()
      const data = await apiClient.post('/search', { query: this.search }, { signal: this.currentRequest.signal })
      if (!this.isMounted) return
      this.results = data.message ? [] : data
    } catch (e) {
      if (e.name !== 'AbortError') { console.error(e); this.results = [] }
    }
  },

  reloadPage() {
    window.location.reload()
  }
}
}
</script>

<style scoped>
.search-bar-wrapper {
  position: relative;
  width: 450px;
  margin: 0 auto;
}

.lectures-list {
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background-color: rgb(255, 255, 255);
  border-radius: 10px;
  margin-top: 4px;
  padding: 10px 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
  z-index: 9999;
  width: 470px;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.2s ease, visibility 0.2s ease;
}

.search-bar-wrapper:focus-within .lectures-list {
  opacity: 1;
  visibility: visible;
}

/* Адаптив */
@media (max-width: 768px) {
  .search-bar-wrapper {
    width: 100%;
    padding: 0 16px;
  }
  .lectures-list {
    width: 100%;
  }
}
</style>
