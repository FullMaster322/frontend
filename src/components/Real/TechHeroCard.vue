<template>
  <div class="tech-hero">
    <div class="tech-hero-content">
      <h2>Цифровое машиностроение XXI века</h2>
      <p>Сегодня проектирование деталей машин невозможно представить без мощных CAD/CAE систем, аддитивных технологий и цифровых двойников. Инженеры создают сложнейшие узлы за дни, а не месяцы.</p>
      <div class="stats-row">
        <div class="stat">
          <span class="stat-number">70%</span>
          <span class="stat-label">сокращение времени разработки</span>
        </div>
        <div class="stat">
          <span class="stat-number">10x</span>
          <span class="stat-label">точность расчётов с FEA</span>
        </div>
        <div class="stat">
          <span class="stat-number">∞</span>
          <span class="stat-label">топологическая оптимизация</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.tech-hero {
  background: linear-gradient(145deg, #ffffff, #f0f8ff);
  border-radius: 32px;
  padding: 2rem 2.5rem;
  margin-bottom: 3rem;
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.05);
  border: 1px solid rgba(44, 90, 62, 0.15);
}

.tech-hero-content {
  text-align: center;
}

.tech-hero h2 {
  font-size: 2rem;
  font-weight: 700;
  color: #1a472a;
  margin-bottom: 1rem;
}

.tech-hero p {
  font-size: 1.1rem;
  line-height: 1.5;
  color: #2c3e2f;
  max-width: 800px;
  margin: 0 auto 2rem;
}

.stats-row {
  display: flex;
  justify-content: center;
  gap: 3rem;
  flex-wrap: wrap;
}

.stat {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.stat-number {
  font-size: 2rem;
  font-weight: 800;
  color: #2c5a3e;
  background: #e8f0e8;
  padding: 0.2rem 0.8rem;
  border-radius: 60px;
}

.stat-label {
  font-size: 0.85rem;
  color: #3a5a3e;
  margin-top: 0.5rem;
}
</style>
