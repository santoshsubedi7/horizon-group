<template>
    <div class="flex flex-wrap justify-between items-center pt-2 pb-6 px-8">
      <div class="flex gap-4">
        <router-link to="/privacy_policy" class="text-[12px] pb-2 text-[#888] no-underline hover:underline">プライバシーポリシー</router-link>
        <router-link to="/cookie_policy" class="text-[12px] pb-2 text-[#888] no-underline hover:underline">クッキーポリシー</router-link>
      </div>
      <div>
        <small class="text-[12px] text-[#999]">© 2025 Horizon Group. All rights reserved.</small>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'FooterLegal',
  };
  </script>
  