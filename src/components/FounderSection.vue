<!-- components/FoundersSection.vue -->
<template>
  <div class="founders-section">
    <h1 class="history-title">Основоположники</h1>
    <div class="founders-grid">
      <FounderCard
        v-for="(person, idx) in founders"
        :key="idx"
        :person="person"
      />
    </div>
  </div>
</template>

<script>
import FounderCard from './FounderCard.vue'

export default {
  name: 'FoundersSection',
  components: {
    FounderCard
  },
  props: {
    founders: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
.founders-section {
  margin-top: 5rem;
  text-align: center;
}

.founders-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
}

.history-title {
  text-align: center;
  font-size: 3rem;
  font-weight: 700;
  color: #897855;
  letter-spacing: 2px;
  margin-bottom: 0.5rem;
}

@media (max-width: 768px) {
  .history-title {
    font-size: 2rem;
  }
}
</style>
