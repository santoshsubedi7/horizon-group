<template>
  <section class="xl:w-[75%] xl:mx-auto px-4 lg:px6 xl:px-0 py-10">
    <h2 class="text-center font-semibold tracking-tight text-[#0D0F11]">CAREER ACADEMY</h2>
    <h6 class="text-center mb-8 font-semibold">教育業務</h6>
    <div class="max-w-7xl mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      
      <!-- Card -->
      <div v-for="(card, index) in cards" :key="index" 
           class="bg-white rounded-2xl shadow hover:shadow-lg transition-shadow duration-300 overflow-hidden flex flex-col">
        
        <!-- Image -->
        <img :src="card.image" :alt="card.title" 
             class="w-full h-56 object-cover rounded-t-2xl card-img" />
        
        <!-- Content -->
        <div class="flex flex-col flex-grow p-5">
          <h6 class="text-xs font-semibold text-[#96999B] tracking-wide mb-2">{{ card.subheading }}</h6>
          <h5 class="font-bold text-[#3A3F44] mb-6">{{ card.title }}</h5>
          <p class="text-gray-600 flex-grow">{{ card.description }}</p>
          
          <!-- Footer -->
          <div class="flex justify-between items-center mt-4">
            <router-link to="career_academy" class="link text-[#0080FF] text-sm font-medium hover:underline"> 
              詳しくはこちら <span class="text-[#0080FF]"><font-awesome-icon :icon="['fas', 'arrow-right']" />
            </span>
          </router-link>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script>
import careerImg01 from '@assets/images/hg-career-img-01.jpg';
import careerImg02 from '@assets/images/hg-career-img-02.jpg';
import careerImg03 from '@assets/images/hg-career-img-03.jpg';

export default {
  name: "HgCareerAcademy",
  data() {
    return {
      cards: [
        {
          image: careerImg01,
          subheading: "CAREER ACADEMY",
          title: "就職活動支援",
          description: "履歴書・職務経歴書の書き方から面接対策まで、就職活動を成功させるための実践的な指導を行います。"
        },
        {
          image: careerImg02,
          subheading: "CAREER ACADEMY",
          title: "特定技能試験対策",
          description: "介護・外食・製造などの分野での特定技能制度に対応した試験対策講座で合格をサポートします。"
        },
        {
          image: careerImg03,
          subheading: "CAREER ACADEMY",
          title: "個別サポート",
          description: "学生一人ひとりの希望やレベルに応じて個別サポートや進路相談を行っています。"
        }
      ]
    };
  }
};
</script>

<style scoped>
/* Make image top corners round, bottom corners sharp */
.card-img {
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}

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
</style>
