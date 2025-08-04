<template>
  <header>
    <div class="bg-[#00B1E6] text-white text-sm py-2 px-4 md:px-8 flex items-center justify-between">
      <!-- Contacts: hidden below md -->
      <div class="hidden md:block gap-6">
        <span class="pr-4">info@horizongroup.co.jp</span>
        <span>03-5497-8734</span>
      </div>

      <!-- Social Icons: hidden below md -->
      <div class="flex items-center gap-4">
        <a href="#" aria-label="Facebook" class="hover:opacity-80 hidden lg:flex ">
          <font-awesome-icon :icon="['fab', 'facebook-f']" />
        </a>
        <a href="#" aria-label="TikTok" class="hover:opacity-80 hidden lg:flex ">
          <font-awesome-icon :icon="['fab', 'tiktok']" />
        </a>
        <a href="#" aria-label="Twitter/X" class="hover:opacity-80 hidden lg:flex ">
          <font-awesome-icon :icon="['fab', 'x-twitter']" />
        </a>
        <button class="text-white hover:underline flex items-center gap-1">
          En <font-awesome-icon :icon="['fas', 'angle-down']" />
        </button>
      </div>

      <!-- Language Selector: always show, moves left on mobile -->

    </div>

    <!-- Main Navigation Bar -->
<nav class="bg-white text-neutral-900 lg:flex justify-between items-center px-8 shadow-md nav_bar">
  <div class="flex items-center hidden lg:block">
    <span class="text-2xl tracking-wide" style="color: #0D0F11;padding-right: 8px;font-weight: 900;">HORIZON </span>
    <span class="text-2xl font-bold tracking-wide" style="color: #00B1E6;">GROUP</span>
    <!-- Replace LOGO with <img> if you have a logo image -->
  </div>
  <div class="lg:hidden py-4 lg:pt-0 text-right border-b border-b-gray-300">
    <button class="toggle"><font-awesome-icon :icon="['fas', 'bars']" /></button>
  </div>
  <ul class="lg:flex items-center gap-8">
    <li>
      <a href="#" class="nav-link relative text-[#595D61] font-normal hover:!text-[#0D0F11] transition-all duration-200 ease-in-out">ホーム</a>
    </li>
    <li>
      <a href="#" class="nav-link relative text-[#595D61] font-normal hover:!text-[#0D0F11] transition-all duration-200 ease-in-out">サービス</a>
    </li>
    <li>
      <a href="#" class="nav-link relative text-[#595D61] font-normal hover:!text-[#0D0F11] transition-all duration-200 ease-in-out">教育業務</a>
    </li>
    <li>
      <a href="#" class="nav-link relative text-[#595D61] font-normal hover:!text-[#0D0F11] transition-all duration-200 ease-in-out">お知らせ</a>
    </li>
    <li>
      <a href="#" class="nav-link relative text-[#595D61] font-normal hover:!text-[#0D0F11] transition-all duration-200 ease-in-out">FAQ</a>
    </li>
    <li>
      <a href="#" class="nav-link relative text-[#595D61] font-normal hover:!text-[#0D0F11] transition-all duration-200 ease-in-out">会社概要</a>
    </li>
    <li>
      <a href="#" 
      class="sx:bg-none  text-[#595D61] lg:ml-4 lg:px-4 lg:py-2 lg:text-white lg:bg-slate-950 lg:text-sm  hover:bg-slate-800 transition text-center inline-block nav_bar_btn">お問い合わせ</a>
    </li>
  </ul>
</nav>

  </header>
</template>

<script>
import logo from '../../../assets/logo.svg'; 
export default {
      data() {
        return {
            logo
        };
    },
}
</script>

<style scoped>
/* You can add component-specific CSS here if needed */
header {
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
}

.nav_bar {
  height: 80px;
}
@media (max-width: 767px){
  .nav_bar{
    width: 430px !important;
    padding-left: 16px;
    margin-right: 24px;
  }
}
@media (max-width: 1023px) {
  .nav_bar {
    width: 767px !important;
    height: 450px;
 
  }
   .nav_bar ul{
    margin-top: 20px;
   }
  .nav_bar ul li{
    margin-bottom: 20px;
  }
}

.nav-link {
  position: relative;
  overflow: hidden;
  /* Prevents the underline from overflowing */
}

.nav-link::after {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 2px;
  background: #00B1E6;
  transform: scaleX(0);
  transform-origin: center;
  transition: transform 0.3s ease-in-out;
}

.nav-link:hover::after,
.nav-link:focus-visible::after {
  transform: scaleX(1);
}


</style>