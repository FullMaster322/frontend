<template>
  <div class="founders-section">
    <h1 class="history-title">Основоположники</h1>
    <div class="founders-grid">
      <div
        v-for="(person, idx) in founders"
        :key="idx"
        class="founder-card"
      >
        <div class="founder-avatar">
          <img :src="person.src" :alt="person.name"/>
        </div>
        <h4>{{ person.name }}</h4>
        <p>{{ person.contribution }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import HistoryImg1 from '../../assets/history-card-1.jpg'
import HistoryImg2 from '../../assets/history-card-2.jpeg'
import HistoryImg3 from '../../assets/history-card-3.jpeg'

export default {
  data() {
    return {
      founders: [
        {
          name: 'Франц Рело',
          contribution: 'Создатель кинематики механизмов, систематизатор соединений',
          src: HistoryImg1,
        },
        {
          name: 'Иван Артоболевский',
          contribution: 'Основатель советской школы теории механизмов и машин',
          src: HistoryImg2,
        },
        {
          name: 'Дмитрий Решетов',
          contribution: 'Труды по прочности, долговечности и надёжности деталей',
          src: HistoryImg3,
        },
      ]
    }
  }
}
</script>

<style>
.founders-section {
  margin-top: 30px;
  text-align: center;
}


.founders-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
}

.founder-card {
  background: #ffffff;
  padding: 1.5rem;
  border-radius: 32px;
  text-align: center;
  transition: 0.3s;
}

.founder-card:hover {
  background: #b89a6e;
}

.founder-avatar {
  font-size: 3rem;
  background: #ecd9b4;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1rem;
  box-shadow: 0 4px 8px rgba(0,0,0,0.2);
  overflow: hidden;
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
