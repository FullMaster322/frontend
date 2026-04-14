<!-- Card.vue со слотами -->
<template>
  <div style="width: 100%; background-color: rgb(51, 53, 82);">
  <div class="card-rev">

     <div>
      <slot name="image">
        <img :src="defaultImage" class="card-img"/>
      </slot>
    </div>


    <div>
      <slot name="title">
        <h3 class="card-title">Заголовок по умолчанию</h3>
      </slot>
    </div>


  </div>
  </div>
</template>

<script>
export default {
  name: 'CardReverb',
  props: {
    defaultImage: {
      type: String,
      default: 'https://via.placeholder.com/300x200'
    }
  }
}
</script>


<style>
  .card-rev {
    display: flex;
    width: 1200px;
    height: max-content;
    justify-content: center;
    margin: 0 auto;
    background-color: rgb(51, 53, 82);
  }
  .card-img-rev {
    max-width: 550px;
    height: 350px;
    margin-top: 30px;
    margin-left: 120px;
    margin-bottom: 20px;
  }
   .card-title-rev {
    padding-left: 120px;
    width: 650px;
    font-size: 50px;
    margin-top: 30px;
    margin-bottom: 30px;
  }
</style>
