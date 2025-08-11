<template>
  <section class="flex flex-col md:flex-row justify-center items-center min-h-[60vh] w-[95%] max-w-6xl mx-auto my-12 rounded-2xl overflow-hidden">
    <!-- Left: Image -->
    <div class="w-full md:w-1/2 flex justify-center items-center p-4 md:p-8">
      <img :src="OurVisionImg" alt="Our Vision"
        class="object-cover rounded-xl w-full h-auto shadow-md"
      />
    </div>
    <!-- Right: Text -->
    <div class="w-full md:w-1/2 px-5 md:px-12 py-8 flex flex-col justify-center">
      <h2 class="text-3xl md:text-4xl font-bold mb-2 text-[#0D0F11] sec-title">OUR VISION</h2>
      <h6 class="text-base md:text-lg font-semibold mb-8 text-[#00B1E6] ">私たちのビジョン</h6>
      <p class="text-sm md:text-base mb-3 leading-relaxed">
        HORIZON GROUPは、世界を目指す優秀な外国人材と、グローバルな成長を志す日本企業を結ぶ、信頼の架け橋となることを目指しています。
      </p>
      <p class="text-sm md:text-base mb-8 leading-relaxed">
        私たちチームメンバーは全員が日本での留学・就労経験があり、その経験と共感を活かし、候補者様と企業様の双方に心からのサポートを提供いたします。
      </p>
      <div class="flex justify-end">
        <a href="#" class="link text-[#0080FF] text-right hover:!text-[#00B1E6]">
          私たちについて <font-awesome-icon :icon="['fas', 'arrow-right']" />
        </a>
      </div>
    </div>
  </section>
</template>

<script>
import OurVisionImg from '../../../../assets/images/our_vision.jpg';

export default{
    data (){
        return{
            OurVisionImg
        }
    }
}
</script>

<style>
.link {
  position: relative;
  color: #0080FF;
  font-weight: 400;
  text-decoration: none; /* Remove default underline */
}

.link::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 50%;                
  transform: translateX(-50%) scaleX(0); 
  transform-origin: center;   
  width: 100%;
  height: 1px;
  background-color: #00B1E6; 
  transition: transform 0.3s ease-in-out;
}

.link:hover::after {
  transform: translateX(-50%) scaleX(1);
}

/* Responsive */
@media (min-width: 768px) and (max-width: 1024px) {
  h2{
    font-size: 32px !important;
  }
}
</style>
