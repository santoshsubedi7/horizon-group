<template>
  <section class="max-w-3xl mx-auto py-12 px-6 lg:px-0">
    <!-- Title -->
    <div class="text-center mb-10">
      <h2 class="text-center font-semibold tracking-tight text-[#0D0F11]">FAQ</h2>
      <h6 class="text-center mb-3 font-semibold">よくあるご質問</h6>
    </div>

    <!-- FAQ List -->
    <div v-for="(item, index) in faqs" :key="index" class="border-b border-gray-200">
      <!-- Question -->
      <button
        @click="toggle(index)"
        class="w-full flex justify-between items-center py-4 text-left focus:outline-none"
      >
        <span class="font-medium text-[#3A3F44]">
          Q. {{ item.question }}
        </span>

        <!-- Arrow -->
        <svg
          :class="[
            'w-5 h-5 transform transition-transform duration-300',
            openIndex === index ? 'rotate-180' : 'rotate-0'
          ]"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          viewBox="0 0 24 24"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      <!-- Answer -->
      <div
        v-show="openIndex === index"
        class="pb-4 text-gray-600 text-sm leading-relaxed"
      >
        {{ item.answer }}
      </div>
    </div>

    <!-- View All Link -->
    <div class="flex justify-center mt-8">
      <router-link to="/faq"  class="link text-[#0080FF] hover:!text-[#00B1E6]">
        すべてを見る <span class="pl-3"><font-awesome-icon :icon="['fas', 'arrow-right']" /></span>
      </router-link>
      <!-- <a href="#" class="link text-[#0080FF] hover:!text-[#00B1E6]">
        すべてを見る <span class="pl-3"><font-awesome-icon :icon="['fas', 'arrow-right']" /></span>
      </a> -->
      
    </div>
  </section>
</template>

<script>
export default {
  name: "Faq",
  data() {
    return {
      openIndex: null,
      faqs: [
        {
          question: "小さな会社でも外国人を採用できますか？",
          answer:
            "はい、可能です。採用人数に制限がある場合もございますが、ビザ取得も問題なく対応可能です。詳しくは弊社までお気軽にご相談ください。"
        },
        {
          question: "対象エリアはどこですか？",
          answer: "全国対応可能です。一部地域では制限がある場合がございます。"
        },
        {
          question: "外国人採用にあたって、賃金や保険はどうすればよいですか？",
          answer: "法令に基づいた賃金や保険制度を整備する必要があります。"
        },
        {
          question: "入社までの期間はどれくらいですか？",
          answer: "通常は1〜3ヶ月程度ですが、状況によって異なります。"
        },
        {
          question: "コミュニケーション面が不安です。",
          answer: "言語サポートや文化研修を通して不安を軽減できます。"
        }
      ]
    };
  },
  methods: {
    toggle(index) {
      this.openIndex = this.openIndex === index ? null : index;
    }
  }
};
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
</style>
