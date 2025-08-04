<template>
    <div class="flex-1 min-w-[300px] max-w-[350px]">
      <div class="flex items-center">
        <img :src="logoImg" alt="Horizon Group Logo" class="w-[50px] h-[50px] mb-2" />
        <div class="ml-4">
          <p class="text-[14px] text-[#666] mb-1 font-bold">世界と日本をつなぐチカラ</p>
          <h2 class="text-[24px] text-[#0D0F11] font-extrabold m-0">
            HORIZON <span class="text-[#00B1E6] font-extrabold">GROUP</span>
          </h2>
        </div>
      </div>
      <address class="not-italic mt-2">
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
  