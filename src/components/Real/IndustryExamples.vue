<!-- IndustryExamples.vue -->
<template>
  <div class="examples-section">
    <h3>Примеры современных решений</h3>
    <div class="examples-grid">
      <div class="example">
        <div class="example-num">01</div>
        <h4>Редуктор с 3D-печатными шестернями</h4>
        <p>Снижение массы на 35% за счёт решётчатой структуры. Проект компании EOS + RWTH Aachen.</p>
      </div>
      <div class="example">
        <div class="example-num">02</div>
        <h4>Цифровой двойник коленвала</h4>
        <p>В Siemens NX + Simcenter — анализ усталостной прочности до первого образца.</p>
      </div>
      <div class="example">
        <div class="example-num">03</div>
        <h4>Оптимизация кронштейна в SolidWorks</h4>
        <p>Топологическая оптимизация уменьшила массу с 2.4 кг до 0.9 кг при сохранении запаса прочности.</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.examples-section {
  margin-bottom: 3rem;
}

.examples-section h3 {
  font-size: 1.7rem;
  font-weight: 700;
  color: #1a472a;
  margin-bottom: 1.8rem;
  border-left: 5px solid #2c5a3e;
  padding-left: 1rem;
}

.examples-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 1.8rem;
}

.example {
  background: #ffffffdd;
  background: white;
  flex: 1;
  min-width: 260px;
  border-radius: 28px;
  padding: 1.5rem;
  border: 1px solid #cde0cd;
}

.example-num {
  font-size: 1rem;
  font-weight: 800;
  color: #7cb342;
  margin-bottom: 0.5rem;
}

.example h4 {
  font-size: 1.2rem;
  font-weight: 600;
  color: #1a472a;
  margin-bottom: 0.8rem;
}

.example p {
  color: #3a5a3e;
}
</style>
