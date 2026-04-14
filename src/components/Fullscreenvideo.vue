<template>
  <div class="fullscreen-video">
    <div class="video-background">
      <video
        ref="video"
        :src="videoSrc"
        :autoplay="autoplay"
        :loop="loop"
        :muted="muted"
        :playsinline="playsinline"
        @loadeddata="onVideoLoaded"
      >
        Ваш браузер не поддерживает видео.
      </video>
    </div>

    <!-- Теневой слой поверх видео для эффекта виньетки -->
    <div class="shadow-overlay"></div>

    <!-- Затемняющий слой -->
    <div class="overlay" :style="{ background: overlayColor }"></div>

    <!-- Слот для пользовательского контента -->
    <div class="content-wrapper" :class="{ 'no-padding': noPadding }">
      <slot name="content">
        <!-- Дефолтный контент, если слот не используется -->
        <div class="default-content">
          <h1 class="default-title">Детали машин</h1>
          <p class="default-subtitle">Механизмы, приводы, детали и узлы машин</p>
        </div>
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FullscreenVideo',

  props: {
    // Путь к видео файлу
    videoSrc: {
      type: String,
      default: 'https://assets.mixkit.co/videos/preview/mixkit-gears-and-mechanisms-rotating-32825-large.mp4'
    },

    // Автовоспроизведение
    autoplay: {
      type: Boolean,
      default: true
    },

    // Зацикливание видео
    loop: {
      type: Boolean,
      default: true
    },

    // Без звука (обязательно для автовоспроизведения в большинстве браузеров)
    muted: {
      type: Boolean,
      default: true
    },

    // Для мобильных устройств
    playsinline: {
      type: Boolean,
      default: true
    },

    // Цвет затемнения (CSS цвет или градиент)
    overlayColor: {
      type: String,
      default: 'rgba(0, 0, 0, 0.45)'
    },

    // Убрать внутренние отступы у контента
    noPadding: {
      type: Boolean,
      default: false
    },

    // Показывать ли элемент управления видео
    showControls: {
      type: Boolean,
      default: false
    },

    // Интенсивность теней (0-1)
    shadowIntensity: {
      type: Number,
      default: 0.6,
      validator: (value) => value >= 0 && value <= 1
    }
  },

  emits: ['loaded', 'error'],

  data() {
    return {
      isVideoLoaded: false,
      videoError: false
    }
  },

  computed: {
    shadowGradient() {
      // Создаем градиент для теней на основе интенсивности
      const intensity = this.shadowIntensity
      const darkEnd = `rgba(0, 0, 0, ${0.3 + intensity * 0.5})`
      const darkMid = `rgba(0, 0, 0, ${0.15 + intensity * 0.3})`
      const lightEnd = `rgba(0, 0, 0, ${0.05 + intensity * 0.1})`

      return {
        background: `radial-gradient(circle at center, ${lightEnd} 0%, ${darkMid} 60%, ${darkEnd} 100%)`,
        boxShadow: `inset 0 0 100px rgba(0, 0, 0, ${0.2 + intensity * 0.4}), inset 0 0 50px rgba(0, 0, 0, ${0.1 + intensity * 0.3})`
      }
    }
  },

  mounted() {
    // Добавляем обработчик для показа контролов, если нужно
    if (this.showControls && this.$refs.video) {
      this.$refs.video.controls = true
    }
  },

  methods: {
    onVideoLoaded() {
      this.isVideoLoaded = true
      this.$emit('loaded')
    },

    onVideoError() {
      this.videoError = true
      this.$emit('error')
    },

    // Методы для управления видео извне
    play() {
      this.$refs.video?.play()
    },

    pause() {
      this.$refs.video?.pause()
    },

    togglePlay() {
      if (this.$refs.video?.paused) {
        this.$refs.video.play()
      } else {
        this.$refs.video?.pause()
      }
    }
  }
}
</script>

<style scoped>
.fullscreen-video {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

/* Видео контейнер */
.video-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  overflow: hidden;
}

/* Стили видео - заполняет весь экран без черных полос */
.video-background video {
  position: absolute;
  top: 50%;
  left: 50%;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  transform: translate(-50%, -50%);
  object-fit: cover;
  object-position: center center;
  filter: brightness(1.02) contrast(1.05); /* Небольшая коррекция изображения */
}

/* Теневой оверлей - создает эффект виньетки и тени по краям */
.shadow-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  pointer-events: none;
  background: radial-gradient(circle at center,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.1) 30%,
    rgba(0, 0, 0, 0.4) 60%,
    rgba(0, 0, 0, 0.7) 100%
  );
  box-shadow: inset 0 0 120px rgba(0, 0, 0, 0.5),
              inset 0 0 60px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
}

/* Затемняющий слой */
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 3;
  pointer-events: none;
  transition: background 0.3s ease;
}

/* Контейнер для контента */
.content-wrapper {
  position: relative;
  z-index: 4;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  padding: 20px;
}

/* Убираем padding если нужно */
.content-wrapper.no-padding {
  padding: 0;
}

/* Дефолтный контент (если слот не используется) */
.default-content {
  text-align: center;
  animation: fadeInUp 0.8s ease-out;
}

.default-title {
  font-size: clamp(40px, 12vw, 120px);
  font-weight: 800;
  margin: 0;
  letter-spacing: 0.05em;
  text-shadow: 0 2px 20px rgba(0, 0, 0, 0.5),
               0 4px 30px rgba(0, 0, 0, 0.3);
}

.default-subtitle {
  font-size: clamp(16px, 4vw, 24px);
  margin-top: 20px;
  opacity: 0.95;
  text-shadow: 0 1px 15px rgba(0, 0, 0, 0.4);
}

/* Анимации */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Адаптация для планшетов */
@media (max-width: 768px) {
  .shadow-overlay {
    box-shadow: inset 0 0 60px rgba(0, 0, 0, 0.5),
                inset 0 0 30px rgba(0, 0, 0, 0.3);
  }

  .default-title {
    font-size: clamp(32px, 10vw, 60px);
  }

  .default-subtitle {
    font-size: 16px;
    padding: 0 20px;
  }
}

/* Адаптация для мобильных */
@media (max-width: 480px) {
  .shadow-overlay {
    background: radial-gradient(circle at center,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.15) 50%,
      rgba(0, 0, 0, 0.5) 100%
    );
    box-shadow: inset 0 0 40px rgba(0, 0, 0, 0.4);
  }

  .default-title {
    font-size: clamp(28px, 8vw, 40px);
  }
}

/* Эффект при наведении (опционально) */
.fullscreen-video:hover .shadow-overlay {
  background: radial-gradient(circle at center,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.08) 40%,
    rgba(0, 0, 0, 0.35) 70%,
    rgba(0, 0, 0, 0.65) 100%
  );
  transition: all 0.5s ease;
}
</style>
