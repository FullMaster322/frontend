<!-- RealSection.vue - основной компонент страницы -->
<template>
  <div class="real">
    <div class="real-container">
      <section class="hero-section">
        <h1 class="real-title">Наши времена</h1>
        <p class="real-subtitle">Цифровая революция в проектировании деталей машин</p>
        <div class="hero-decoration"></div>
      </section>

      <TechHeroCard />
      <SoftwareGrid />
      <ManufacturingSection />
      <DigitalTwinsSection />
      <AISection />
      <IndustryExamples />
      <ConclusionSection />
    </div>
  </div>
</template>

<script setup>
import TechHeroCard from './TechHeroCard.vue'
import SoftwareGrid from './SoftwareGrid.vue'
import ManufacturingSection from './ManufacturingSection.vue'
import DigitalTwinsSection from './DigitalTwinsSection.vue'
import AISection from './AISection.vue'
import IndustryExamples from './IndustryExamples.vue'
import ConclusionSection from './ConclusionSection.vue'
</script>

<style scoped>
.real {
  width: 100%;
  min-height: 100vh;
  background-color: aliceblue;
  font-family: 'Inter', system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif;
  color: #1a2c3e;
}

.real-container {
  max-width: 1300px;
  margin: 0 auto;
  padding: 2rem 2rem 4rem;
}

.hero-section {
  text-align: center;
  margin-bottom: 3rem;
  padding: 2rem 0 1rem;
}

.real-title {
  font-size: 3.8rem;
  font-weight: 800;
  background: linear-gradient(135deg, #1a472a, #2c5a3e);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  letter-spacing: -0.02em;
  margin-bottom: 1rem;
}

.real-subtitle {
  font-size: 1.3rem;
  color: #2c5a3e;
  font-weight: 500;
  opacity: 0.85;
}

.hero-decoration {
  width: 80px;
  height: 4px;
  background: linear-gradient(90deg, #2c5a3e, #7cb342);
  margin: 1.5rem auto 0;
  border-radius: 2px;
}

@media (max-width: 768px) {
  .real-container {
    padding: 1rem 1.5rem 3rem;
  }
  .real-title {
    font-size: 2.5rem;
  }
  .real-subtitle {
    font-size: 1.1rem;
  }
}
</style>
