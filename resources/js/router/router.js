import { createRouter, createWebHistory } from 'vue-router';

// Layout
import DefaultLayout from '../components/layouts/DefaultLayout.vue';

// Pages
import Home from '../components/pages/Home.vue';
import About from '../components/pages/About.vue';
import Contact from '../components/pages/Contact.vue';
import Service from '../components/pages/Service.vue';
import Faq from '../components/pages/Faq.vue';
import Greeting from '../components/pages/Greeting.vue';
import CareerAcademy from '../components/pages/CareerAcademy.vue';
import NewsList from '../components/pages/NewsList.vue';



const routes = [
  {
    path: '/',
    component: DefaultLayout,
    children: [
      {
        path: '', name: 'Home', component: Home,
      },
      {path: 'about', name: 'About', component: About,
      },
      {path: 'contact', name: 'Contact', component: Contact,
      },
      {path: 'service', name: 'Service', component: Service,},
      {path: 'faq', name: 'Faq', component: Faq,},
      {path: 'greeting', name: 'Greeting', component: Greeting,},
      {path: 'career_academy', name: 'Career_Academy', component: CareerAcademy,},
      {path: 'news_list', name: 'News_List', component: NewsList,},
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
