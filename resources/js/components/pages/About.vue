<template>
    <div class="flex flex-col items-center justify-center min-h-screen text-center">
      <h2 class="text-2xl text-red-500 mb-4">This is the about page</h2>
      <p class="text-gray-700">Yo content router-view  ma aucha ta??</p>
      <Button>TEST BUTTON</Button>
    </div>
  </template>
  
  <script>
  import Button from '../ui/Button/Button.vue';
  export default {
    name: 'About',
    components: {
        Button
    },
  };
  </script>
  