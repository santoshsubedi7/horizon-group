<template>
  <section class="min-h-screen bg-[#E0E3E6] px-4 sm:px-6 md:px-8 lg:px-0 pt-[80px] pb-16 md:pb-24 lg:pb-32">
    <div class="container mx-auto max-w-6xl">
      <!-- Header -->
      <div class="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 class="text-2xl sm:text-[28px] md:text-3xl font-semibold text-[#3A3F44]">OUR STRENGTH</h2>
          <h6 class="text-lg sm:text-[19px] md:text-xl font-semibold text-[#3A3F44] mt-2">ホライゾングループの強み</h6>
      </div>

      <!-- Cards Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-7 lg:gap-8">
        <!-- Card 1 -->
        <div class="bg-white rounded-xl shadow-md p-5 sm:p-6 flex flex-col items-start gap-3 sm:gap-4 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
          <img :src="OurStrengthIcon01" alt="Support Icon" class="w-16 h-16"/>
          <span class="text-lg sm:text-[19px] md:text-xl text-[#3A3F44] font-semibold">外国人職の支援ができる 実績経験に基づくサポート</span>
          <p class="text-sm sm:text-[15px] md:text-base text-gray-600 leading-relaxed">
            弊社の代表をはじめ、スタッフ全員が日本で留学、就職してきた経験と実績に基づく支援。外国人労働者の実情に寄り添ったサポートに力を入れ、充実した就職活動を実現するよう、広くサポートいたします。
          </p>
        </div>

        <!-- Card 2 -->
        <div class="bg-white rounded-xl shadow-md p-5 sm:p-6 flex flex-col items-start gap-3 sm:gap-4 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
         <img :src="OurStrengthIcon02" alt="Consultation Icon" class="w-16 h-16"/>
          <span class="text-lg sm:text-[19px] md:text-xl text-[#3A3F44] font-semibold">各国からの留学に関する相談対応</span>
          <p class="text-sm sm:text-[15px] md:text-base text-gray-600 leading-relaxed">
            ネパール語をはじめ、外国語（ヒンディー語・タガログ語・英語・日本語）に対応できる人材がおります。日本への留学に向けた各国の語学スクールと提携し、留学のサポートを行っております。
          </p>
        </div>

        <!-- Card 3 -->
        <div class="bg-white rounded-xl shadow-md p-5 sm:p-6 flex flex-col items-start gap-3 sm:gap-4 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
          <img :src="OurStrengthIcon03" alt="Consultation Icon" class="w-16 h-16"/>
          <span class="text-lg sm:text-[19px] md:text-xl text-[#3A3F44] font-semibold">求職者と企業、双方に丁寧で迅速なマッチング</span>
          <p class="text-sm sm:text-[15px] md:text-base text-gray-600 leading-relaxed">
            当社は、求職者様への仕事紹介だけでなく、就労前の各種手続きやご相談、さらに就労後のフォローアップに至るまで、一貫して丁寧にサポートいたします。これにより、求職者様と企業様の双方に満足度の高い就職活動および採用活動を実現し、責任を持ってサービスを提供することで、安心感と迅速な対応をお届けいたします。
          </p>
        </div>

        <!-- Card 4 -->
        <div class="bg-white rounded-xl shadow-md p-5 sm:p-6 flex flex-col items-start gap-3 sm:gap-4 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
          <img :src="OurStrengthIcon04" alt="Consultation Icon" class="w-16 h-16"/>
          <span class="text-lg sm:text-[19px] md:text-xl text-[#3A3F44] font-semibold">在留資格・ビザ申請も全面的にサポート</span>
          <p class="text-sm sm:text-[15px] md:text-base text-gray-600 leading-relaxed">
            就労ビザ（技人国／特定技能など）の申請支援や、更新・変更手続きのアドバイスも行える体制が整っており、外国人労働者の採用に慣れていない企業にも安心していただけます。
          </p>
        </div>

        <!-- Card 5 -->
        <div class="bg-white rounded-xl shadow-md p-5 sm:p-6 flex flex-col items-start gap-3 sm:gap-4 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
          <img :src="OurStrengthIcon05" alt="Consultation Icon" class="w-16 h-16"/>
          <span class="text-lg sm:text-[19px] md:text-xl text-[#3A3F44] font-semibold">就労後の生活・文化・日本語のフォロー</span>
          <p class="text-sm sm:text-[15px] md:text-base text-gray-600 leading-relaxed">
            外国人材が安心して働き・暮らせるよう、衣食住に関する。生活面のアドバイスや日本語教育のサポートも行っています。必要に応じて翻訳・通訳支援も対応可能です。
          </p>
        </div>

        <!-- Card 6 -->
        <div class="bg-white rounded-xl shadow-md p-5 sm:p-6 flex flex-col items-start gap-3 sm:gap-4 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
          <img :src="OurStrengthIcon06" alt="Consultation Icon" class="w-16 h-16"/>
          <span class="text-lg sm:text-[19px] md:text-xl text-[#3A3F44] font-semibold">多彩な業界への紹介実績</span>
          <p class="text-sm sm:text-[15px] md:text-base text-gray-600 leading-relaxed">
            製造・サービス業、IT、福祉、流通、その他幅広い業界に対応し、企業様のニーズに合わせた人材提案を行います。
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import OurStrengthIcon01 from '@assets/images/our_strength_icon-01.svg'
import OurStrengthIcon02 from '@assets/images/our_strength_icon-02.svg'
import OurStrengthIcon03 from '@assets/images/our_strength_icon-03.svg'
import OurStrengthIcon04 from '@assets/images/our_strength_icon-04.svg'
import OurStrengthIcon05 from '@assets/images/our_strength_icon-05.svg'
import OurStrengthIcon06 from '@assets/images/our_strength_icon-06.svg'
</script>

<style scoped>
/* Optional: For even smoother scaling you can add these CSS variables */
section {
  --section-pb: 4rem;
}
@media (min-width: 768px) {
  section {
    --section-pb: 6rem;
  }
}
@media (min-width: 1024px) {
  section {
    --section-pb: 8rem;
  }
}
@media (min-width: 768px)and (max-width: 1024px){
  section{
    padding-left: 16px;
    padding-right: 16px;
  }
}
</style>