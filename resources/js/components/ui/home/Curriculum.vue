<template>
  <section class="xl:w-[75%] mx-auto px-4 md:px-0 py-10">
    <div class="mx-auto md:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
      
      <!-- Left column -->
      <div class="flex flex-col justify-between">
        <div>
          <h3 class="text-3xl md:text-4xl font-bold text-black">CURRICULUM</h3>
          <h6 class="font-semibold mt-1">カリキュラム</h6>
        </div>
        <div class="hidden xl:block">
          <router-link to="/career_academy" class="link mt-6 font-medium"> 
            <span class="pr-4">詳しくはこちら</span>  <font-awesome-icon :icon="['fas', 'arrow-right']" />
          </router-link>
        </div>
      </div>

      <!-- Right column (curriculum items) -->
      <div class="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div v-for="(item, index) in curriculumItems" :key="index" class="flex gap-4">
          <img :src="item.image" alt="" class="w-20 h-20 object-cover rounded shadow-sm" />
          <div>
            <h5 class="font-semibold text-[#3A3F44]">{{ item.title }}</h5>
            <p class="text-gray-500 text-sm mt-1">{{ item.desc }}</p>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script>
import ghCurriculum01 from '@assets/images/hg-curriculum01.jpg';
import ghCurriculum02 from '@assets/images/hg-Curriculum02.jpg';
import ghCurriculum03 from '@assets/images/hg-curriculum03.jpg';
import ghCurriculum04 from '@assets/images/hg-curriculum04.jpg';
import ghCurriculum05 from '@assets/images/hg-curriculum05.jpg';
import ghCurriculum06 from '@assets/images/hg-curriculum06.jpg';

export default {
  name: "Curriculum",
  data() {
    return {
      curriculumItems: [
        {
          image: ghCurriculum01,
          title: "履歴書・職務経歴書の書き方",
          desc: "日本の企業に響く書類作成のコツを学びます"
        },
        {
          image: ghCurriculum02,
          title: "面接マナー・身だしなみ",
          desc: "面接での話し方や適切な身だしなみを指導します"
        },
        {
          image: ghCurriculum03,
          title: "職場での常識・ビジネスマナー",
          desc: "日本の職場文化とビジネスマナーを理解します"
        },
        {
          image: ghCurriculum04,
          title: "接客業向け会話表現",
          desc: "接客に必要な日本語・英語の会話表現を習得します"
        },
        {
          image: ghCurriculum05,
          title: "日本での生活マナー",
          desc: "日本社会での生活に必要な文化理解を深めます"
        },
        {
          image: ghCurriculum06,
          title: "進路相談・個別指導",
          desc: "個人の目標に合わせたキャリアプランを作成します"
        }
      ]
    };
  }
};
</script>

<style scoped>
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
