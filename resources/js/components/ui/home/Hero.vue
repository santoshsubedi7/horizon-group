<template>
  <section class="hero relative  flex flex-col justify-between text-white font-main px-4 md:px-10 lg:px-16 py-8 md:py-12 bg-cover bg-center bg-no-repeat" style="background-image: url('/desktop-hero-img.jpg');background-position: center 0%;">
    <!-- Overlay -->
    <div class="absolute inset-0 bg-[rgba(80,90,110,0.6)] z-0"></div>

    <!-- Content -->
<div class="flex items-center justify-center h-screen">
  <div class="relative z-10 mt-8 md:mt-16">
    <p class="text-base md:text-lg mb-1 md:mb-2 opacity-80 hero-subtitle">世界と日本をつなぐチカラ</p>
    <h1 class="font-extrabold tracking-wide mb-3 md:mb-6 leading-tight hero-title">HORIZON GROUP</h1>
    <p class="2xl:leading-loose 2xl:w-[60%] lg:w-[75%] mx-auto text-center hero-desc">
      成長を志す外国籍の皆様と、世界へ羽ばたく企業様との架け橋となることを目指しております。
      共に支え、高めあうことができますよう、全身全霊でサポートいたします。
    </p>
    <div class="flex flex-col sm:flex-row gap-3 md:gap-5 justify-center items-center 2xl:mt-9">
          <BlackBtn class="btn-lg text-xs sm:text-sm md:text-base">企業方へお問い合わせ</BlackBtn>
          <BlueBtn class="btn-lg text-xs sm:text-sm md:text-base">求人方へお問い合わせ</BlueBtn>
    </div>
  </div>
</div>

    <!-- News Bar -->
    <div class="news_bar w-[90%] mx-auto hidden relative z-10 bg-white md:flex flex-col md:flex-row justify-between items-center border-t border-neutral-200 px-4 md:px-10 lg:px-16 py-3 text-xs md:text-sm font-main mt-6 gap-2">
      <div class="block md:flex items-center gap-2 md:gap-3 flex-1 min-w-0 overflow-x-auto">
        <span class="font-bold text-[#0D0F11] text-sm md:text-base border-r-0 md:border-r md:border-gray-300 w-[100px]">NEWS</span>
        <span class="text-neutral-400">2025.07.17</span>
        <span class="news_bar_category bg-black text-white text-[8px] md:text-xs px-2 py-0.5">お知らせ</span>
        <p class="news_bar_desc ml-2 truncate border-l-0 md:border-l md:border-gray-300 pl-4">
          <a href="" class="news-links text-[#595D61] hover:!text-[#0D0F11] transition-colors duration-300 ease-in-out text-[10px] lg:text-sm">代表をはじめ、スタッフ全員が日本で学び、働き、生活してきた経験がございます。</a>
        </p>
      </div>
      <div class="shrink-0 border-l-0 md:border-l md:border-gray-300 pl-4">
        <a href="#" class="text-[10px] sm:text-xs !text-[#0080FF] news-links hover:!text-[#00B1E6] transition-all duration-200 ease-in-out">すべてを見る <font-awesome-icon :icon="['fas', 'arrow-right']" /></a>
      </div>
    </div>          

    <!-- Scroll Down -->
<div class="hidden absolute right-2 md:right-5 top-1/2 transform -translate-y-1/2 z-10 md:flex flex-col items-center opacity-60 select-none">
  <span class="writing-vertical text-[10px] md:text-xs">Scroll down</span>
<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28.24 500">
  <line x1="13.59" y1="21.75" x2="13.59" y2="485.77" style="fill: none; stroke: #FFF; stroke-miterlimit: 10; stroke-width: 2px;"/>
  <polygon points="5.41 479.15 6.88 477.78 13.59 485 20.31 477.78 21.77 479.15 13.59 487.94 5.41 479.15" style="fill: #FFF;"/>
</svg>
</div>
  </section>
</template>


<script>
import BlackBtn from '../../ui/button/BlackButton.vue';
import BlueBtn from '../../ui/button/BlueButton.vue';

export default {
  
  name: 'Hero',
  components: { BlackBtn, BlueBtn,},
};
</script>



