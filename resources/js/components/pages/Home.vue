<template>
  <section
    class="relative min-h-[70vh] md:min-h-screen flex flex-col justify-between text-white font-main px-4 md:px-10 lg:px-16 py-8 md:py-12 bg-cover bg-center bg-no-repeat"
    style="background-image: url('/hb-hero-image.jpg');background-position: center 0%;">
    <!-- Overlay -->


    <!-- Content -->
    <div class="flex items-center justify-center h-screen">
      <div class="relative z-10 mt-8 md:mt-16">
        <p class="text-base md:text-lg opacity-80 hero-subtitle">世界と日本をつなぐチカラ</p>
        <h1 class="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-wide mb-3 md:mb-6 leading-tight hero-title">HORIZON GROUP</h1>
        <p class=" w-[75%] mx-auto text-center hero-slogan">
          成長を志す外国籍の皆様と、世界へ羽ばたく企業様との架け橋となることを目指しております。共に支え、高めあうことができますよう、全身全霊でサポートいたします。
        </p>
        <div class="flex justify-center flex-col sm:flex-row gap-3 md:gap-5 mt-8">
          <button
            class="px-5 py-2.5 bg-black text-white text-sm md:text-base transition-colors duration-200 hover:bg-neutral-700">企業方へお問い合わせ</button>
          <button
            class="px-5 py-2.5 bg-blue-500 text-white text-sm md:text-base transition-colors duration-200 hover:bg-blue-700">求人方へお問い合わせ</button>
        </div>
      </div>
    </div>

    <!-- News Bar -->
    <div
      class="relative z-10 w-full bg-white text-neutral-800 flex flex-col md:flex-row justify-between items-center border-t border-neutral-200 px-4 md:px-10 lg:px-16 py-3 text-xs md:text-sm font-main mt-6 gap-2">
      <div class="flex items-center gap-2 md:gap-3 flex-1 min-w-0 overflow-x-auto">
        <span class="font-bold text-sm md:text-base border-r-0 md:border-r md:border-gray-300 pr-4">NEWS</span>
        <span class="text-neutral-400">2025.07.17</span>
        <span class="bg-black text-white text-[10px] md:text-xs px-2 py-0.5">お知らせ</span>
        <p class="ml-2 truncate border-l-0 md:border-l md:border-gray-300 pl-4">
          <a href=""
            class="text-links text-[#595D61] hover:!text-[#0D0F11] transition-colors duration-300 ease-in-out">代表をはじめ、スタッフ全員が日本で学び、働き、生活してきた経験がございます。</a>
        </p>
      </div>
      <div class="shrink-0 border-l-0 md:border-l md:border-gray-300 pl-4">
        <a href="#"
          class="!text-[#0080FF] text-links hover:!text-[#00B1E6] transition-all duration-200 ease-in-out">すべてを見る
          <font-awesome-icon :icon="['fas', 'arrow-right']" /></a>
      </div>
    </div>

    <!-- Scroll Down -->
    <div
      class="absolute right-2 md:right-5 top-1/2 transform -translate-y-1/2 z-10 flex flex-col items-center opacity-60 select-none">
      <span class="writing-vertical text-[10px] md:text-xs">Scroll down</span>
      <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28.24 500">
        <line x1="13.59" y1="21.75" x2="13.59" y2="485.77"
          style="fill: none; stroke: #FFF; stroke-miterlimit: 10; stroke-width: 2px;" />
        <polygon points="5.41 479.15 6.88 477.78 13.59 485 20.31 477.78 21.77 479.15 13.59 487.94 5.41 479.15"
          style="fill: #FFF;" />
      </svg>
    </div>
    <div class="absolute inset-0 bg-[rgba(80,90,110,0.6)] z-0"></div>
  </section>

  <!-- Our Vision-->
  <section class="container mx-auto our-vision">
    <div class="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12 p-6 md:p-12 ">
      <!-- Left Side: Image -->
      <div class="w-full md:w-1/2 flex justify-center our-vision-img-container">
        <img :src="OurVisionImage" alt="Our Vision Image" class="max-w-full h-auto">
      </div>

      <!-- Right Side: Content -->
      <div class="w-full md:w-1/2 flex flex-col justify-center mt-0 md:mt-6">
        <h2 class="text-2xl md:text-4xl font-bold mb-3">OUR VISION</h2>
        <h5 class="text-lg md:text-xl font-semibold mb-2 text-blue-600">ホリゾングループによる</h5>
        <p class="text-base md:text-lg">
          HORIZON GROUPは、世界を目指す優秀な外国人材と、グローバルな成長を志す日本企業を結ぶ、信頼の架け橋となることを目指しています。私たちチームメンバーは全員が日本での留学・就労経験があり、その経験と共感を活かし、候補者様と企業様の双方に心からのサポートを提供いたします。</p>
        <p class="relative text-right text-base md:text-lg mt-12">
          <a href="#" class="text-links text-[#0080FF] hover:text-[#00B1E6] transition-all duration-200 ease-in-out">私たちについて <font-awesome-icon :icon="['fas', 'arrow-right']" /></a> 
        </p>
      </div>
    </div>
  </section>

  <!-- HORIZON GROUP の強み -->
   <section class="hg-strength">
    <div class="container mx-auto">

      <h2 class="text-2xl md:text-4xl font-bold mb-3 text-center">
      <span style="font-size: 20px;color:#3A3F44;">株式会社</span> HORIZON GROUP <span style="font-size: 20px;color:#3A3F44;">の強み</span>
    </h2>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
  <!-- Card 1 -->
  <div class="bg-white rounded-2xl shadow p-6 flex flex-col items-start">
    <div class="flex items-center mb-3">
      <!-- Icon -->
      <svg class="w-7 h-7 text-blue-500 mr-3" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" />
      </svg>
      <h3 class="text-lg font-bold">Heading 1</h3>
    </div>
    <p class="text-gray-600">This is the first card description. Describe your feature or service here.</p>
  </div>

  <!-- Card 2 -->
  <div class="bg-white rounded-2xl shadow p-6 flex flex-col items-start">
    <div class="flex items-center mb-3">
      <svg class="w-7 h-7 text-green-500 mr-3" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
        <rect x="4" y="4" width="16" height="16" rx="2"/>
      </svg>
      <h3 class="text-lg font-bold">Heading 2</h3>
    </div>
    <p class="text-gray-600">This is the second card. Write about another point here.</p>
  </div>

  <!-- Card 3 -->
  <div class="bg-white rounded-2xl shadow p-6 flex flex-col items-start">
    <div class="flex items-center mb-3">
      <svg class="w-7 h-7 text-yellow-500 mr-3" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
        <polygon points="12 2 2 22 22 22 12 2"/>
      </svg>
      <h3 class="text-lg font-bold">Heading 3</h3>
    </div>
    <p class="text-gray-600">A third card to highlight an additional feature or benefit.</p>
  </div>

  <!-- Card 4 -->
  <div class="bg-white rounded-2xl shadow p-6 flex flex-col items-start">
    <div class="flex items-center mb-3">
      <svg class="w-7 h-7 text-pink-500 mr-3" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
        <path d="M12 2v20M2 12h20" />
      </svg>
      <h3 class="text-lg font-bold">Heading 4</h3>
    </div>
    <p class="text-gray-600">Use this card for another service, product, or key information.</p>
  </div>

  <!-- Card 5 -->
  <div class="bg-white rounded-2xl shadow p-6 flex flex-col items-start">
    <div class="flex items-center mb-3">
      <svg class="w-7 h-7 text-purple-500 mr-3" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
        <ellipse cx="12" cy="12" rx="10" ry="6" />
      </svg>
      <h3 class="text-lg font-bold">Heading 5</h3>
    </div>
    <p class="text-gray-600">Fifth card content goes here—add anything you like.</p>
  </div>

  <!-- Card 6 -->
  <div class="bg-white rounded-2xl shadow p-6 flex flex-col items-start">
    <div class="flex items-center mb-3">
      <svg class="w-7 h-7 text-red-500 mr-3" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
        <path d="M12 2a10 10 0 100 20 10 10 0 000-20z" />
      </svg>
      <h3 class="text-lg font-bold">Heading 6</h3>
    </div>
    <p class="text-gray-600">This is the last card. Share one more point here.</p>
  </div>
