<template>
<div class="timeline">
    <div
      v-for="(event, index) in events"
      :key="index"
      class="timeline-item"
      :class="{ 'timeline-item--right': index % 2 !== 0 }"
    >
      <div class="timeline-marker">
        <span class="timeline-year">{{ event.year }}</span>
      </div>
      <HistoryCard :event="event" />
    </div>
  </div>
</template>

<script setup>
import HistoryCard from './HistoryCard.vue';
</script>

<script>
export default {
  data() {
    return {
       events: [
        {
          year: 'XVIII век',
          title: 'Первые шаги',
          description: 'Появление винтов, зубчатых колёс и подшипников как основа механизмов. Леонардо да Винчи проектирует первые редукторы.',
        },
        {
          year: '1760–1840',
          title: 'Промышленная революция',
          description: 'Массовое производство машин. Джеймс Уатт, механика передач. Появление первых учебных пособий по расчёту деталей.',

        },
        {
          year: '1883',
          title: 'Рождение дисциплины',
          description: 'Франц Рело публикует «Кинематику механизмов» — систематизация знаний о соединениях, передачах и опорах.',

        },
        {
          year: '1920–1930',
          title: 'СССР: инженерная школа',
          description: 'Основание кафедр «Детали машин» в МВТУ, ЛПИ. Разработка ГОСТов на подшипники, зубчатые колёса и валы.',

        },
        {
          year: '1950–1970',
          title: 'Расчёты на прочность',
          description: 'Внедрение методов сопротивления усталости, контактной прочности (Герц) и теории смазки. Эра надёжности.',

        },
        {
          year: '2000–н.в.',
          title: 'Цифровые двойники',
          description: 'CAD/CAE системы, топологическая оптимизация, аддитивные технологии. Детали машин в эпоху Индустрии 4.0.',

        }
      ],
    }
  }
}
</script>

<style>
.timeline {
  position: relative;
  margin: 3rem 0;
  padding: 1rem 0;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 4px;
  background: linear-gradient(180deg, #e4c58a, #aa8c5e);
  transform: translateX(-50%);
  border-radius: 2px;
}

.timeline-item {
  display: flex;
  justify-content: flex-end;
  padding-right: 50%;
  margin-bottom: 3rem;
  position: relative;
}

.timeline-item--right {
  justify-content: flex-start;
  padding-right: 0;
  padding-left: 50%;
}

.timeline-marker {
  position: absolute;
  right: calc(50% - 25px);
  top: 0;
  width: 50px;
  height: 50px;
  background: #ecd9b4;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  color: #3a2f25;
  box-shadow: 0 0 0 4px #aa8c5e;
  z-index: 2;
}

.timeline-item--right .timeline-marker {
  right: auto;
  left: calc(50% - 25px);
}

.timeline-year {
  font-size: 0.8rem;
  font-weight: bold;
  text-align: center;
}
</style>
