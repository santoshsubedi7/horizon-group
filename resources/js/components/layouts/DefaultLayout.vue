<template>
    <div>
      <Header />
      <div class="main-container" style="display: flex;">
        <Sidebar />
        <main style="flex-grow: 1; padding: 1rem;">
          <router-view />
        </main>
      </div>
    </div>
  </template>
  
  <script>
  import Header from '../partials/Header.vue';
  import Sidebar from '../partials/Sidebar.vue';
  
  export default {
    components: {
      Header,
      Sidebar,
    },
  };
  </script>
  
  <style>

  </style>
  