</div>

    </div>
   </section>
</template>


<script>
import OurVisionImage from '../../../../public/hg-our-vision.jpg';

export default {
  name: 'Home',
  data() {
    return {
      OurVisionImage
    }
  }
}
</script>



<style scoped>
.font-main {
  font-family: 'M PLUS 1', 'Roboto', Arial, sans-serif;
}

.hero-subtitle {
  font-size: 40px;
  height: 1.5;
}

.hero-title {
  font-size: 200px;
  font-family: Roboto;
  font-weight: 900;
  text-align: center;
  line-height: 1;
  color: rgb(255, 255, 255);
}
.hero-slogan{
  font-size: 16px;
}
.writing-vertical {
  writing-mode: vertical-rl;
  text-orientation: mixed;
}

.text-links {
  position: relative;
  overflow: hidden;
}

.text-links::after {
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

.text-links:hover::after,
.text-links:focus-visible::after {
  transform: scaleX(1);
}

/* our vision */
.our-vision {
  margin-top: 128px;
}

.our-vision-img-container {
  width: 500px;
  height: 375px;
  border-radius: 12px;
  object-fit: cover;
  overflow: hidden;
}
/* our vision */
.hg-strength {
  margin-top: 128px;
}
.hg-strength{
  background-color: #E0E3E6;
  padding-top: 80px;
  padding-bottom: 80px;
}
/* responsive */
@media (min-width: 1024px) and (max-width: 1365px) {
  .hero-title {
    font-size: 104px;
    line-height: 1;
  }
  .hero-subtitle {
  font-size: 24px;
  line-height: 1.5;
  padding-left: 16px;
  }
}
@media (min-width: 1366px) and (max-width: 1679px) {
  .hero-title {
    font-size: 136px;
    line-height: 1;
  }
  .hero-subtitle {
  font-size: 32px;
  padding-left: 56px;
  line-height: 1.5;
  }
  .hero-slogan{
    font-size: 18px;
  }
}
@media (min-width: 1680px) {

  .hero-subtitle {
  font-size: 48px;
  padding-left: 32px;
  line-height: 1.5;
  }
  .hero-slogan{
    font-size: 22px;
  }
}
</style>
