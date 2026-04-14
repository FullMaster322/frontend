
<template>
  <div class="ai-section">
    <h3>Искусственный интеллект в проектировании деталей</h3>
    <div class="ai-features">
      <div class="ai-feature">
        <span class="ai-badge">Генеративный дизайн</span>
        <p>Нейросети создают десятки вариантов кронштейнов и рычагов с заданной прочностью, анализируя нагрузки и материал.</p>
      </div>
      <div class="ai-feature">
        <span class="ai-badge">Топологическая оптимизация</span>
        <p>ИИ удаляет "лишний" материал там, где он не нужен — детали становятся похожи на природные кости.</p>
      </div>
      <div class="ai-feature">
        <span class="ai-badge">Предиктивная аналитика</span>
        <p>Прогнозирование поломок подшипников и шестерён за 100+ часов до отказа на основе вибраций.</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.ai-section {
  background: white;
  border-radius: 36px;
  padding: 2rem;
  margin-bottom: 3rem;
  box-shadow: 0 6px 14px rgba(0, 0, 0, 0.03);
}

.ai-section h3 {
  font-size: 1.7rem;
  font-weight: 700;
  color: #1a472a;
  margin-bottom: 1.8rem;
  text-align: center;
}

.ai-features {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
}

.ai-feature {
  flex: 1;
  min-width: 240px;
  background: #f8faf6;
  padding: 1.5rem;
  border-radius: 28px;
  transition: 0.1s ease;
}

.ai-badge {
  background: #2c5a3e20;
  color: #1a472a;
  font-weight: 600;
  padding: 0.2rem 0.9rem;
  border-radius: 40px;
  display: inline-block;
  margin-bottom: 1rem;
  font-size: 0.8rem;
  letter-spacing: 0.5px;
}

.ai-feature p {
  color: #2a4630;
  line-height: 1.45;
}
</style>
