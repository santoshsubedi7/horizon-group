<template>
    <button
      :class="['text-white text-[14px] px-4 py-2 bg-[#0D0F11]',
      'hover:bg-[#0D0F11]/85 transition-colors duration-300',
      'cursor-pointer']"
    >
      <slot />
    </button>
  </template>
  
  <script>
  export default {
    name: 'BlackButton',
  };
  </script>