<template>
    <div class="bg-[#00B1E6] text-white text-sm flex justify-between items-center py-2 px-8 fixed top-0 left-0 w-full z-[1001]">
      <div class="flex gap-6">
        <span>info@horizongroup.co.jp</span>
        <span>03-5497-8734</span>
      </div>
      <div class="flex items-center gap-4">
        <a href="#" aria-label="Facebook" class="hover:opacity-80"><font-awesome-icon :icon="['fab', 'facebook-f']" /></a>
        <a href="#" aria-label="TikTok" class="hover:opacity-80"><font-awesome-icon :icon="['fab', 'tiktok']" /></a>
        <a href="#" aria-label="Twitter/X" class="hover:opacity-80"><font-awesome-icon :icon="['fab', 'x-twitter']" /></a>
        <button class="ml-2 text-white hover:underline">
          En <font-awesome-icon :icon="['fas', 'angle-down']" />
        </button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'TopNav',
  };
  </script>
  