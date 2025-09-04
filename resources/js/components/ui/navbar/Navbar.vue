<template>
  <nav class="bg-white shadow-sm px-4 md:px-8 py-5">
    <div class="flex items-center justify-between">
      <!-- Logo -->
      <div>
        <router-link to="/" class="flex items-center">
          <img :src="hgLogo" alt="logo" class="w-[40px] h-[40px] block md:hidden">
          <span class="text-2xl font-extrabold text-[#0D0F11] tracking-wide pr-2 hidden md:block">HORIZON</span>
          <span class="text-2xl font-extrabold text-[#00B1E6] tracking-wide hidden md:block">GROUP</span>
        </router-link>
      </div>

      <!-- Hamburger Button -->
      <button
        class="lg:hidden flex items-center p-2"
        @click="isOpen = !isOpen"
        :aria-expanded="isOpen ? 'true' : 'false'"
        aria-controls="mobile-menu"
        aria-label="Toggle menu"
      >
        <svg v-if="!isOpen" class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4 8h16M4 16h16" />
        </svg>
        <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <!-- Navigation Links (Desktop) -->
      <ul class="hidden lg:flex items-center gap-8">
        <li><router-link to="/" class="nav-link transition-all duration-200 ease-in-out">ホーム</router-link></li>
        <li><router-link to="/service" class="nav-link transition-all duration-200 ease-in-out">サービス</router-link></li>
        <li><router-link to="/career_academy" class="nav-link transition-all duration-200 ease-in-out">教育業務</router-link></li>
        <li><router-link to="/blogs_item" class="nav-link transition-all duration-200 ease-in-out">お知らせ</router-link></li>
        <li><router-link to="/faq" class="nav-link transition-all duration-200 ease-in-out">FAQ</router-link></li>
        <li>
          <router-link to="/about" class="nav-link transition-all duration-200 ease-in-out">会社概要</router-link>
        </li>
        <li>
          <router-link to="/contact">
            <BlackButton>お問い合わせ</BlackButton>
          </router-link>
        </li>
      </ul>
    </div>

    <!-- Mobile/Tablet Menu (animated with real height) -->
    <transition @enter="enter" @leave="leave">
      <ul
        v-if="isOpen"
        id="mobile-menu"
        class="flex flex-col gap-4 mt-4 lg:hidden"
      >
        <li><router-link to="/">ホーム</router-link></li>
        <li><router-link to="/service">サービス</router-link></li>
        <li><router-link to="/career_academy">教育業務</router-link></li>
        <li><router-link to="/blogs_item">お知らせ</router-link></li>
        <li><router-link to="/faq">FAQ</router-link></li>
        <li><router-link to="/contact">お問い合わせ</router-link></li>
      </ul>
    </transition>
  </nav>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import hgLogo from '../../../../assets/logo.svg'
import BlackButton from '../button/BlackButton.vue'

const isOpen = ref(false)
const route = useRoute()

// Optional UX: close the menu on route change
watch(() => route.fullPath, () => { isOpen.value = false })

/** Transition hooks: animate to/from real content height */
const enter = (el) => {
  el.style.height = '0px'
  el.style.overflow = 'hidden'
  el.style.opacity = '0'
  el.style.transform = 'translateY(-8px)'
  el.style.transition = 'height 300ms cubic-bezier(.4,0,.2,1), opacity 200ms, transform 300ms'

  requestAnimationFrame(() => {
    const h = el.scrollHeight
    el.style.height = h + 'px'
    el.style.opacity = '1'
    el.style.transform = 'translateY(0)'
  })

  const cleanup = () => {
    el.style.height = 'auto'
    el.style.overflow = ''
    el.removeEventListener('transitionend', cleanup)
  }
  el.addEventListener('transitionend', cleanup)
}

const leave = (el) => {
  el.style.overflow = 'hidden'
  const h = el.scrollHeight
  el.style.height = h + 'px'
  el.style.opacity = '1'
  el.style.transform = 'translateY(0)'
  el.style.transition = 'height 300ms cubic-bezier(.4,0,.2,1), opacity 200ms, transform 300ms'

  requestAnimationFrame(() => {
    el.style.height = '0px'
    el.style.opacity = '0'
    el.style.transform = 'translateY(-8px)'
  })
}
</script>

<style scoped>
/* Keep origin styles */
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

/* underline effect */
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
  transition: transform 0.3s cubic-bezier(.4, 0, .2, 1);
}

.nav-link:hover::after,
.nav-link:focus-visible::after {
  transform: translateX(-50%) scaleX(1);
}

.nav-contact-link {
  color: #fff;
  font-size: 14px;
}
</style>
