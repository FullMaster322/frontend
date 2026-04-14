<!-- DigitalTwinsSection.vue -->
<template>
  <div class="digital-section">
    <div class="digital-content">
      <div class="digital-text">
        <h3>Цифровые двойники деталей машин</h3>
        <p>Каждый болт, вал и подшипник сегодня могут иметь свой цифровой паспорт. Симуляция работы в реальных условиях — до физического изготовления.</p>
        <ul>
          <li>Прогнозирование ресурса и усталостных разрушений</li>
          <li>Виртуальные испытания: вибрации, перегрузки, температуры</li>
          <li>Интеграция с IoT-датчиками на реальных станках</li>
        </ul>
      </div>
      <div class="digital-stats">
        <div class="digit-stat">
          <span class="digit-number">-40%</span>
          <span>брака при внедрении</span>
        </div>
        <div class="digit-stat">
          <span class="digit-number">24/7</span>
          <span>мониторинг состояния</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.digital-section {
  background: #eef4ee;
  border-radius: 36px;
  padding: 2rem;
  margin-bottom: 3rem;
  border: 1px solid #cde0cd;
}

.digital-content {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 2rem;
  align-items: center;
}

.digital-text {
  flex: 2;
  min-width: 240px;
}

.digital-text h3 {
  font-size: 1.7rem;
  font-weight: 700;
  color: #1a472a;
  margin-bottom: 1rem;
}

.digital-text p {
  font-size: 1rem;
  margin-bottom: 1rem;
  color: #2c4a2c;
}

.digital-text ul {
  padding-left: 1.2rem;
  color: #2e5a2e;
}

.digital-text li {
  margin: 0.5rem 0;
}

.digital-stats {
  flex: 1;
  display: flex;
  gap: 1.5rem;
  flex-direction: column;
  background: white;
  padding: 1.5rem;
  border-radius: 28px;
}

.digit-stat {
  text-align: center;
}

.digit-number {
  font-size: 2.2rem;
  font-weight: 800;
  color: #2c5a3e;
  display: block;
}
</style>
