<template>
  <FullscreenVideo
    video-src="src/assets/home-title.mp4"
    :show-controls="false"
  >
    <template #content>
      <div class="hero-section">
        <h1 class="main-title">Детали машин</h1>
        <div>
          <ButtonComp @click="scrollToHistory">Продолжить</ButtonComp>
        </div>
      </div>
    </template>
  </FullscreenVideo>

  <div>

    <HystoryComp ref="historySection" />

    <RealComp />

  <Card>
    <template #title>
      <h3 class="card-title" style="color: black;">Не упускайте свои возможности изучать что-то <b style="background-color: #00da66;padding: 5px;">новое</b> вместе с нами</h3>
    </template>

    <template #image>
      <img src="../assets/engine.png" class="card-img"/>
    </template>
  </Card>

  <CardReverb>
    <template #image>
      <img src="../assets/zavod-people.avif" class="card-img-rev"/>
    </template>

     <template #title>
      <h3 class="card-title-rev">ведь благодаря нашим знаниям вы сможете улучшить свое <b style="background-color: #00da66;padding: 5px; color: black;">будущее</b></h3>
    </template>
  </CardReverb>
  </div>


</template>

<script>

import FullscreenVideo from '../components/Fullscreenvideo.vue'
import HystoryComp from '@/components/Hystory/HystoryComp.vue';
import RealComp from '../components/Real/RealComp.vue';

export default {
  components: {
    FullscreenVideo
  }
}
</script>

<script setup>
  import ButtonComp from '../components/ButtonComp.vue';
  import Card from '../components/CardComp.vue'
  import CardReverb from '@/components/CardReverbComp.vue';

  import { ref } from 'vue'

const historySection = ref(null)

const scrollToHistory = () => {
  if (historySection.value) {
    historySection.value.$el?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }
}
</script>

<style scoped>
.hero-section {
  text-align: center;
  margin: 0 auto;
  padding: 20px;
}

.main-title {
  font-size: 160px;
  color: transparent;
  -webkit-text-stroke: 3px rgb(255, 255, 255);
  text-stroke: 3px rgb(255, 255, 255);
}

</style>
