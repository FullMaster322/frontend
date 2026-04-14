<template>
  <div class="history">
    <div class="history-container">
      <h1 class="history-title">С чего всё начиналось</h1>

      <Timeline />

      <FoundersComp />

      <QuoteComp />

    </div>
  </div>
</template>

<script setup>
  import Timeline from './Timeline.vue';
  import FoundersComp from './FoundersComp.vue';
  import QuoteComp from './QuoteComp.vue';
</script>

<script>


export default {
  name: 'HistoryView',

}
</script>

<style>
.history-title {
  text-align: center;
  font-size: 3rem;
  font-weight: 700;
  color: #897855;
  letter-spacing: 2px;
  margin-bottom: 0.5rem;
}
</style>

<style scoped>
.history {
  width: 100%;
  min-height: 100vh;
  background-color: rgb(229, 229, 230);
  padding: 2rem;
  font-family: 'Segoe UI', Roboto, 'Georgia', serif;
}

.history-container {
  max-width: 1200px;
  margin: 0 auto;
  background: rgba(255, 248, 235, 0.08);
  backdrop-filter: blur(2px);
  border-radius: 48px;
  padding: 2rem;
  box-shadow: 0 20px 40px rgba(0,0,0,0.3);
}



</style>
