<template>
    <nav
    class="bg-white text-neutral-900 flex justify-between items-center px-4 shadow-md nav_bar fixed top-[32px] left-0 w-full z-[1000]"
    >
      <div class="flex items-center">
        <span
          class="text-2xl tracking-wide"
          style="color: #0D0F11; padding-right: 8px; font-weight: 900;"
        >HORIZON
        </span>
        <span 
            class="text-2xl font-bold tracking-wide" style="color: #00B1E6;"
        >GROUP
        </span>
      </div>
      <div class="flex items-center gap-8">
        <a
          v-for="link in navLinks"
          :key="link.name"
          :href="link.path"
          class="nav-link relative text-[#595D61] font-normal hover:!text-[#0D0F11] transition-all duration-200 ease-in-out"
        >
          {{ link.name }}
        </a>
  
        <a
          :href="contactPath"
          class="ml-4 bg-slate-950 px-4 py-2 hover:bg-slate-800 transition text-center inline-block nav_bar_btn text-white"
        >
          お問い合わせ
        </a>
      </div>
    </nav>
  </template>
  
  <script>
  import TopNav from '@/components/ui/navbar/TopNav.vue';
  export default {
    name: 'Navbar',
    data() {
      return {
        navLinks: [
          { name: 'ホーム', path: '/' },
          { name: 'サービス', path: '/services' },
          { name: '教育業務', path: '/education' },
          { name: 'お知らせ', path: '/news' },
          { name: 'FAQ', path: '/faq' },
          { name: '会社概要', path: '/about' },
        ],
        contactBtn: '/contact',
      };
    },
    
  };
  </script>
  
  <style scoped>
  .nav_bar {
    height: 80px;
  }
  .nav-link {
    position: relative;
    overflow: hidden;
  }
  .nav-link::after {
    content: '';
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
  .nav_bar_btn {
    color: #fff;
    font-size: 14px;
  }
  </style>
  