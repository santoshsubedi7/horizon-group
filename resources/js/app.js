import './bootstrap';
import { createApp } from 'vue';
import App from './components/App.vue';
import router from './router/router';
import '../css/app.css';


//fontawesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faFacebookF, faTiktok, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import {faAngleDown, faArrowRight,faQuoteLeft, faQuoteRight} from '@fortawesome/free-solid-svg-icons';


library.add(faFacebookF, faTiktok, faXTwitter, faAngleDown, faArrowRight, faQuoteLeft, faQuoteRight);

const app = createApp(App);
app.use(router)

app.component('font-awesome-icon', FontAwesomeIcon);

app.mount('#app');
