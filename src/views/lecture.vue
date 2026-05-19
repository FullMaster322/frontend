<template>
  <div v-if="!isLoaded">
    <span v-if="showLoader">Загрузка лекции...</span>
  </div>

  <div v-else-if="error">{{ error }}</div>
  <div v-else-if="!lecture">Нет данной лекции</div>

  <div v-else class="lecture-container" ref="content">
    <SearchNavigator
      v-if="htmlRoot"
      :htmlRoot="htmlRoot"
      v-model:search="search"
    />

    <div class="lecture">
      <div v-html="highlightedDescription" style="transform: scale(1.35); margin-top: 0px; margin-left: 0px;"></div>
    </div>
  </div>
</template>

<script>
import { lectureService } from '../services/lectureService.js'
import SearchNavigator from '../components/SearchNavigator.vue'

export default {
  components: {
    SearchNavigator
  },

  props: {
    lectureId: [String, Number],
    lectureIndex: [String, Number],
  },

  data() {
    return {
      lecture: null,
      loading: true,
      showLoader: false,
      isLoaded: false,
      error: null,
      search: '',
      htmlRoot: null
    }
  },

  computed: {
    highlightedDescription() {
      if (!this.lecture?.DESCRIPTION) return ''

      const desc = this.lecture.DESCRIPTION
      if (!this.search) return desc

      const regex = new RegExp(`(${this.escapeRegExp(this.search)})`, 'gi')
      return desc.replace(regex, '<mark>$1</mark>')
    }
  },

  async mounted() {
    this.search = this.$route.query.search || ''

    const timer = setTimeout(() => {
      if (!this.isLoaded) {
        this.showLoader = true
      }
    }, 500)

    try {
      const data = await lectureService.getById(this.lectureId)
      this.lecture = data
    } catch (err) {
      this.error = 'Ошибка загрузки'
      console.error(err)
    } finally {
      this.loading = false
      this.isLoaded = true
      clearTimeout(timer)

      this.$nextTick(() => {
        this.htmlRoot = this.$refs.content
      })
    }
  },

  methods: {
    escapeRegExp(string) {
      return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
    }
  }
}
</script>

<style scoped>

mark {
  background-color: #42fcf6;
  color: #000;
  padding: 0 2px;
  border-radius: 2px;
}
.lecture-container {
  width: 950px;
  margin-left: 220px;
  margin-top: 100px;

  padding-left: 20px;

}
.lecture {
  padding-top: 00px;
  padding: 20px;
}
</style>
