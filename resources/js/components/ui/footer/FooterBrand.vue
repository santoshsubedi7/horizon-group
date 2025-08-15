<template>
    <div class="flex-1 mx-auto md:mx-auto-none">
      <div class="flex items-center">
        <img :src="logoImg" alt="Horizon Group Logo" class="w-[50px] h-[50px] mb-2" />
        <div class="ml-4">
          <p class="text-[14px] text-[#666] mb-1 font-bold">世界と日本をつなぐチカラ</p>
          <router-link to="/" class="flex items-center">
          <span class="text-2xl font-extrabold text-[#0D0F11] tracking-wide pr-2 hidden md:block">HORIZON</span>
          <span class="text-2xl font-extrabold text-[#00B1E6] tracking-wide hidden md:block">GROUP</span>
        </router-link>
        </div>
      </div>
      <address class="not-italic mt-6">
        <p class="text-[13px] leading-[1.4] my-[3px]">〒105-0011 東京都港区芝公園４丁目２−８</p>
        <p class="text-[13px] leading-[1.4] my-[3px]">Tel. 03-5497-8734 Fax. 03-5497-8735</p>
        <p class="text-[13px] leading-[1.4] my-[3px]">info@horizongroup.co.jp</p>
      </address>
    </div>
      </template>
  
  <script>
  import logoImg from '../../../../assets/logo.svg';
  export default {
    name: 'FooterBrand',
    data() {
      return { logoImg };
    },
  };
  </script>
  <style>
  @media screen {
    .f_Brand{
      border-bottom: solid 1px #333;
    }
  }
</style>
  