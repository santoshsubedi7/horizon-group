<template>

  <nav class="bg-white shadow-sm px-4 md:px-8 py-5">
    <div class="flex items-center justify-between">
      <!-- Logo -->

      <div class="">
        <router-link to="/" class="flex items-center">
          <img :src="hgLogo" alt="logo" class="w-[40px] h-[40px] block md:hidden">
          <span class="text-2xl font-extrabold text-[#0D0F11] tracking-wide pr-2 hidden md:block">HORIZON</span>
          <span class="text-2xl font-extrabold text-[#00B1E6] tracking-wide hidden md:block">GROUP</span>
        </router-link>

      </div>
      <!-- Hamburger Button -->
      <button class="lg:hidden flex items-center p-2" @click="isOpen = !isOpen" aria-label="Toggle menu">
        <svg v-if="!isOpen" class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4 8h16M4 16h16" />
        </svg>
        <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      <!-- Navigation Links -->
      <ul class="hidden lg:flex items-center gap-8">
        <li><router-link to="/" class="nav-link transition-all duration-200 ease-in-out">ホーム</router-link></li>
        <li><router-link to="/service" class="nav-link transition-all duration-200 ease-in-out">サービス</router-link></li>
        <li><router-link to="/career_academy" class="nav-link transition-all duration-200 ease-in-out">教育業務</router-link></li>
        <li><router-link to="/blogs_item" class="nav-link transition-all duration-200 ease-in-out">お知らせ</router-link> </li>
        <li><router-link to="/faq" class="nav-link transition-all duration-200 ease-in-out">FAQ</router-link></li>
        <li><router-link to="/about" class="nav-link transition-all duration-200 ease-in-out">会社概要</router-link></li>
        <li><router-link to="/contact">
            <BlackButton>お問い合わせ</BlackButton>
          </router-link></li>
      </ul>
    </div>
    <!-- Mobile/Tablet Menu -->
    <transition name="slide-fade">
      <ul v-if="isOpen" class="flex flex-col gap-4 mt-4 lg:hidden">
        <li><router-link to="/">ホーム</router-link></li>
        <li><router-link to="/service">サービス</router-link></li>
        <li><router-link to="/career_academy">教育業務</router-link></li>
        <li><router-link to="/news_list">お知らせ</router-link></li>
        <li><router-link to="/faq">FAQ</router-link></li>
        <li><router-link to="/contact">お問い合わせ</router-link></li>
      </ul>
    </transition>
  </nav>
</template>

<script setup>
import { ref } from 'vue';
import hgLogo from '../../../../assets/logo.svg'
import BlackButton from '../button/BlackButton.vue';

const isOpen = ref(false)

</script>

<style scoped>
/* Remove font-medium from here, apply in template! */
nav {
  width: 100%;
  position: fixed;
  top: 36px;
  left: 0;
  z-index: 1000;
}

nav a {
  font-size: 15px;
}

.nav-link {
  @apply relative text-[#595D61] hover:text-[#0D0F11] transition-all duration-300;
}

/* You can rename .nav-link to anything unique */
.nav-link {
  position: relative;
  display: inline-block;
  padding-bottom: 2px;
}

.nav-link::after {
  content: "";
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translateX(-50%) scaleX(0);
  transform-origin: center;
  width: 100%;
  height: 1.5px;
  background-color: #00B1E6;
  /* Change to your brand color */
  transition: transform 0.3s cubic-bezier(.4, 0, .2, 1);
}

.nav-link:hover::after,
.nav-link:focus-visible::after {
  transform: translateX(-50%) scaleX(1);
}


.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(.4, 0, .2, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

.nav-contact-link {
  color: #fff;
  font-size: 14px;
}
</style>