import { createRouter, createWebHistory } from 'vue-router';

// Pages
import Home from '../components/pages/Home.vue';
import About from '../components/pages/About.vue';

// Layout
import DefaultLayout from '../components/layouts/DefaultLayout.vue';

const routes = [
  {
    path: '/',
    component: DefaultLayout,
    children: [
      {
        path: '',
        name: 'Home',
        component: Home,
      },
      {
        path: 'about',
        name: 'About',
        component: About,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
