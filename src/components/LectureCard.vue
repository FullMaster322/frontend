<template>
  <div class="lecture-card" @click="handleClick">
    <div class="lecture-number">{{ index }}</div>
    <div class="lecture-title">{{ truncatedTitle }}</div>
  </div>
</template>

<script>
export default {
  props: {
    lecture: { type: Object, required: true },
    index: { type: Number, required: true }
  },
  computed: {
    truncatedTitle() {
      const title = this.lecture.NAME
      return title.length > 50 ? title.slice(0, 50) + '...' : title
    }
  },
  methods: {
    handleClick() {
      this.$emit('click', this.lecture)
      this.$router.push({
        name: 'lecture',
        params: {
          lectureId: this.lecture.ID,
          lectureIndex: this.index
        }
      })
    }
  }
}
</script>

<style scoped>
.lecture-card {
  display: flex;
  align-items: center;
  background: #00bfff67;
  border-radius: 12px;
  cursor: pointer;
  padding: 18px 20px;
  transition: all 0.2s ease;
  gap: 20px;
  border: 1px solid transparent;
}

.lecture-card:hover {
  background: rgba(255, 255, 255, 0.06);
  border-color: rgba(255, 255, 255, 0.1);
  transform: translateY(-2px);
}

.lecture-number {
  width: 32px;
  color: rgba(255, 255, 255, 0.781);
  font-size: 16px;
  font-weight: 500;
  font-feature-settings: "tnum";
  font-variant-numeric: tabular-nums;
}

.lecture-title {
  flex: 1;
  color: white;
  font-size: 15px;
  font-weight: 400;
  line-height: 1.4;
  letter-spacing: -0.2px;
}

.lecture-card {
  animation: fadeIn 0.3s ease forwards;
  opacity: 0;
}

@keyframes fadeIn {
  to {
    opacity: 1;
  }
}

@media (max-width: 768px) {
  .lecture-card {
    padding: 14px 16px;
    gap: 16px;
  }

  .lecture-number {
    width: 28px;
    font-size: 12px;
  }

  .lecture-title {
    font-size: 13px;
  }
}
</style>
