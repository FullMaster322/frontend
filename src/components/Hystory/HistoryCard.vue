<template>
  <div class="timeline-content">
    <h3>{{ event.title }}</h3>
    <p>{{ event.description }}</p>
  </div>
</template>

<script>
export default {
  name: 'HistoryCard',
  props: {
    event: {
      type: Object,
      required: true,
      validator: (value) => {
        return value && typeof value.title === 'string' && typeof value.description === 'string';
      }
    }
  }
};
</script>

<style scoped>
.timeline-content {
  background: white;
  padding: 20px;
  border-radius: 24px;
  width: 90%;
  padding-left: 40px;
  transition: 0.2s;
  position: relative;
  margin: 5px;
  border-radius: 3px solid white;
}

.timeline-content:hover  {
  background: #b89a6e;
  color: white;
}

.timeline-content h3 {
  margin: 0 0 0.5rem 0;
  color: #ecd9b4;
  font-size: 1.4rem;
}

.timeline-content p {
  margin: 0;
  color: #3a2f25;
  line-height: 1.5;
}
</style>
