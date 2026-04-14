<!-- components/FounderCard.vue -->
<template>
  <div class="founder-card">
    <div class="founder-avatar">{{ person.icon }}</div>
    <h4>{{ person.name }}</h4>
    <p>{{ person.contribution }}</p>
  </div>
</template>

<script>
export default {
  name: 'FounderCard',
  props: {
    person: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.founder-card {
  background: #3e3227;
  padding: 1.5rem;
  border-radius: 32px;
  text-align: center;
  transition: all 0.3s ease;
  border: 1px solid #b89a6e;
}

.founder-card:hover {
  background: #564536;
  transform: translateY(-6px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.3);
}

.founder-avatar {
  font-size: 3rem;
  background: #ecd9b4;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.founder-card h4 {
  color: #ecd9b4;
  font-size: 1.3rem;
  margin: 0.5rem 0;
}

.founder-card p {
  color: #cfbc9b;
  font-size: 0.9rem;
  line-height: 1.4;
}
</style>