<style scoped>
.font-main {
  font-family: 'M PLUS 1', 'Roboto', Arial, sans-serif;
}
.hero-subtitle {
   color: aliceblue;
}
.hero-title {
 color: #ffffff;
  font-family: Roboto;
  font-weight: 900;
}
.writing-vertical {
  writing-mode: vertical-rl;
  text-orientation: mixed;
}
.news-links {
  position: relative;
  overflow: hidden;
}

.news-links::after {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 1px;
  background: #00B1E6;
  transform: scaleX(0);
  transform-origin: center;
  transition: transform 0.3s ease-in-out;
}

.news-links:hover::after,
.news-links:focus-visible::after {
  transform: scaleX(1);
}

/* SmartPhones */
@media (max-width:640px){ 
  .hero {
    height: 80vh;
    background-image: url('/smartphone-here-img.jpg');
    background-position: center;
    background-size: cover; 
    background-repeat: no-repeat;
    padding-top: 30%;
  }
  .hero-title{
    font-size: 40px;
    line-height: 1;
    text-align: center;
  }
  .hero-subtitle{
    font-size: 18px;
    line-height: 2;
    text-align: center;
  }
  .hero-desc{
    font-size: 12px !important;
    line-height: 2;
    margin-bottom: 32px;
    width: 96%;
      }
 
    }

/* tablet 768 md: */
@media (min-width:768px){ 
  .hero {
    height: 80vh;
    background-image: url('/tablet-hero-img.jpg');
    background-position: center;
    background-size: cover; 
    background-repeat: no-repeat;
    padding-left: 12px;
    padding-right: 12px;
  }
  .hero-title{
    font-size: 80px;
    line-height: 1;
    text-align: center;
  }
  .hero-subtitle{
    font-size: 24px;
    line-height: 1;
    padding-left: 44px;
  }
  .hero-desc{
    font-size: 16px;
    line-height: 2;
    margin-bottom: 32px;
    width: 80%;
      }
      .news_bar_category{
        display: none;
      }

    }


/* Desktop/Laptop 1024x600, 768 */
@media (min-width:1024px){ 
  .hero {
    height: 100vh;
  }
  .hero-title{
    font-size: 104px;
    line-height: 1;
  }
  .hero-subtitle{
    font-size: 24px;
    line-height: 1;
    padding-left: 66px;
  }
  .hero-desc{
    font-size: 16px;
    line-height: 2;
    margin-bottom: 24px;
      }

    }
/* Responsive */
@media (min-width:1280px){ 
  .hero {
    height: 100vh;
  }
  .hero-title{
    font-size: 136px;
  }
  .hero-subtitle{
    font-size: 32px;
    line-height: 1;
    padding-left: 62px;
  }
  .hero-desc{
    font-size: 16px;
    line-height: 2;
    margin-bottom: 24px;
      }

    }
/* Responsive */
@media (min-width:1366px){ 
  .hero {
    height: 100vh;
  }
  .hero-title{
    font-size: 146px;
  }
  .hero-subtitle{
    font-size: 36px;
    line-height: 1;
  }
  .hero-desc{
    font-size: 18px;
    line-height: 2;
    margin-bottom: 24px;
      }

    }

/* Responsive */
@media (min-width:1440px){ 
  .hero {
    height: 100vh;
  }
  .hero-title{
    font-size: 158px;
  }
  .hero-subtitle{
    font-size: 40px;
    line-height: 1;
    padding-left: 46px;
  }
  .hero-desc{
    font-size: 18px;
    line-height: 2;
    margin-bottom: 24px;
      }
      .news_bar_category{
    display: block;
  }

    }

/* Responsive */
@media (min-width:1680px){ 
  .hero {
    height: 100vh;
  }
  .hero-title{
    font-size: 184px;
  }
  .hero-subtitle{
    font-size: 48px;
    line-height: 1;
  }
  .hero-desc{
    font-size: 22px;
      }
      .news_bar_category{
    display: block;
  }
    }
@media (min-width:1920px){ 
  .hero {
    height: 100vh;
  }
  .hero-title{
    font-size: 200px;
  }
  .hero-subtitle{
    font-size: 56px;
    line-height: 1;
    padding-left: 104px;
  }
  .hero-desc{
    font-size: 24px;
  }
  .news_bar_category{
    display: block;
  }
}

</style>