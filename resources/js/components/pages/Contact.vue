<template>
   <div class="flex flex-col items-center justify-center min-h-screen text-center">
      <h2 class="text-2xl text-red-500 mb-4">This is the contact page</h2>
      <Button>my name</Button>
      <p class="text-gray-700">Yo content router-view  ma aucha ta??</p>
    </div>
</template>
<script scafold>
import Button from '../ui/Button/Button.vue';
export default {
    name: 'Contact',
    components: {
        Button
    },
}
</script>