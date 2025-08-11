<template>
    <button
      :class="['text-white xs:text-xs sm:text-sm md:text-base 2xl:text-lg px-4 py-2 bg-blue-600',
      'hover:bg-blue-500/85 transition-colors duration-300',
      'cursor-pointer']"
    >
      <slot />
    </button>
  </template>
  
  <script>
  export default {
    name: 'BlueButton',
  };
  </script>
  