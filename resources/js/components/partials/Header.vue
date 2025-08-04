<template>
  <header class="mx-2">
    <TopNav />
    <Navbar />
  </header>
</template>

<script>
import Navbar from '@/components/ui/navbar/Navbar.vue';
import TopNav from '@/components/ui/navbar/TopNav.vue';

export default {
  name: 'Header',
  components: {
    Navbar,
    TopNav
  },
};
</script>

<style scoped>
header {
  position: relative;
  z-index: 1000;
}
</style>
