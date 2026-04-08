import { createRouter, createWebHistory } from 'vue-router'
import home from '../views/home.vue'
import tests from '../views/tests.vue'
import calculator from '../views/calculator.vue'
import lectures from '../views/lectures.vue'
import lecture from '../views/lecture.vue' // используем существующий компонент

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: home,
    },
    {
      path: '/tests/',
      name: 'tests',
      component: tests,
      props: true,
    },
    {
      path: '/calculator/',
      name: 'calculator',
      component: calculator,
      props: true,
    },
    {
      path: '/lectures/',
      name: 'lectures',
      component: lectures,
    },
    {
      path: '/lecture/:lectureIndex/:lectureId?',
      name: 'lecture',
      component: lecture, // используем существующий компонент
      props: true
    }
  ],
})

export default router
