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
      <h2 class="lecture-title" v-html="highlightedTitle"></h2>
      <p class="lecture-description" v-html="highlightedDescription"></p>
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
    highlightedTitle() {
      if (!this.lecture) return ''

      const title = `Лекция №${this.lectureIndex}: ${this.lecture.NAME || 'Без названия'}`
      if (!this.search) return title

      const regex = new RegExp(`(${this.escapeRegExp(this.search)})`, 'gi')
      return title.replace(regex, '<mark>$1</mark>')
    },

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
  background-color: #ffd54f;
  color: #000;
  padding: 0 2px;
  border-radius: 2px;
}


.lecture-title {
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 12px;
}

.lecture-description {
  font-size: 16px;
  line-height: 1.5;
}


.lecture-container {
  padding-top: 80px;
  max-width: 1100px;
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


