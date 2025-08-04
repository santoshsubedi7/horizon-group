<template>
    <button
      :class="['bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700']"
    >
      <slot />
    </button>
  </template>
  
  <script>
  export default {
    name: 'Button',
  };
  </script>
  