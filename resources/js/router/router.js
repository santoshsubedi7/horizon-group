import { createRouter, createWebHistory } from 'vue-router';

// Pages
import Home from '../components/pages/Home.vue';
import About from '../components/pages/About.vue';
import Contact from '../components/pages/Contact.vue';
import Service from '../components/pages/Service.vue'

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
      {
        path: 'contact',
        name: 'Contact',
        component: Contact,
      },
      {
        path: 'service',
        name: 'Service',
        component: Service,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
