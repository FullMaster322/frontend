<!-- components/QuoteBlock.vue -->
<template>
  <div class="quote-block">
    <p class="quote">
      «Машина — это гармония деталей, а инженер — дирижёр этой симфонии»
    </p>
    <span class="quote-author">— Из лекций по деталям машин, XX век</span>
  </div>
</template>

<script>
export default {
  name: 'QuoteBlock'
}
</script>

<style scoped>
.quote-block {
  margin-top: 4rem;
  background: #2a2019;
  padding: 2rem;
  border-radius: 60px 60px 60px 20px;
  text-align: center;
  border-left: 6px solid #ecd9b4;
}

.quote {
  font-size: 1.4rem;
  color: #ecd9b4;
  font-style: italic;
  margin: 0;
}

.quote-author {
  display: block;
  margin-top: 1rem;
  color: #aa8c5e;
  font-size: 0.9rem;
}

@media (max-width: 768px) {
  .quote {
    font-size: 1.1rem;
  }
}
</style>
