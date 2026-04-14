<!-- SoftwareGrid.vue -->
<template>
  <div class="software-section">
    <h3 class="section-title">Ведущие CAD/CAE системы</h3>
    <div class="software-grid">
      <div class="soft-card" v-for="tool in tools" :key="tool.name">
        <div class="soft-icon">{{ tool.icon }}</div>
        <h4>{{ tool.name }}</h4>
        <p>{{ tool.desc }}</p>
        <span class="soft-tag">{{ tool.tag }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
const tools = [
  { name: 'SolidWorks', desc: 'Параметрическое 3D-моделирование, сборки, чертежи ГОСТ. Лидер в машиностроении.', tag: 'CAD' },
  { name: 'Компас-3D', desc: 'Отечественная система с полной поддержкой стандартов ЕСКД.', tag: 'CAD' },
  { name: 'ANSYS', desc: 'Конечно-элементный анализ прочности, тепла, вибраций деталей.', tag: 'CAE' },
  { name: 'Fusion 360', desc: 'Облачный CAD/CAM для аддитивного производства и ЧПУ.', tag: 'CAD/CAM' },
  { name: 'nTopology', desc: 'Топологическая оптимизация и создание гироидных решёток.', tag: 'Передовые' },
  { name: 'Altair Inspire', desc: 'Генеративный дизайн деталей с минимизацией массы.', tag: 'Оптимизация' }
]
</script>

<style scoped>
.software-section {
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

.software-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
}

.soft-card {
  background: white;
  border-radius: 24px;
  padding: 1.5rem;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.04);
  border: 1px solid #e0ede0;
}

.soft-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 30px -12px rgba(0, 0, 0, 0.1);
}

.soft-icon {
  font-size: 2.2rem;
  margin-bottom: 0.8rem;
}

.soft-card h4 {
  font-size: 1.3rem;
  font-weight: 700;
  margin: 0.5rem 0;
  color: #1e3a2e;
}

.soft-card p {
  font-size: 0.9rem;
  line-height: 1.4;
  color: #3a5a3e;
  margin: 0.5rem 0;
}

.soft-tag {
  display: inline-block;
  background: #e6f0e6;
  padding: 0.2rem 0.7rem;
  border-radius: 20px;
  font-size: 0.7rem;
  font-weight: 600;
  color: #2c5a3e;
  margin-top: 0.8rem;
}
</style>
