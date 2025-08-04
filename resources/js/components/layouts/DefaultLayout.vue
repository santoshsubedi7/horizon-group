<template>
    <div>
      <Header />
      <router-view />
      <Footer />
    </div>
  </template>
  
  <script>
  import Header from '../partials/Header.vue';
  import Footer from '../partials/Footer.vue';
  
  export default {
    name: 'DefaultLayout',
    components: {
      Header,
      Footer,
    },
  };
  </script>
  