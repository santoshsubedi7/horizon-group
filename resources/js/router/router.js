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
import PrivacyPolicy from '../components/pages/PrivacyPolicy.vue'
import CookiePolicy from '../components/pages/CookiePolicy.vue';
import CompanyContactForm from '../components/pages/CompanyContactForm.vue';



const routes = [
  {
    path: '/',
    component: DefaultLayout,
    children: [
      { path: '', name: 'Home', component: Home,},
      { path: 'about', name: 'About', component: About,},
      { path: 'contact', name: 'Contact', component: Contact,},
      { path: 'service', name: 'Service', component: Service, },
      { path: 'faq', name: 'Faq', component: Faq, },
      { path: 'greeting', name: 'Greeting', component: Greeting, },
      { path: 'career_academy', name: 'Career_Academy', component: CareerAcademy, },
      { path: 'news_list', name: 'News_List', component: NewsList, },
      { path: 'privacy_policy', name: 'Privacy Policy', component: PrivacyPolicy,},
      { path: 'cookie_policy', name: 'Cookie Policy', component: CookiePolicy,},
      { path: 'contact_company', name: 'Contact_Company', component: CompanyContactForm,},
      
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,

  scrollBehavior(to, from, savedPosition) {
  if (savedPosition) {
    return savedPosition;
  } else {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    return false; // Prevent Vue Router from jumping instantly
  }
}

});

export default router;
