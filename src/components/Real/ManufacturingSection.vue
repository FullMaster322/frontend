<!-- ManufacturingSection.vue -->
<template>
  <div class="manufacturing-section">
    <h3 class="section-title">Аддитивные технологии — новый подход к деталям</h3>
    <div class="manufacturing-grid">
      <div class="man-card">
        <h4>3D-печать металлом (SLM/DMLS)</h4>
        <p>Создание сложнейших деталей машин с внутренними каналами охлаждения, решётчатой структурой для снижения веса до 60%.</p>
      </div>
      <div class="man-card">
        <h4>Полимерная печать (FDM/SLA)</h4>
        <p>Прототипирование шестерён, корпусов, вентиляторов за часы. Быстрая проверка геометрии и эргономики.</p>
      </div>
      <div class="man-card">
        <h4>Гибридные технологии</h4>
        <p>Сочетание 3D-печати и последующей механической обработки на ЧПУ для достижения точности H7/h6.</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.manufacturing-section {
  margin-bottom: 3rem;
}

.section-title {
  font-size: 1.8rem;
  font-weight: 600;
  color: #1a472a;
  margin-bottom: 1.8rem;
  border-left: 5px solid #2c5a3e;
  padding-left: 1rem;
}

.manufacturing-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.8rem;
}

.man-card {
  background: white;
  border-radius: 28px;
  padding: 1.8rem;
  text-align: center;
  border: 1px solid #daecda;
  transition: all 0.2s;
}

.man-card:hover {
  background: #fafffa;
}


.man-card h4 {
  font-size: 1.3rem;
  font-weight: 600;
  color: #1a472a;
  margin: 0.5rem 0;
}

.man-card p {
  color: #3a5a3e;
  line-height: 1.5;
}
</style>
