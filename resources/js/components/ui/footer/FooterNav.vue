<template>
    <nav class="footer-nav">
      <ul class="flex gap-4 m-0 p-0 list-none inline-flex">
        <li v-for="link in links" :key="link.text">
          <a href="#" class="footer-nav-link text-[14px] relative text-[#595D61] font-normal hover:!text-[#0D0F11] transition-all duration-200 ease-in-out">
            {{ link.text }}
          </a>
        </li>
      </ul>
    </nav>
  </template>
  
  <script>
  export default {
    name: 'FooterNav',
    data() {
      return {
        links: [
          { text: 'ご挨拶' },
          { text: '登録鑑' },
          { text: 'サービス' },
          { text: '教育業務' },
          { text: 'お知らせ' },
          { text: '会社概要' },
          { text: 'お問い合わせ' },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  .footer-nav-link::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 1.5px;
    background: #00B1E6;
    transform: scaleX(0);
    transform-origin: center;
    transition: transform 0.3s ease-in-out;
  }
  .footer-nav-link:hover::after {
    transform: scaleX(1);
  }
  </style>
  