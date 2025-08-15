<template>
    <button
      :class="['text-white xs:text-xs sm:text-sm px-4 py-2 bg-[#0D0F11]',
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


