<!-- Card.vue со слотами -->
<template>
  <div style="width: 100%; background-color: aliceblue;">
  <div class="card">
    <div>
      <slot name="title">
        <h3 class="card-title">Заголовок по умолчанию</h3>
      </slot>
    </div>

    <div>
      <slot name="image">
        <img :src="defaultImage" class="card-img"/>
      </slot>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    defaultImage: {
      type: String,
      default: 'https://via.placeholder.com/300x200'
    }
  }
}
</script>

<style>
  .card-img {
    max-width: 550px;
    height: 300px;
    margin-top: 30px;
    margin-left: 100px;
  }
  .card-title {
    padding-left: 60px;
    width: 650px;
    font-size: 50px;
    margin-top: 30px;
    margin-bottom: 30px;
  }
</style>

<style scoped>
  .card {
    display: flex;
    width: 1200px;
    height: max-content;
    justify-content: center;
    margin: 0 auto;
    background: none;
  }
</style>
