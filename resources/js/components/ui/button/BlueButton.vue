<template>
    <button
      :class="['text-white text-[14px] px-4 py-2 bg-blue-600',
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
  