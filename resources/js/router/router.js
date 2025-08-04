import { createRouter, createWebHistory } from 'vue-router';

import Home from '../components/pages/Home.vue';
import About from '../components/pages/About.vue';
import Contact from '../components/pages/Contact.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: About },
  { path: '/contact', name: 'Contact', component: Contact },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
