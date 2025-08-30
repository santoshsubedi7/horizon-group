<template>
  <section class="w-[50%] mx-auto py-10">
    <!-- Section Title -->
    <div class="text-center mb-12">
      <h1 class="text-2xl font-bold">Meet Our Team</h1>
      <p class="text-sm text-gray-500">スタッフご紹介</p>
    </div>

    <!-- Team Members -->
    <div
      v-for="(member, index) in team"
      :key="index"
      class="flex flex-col md:flex-row items-center gap-6 mb-10 last:mb-0 mt-32"
      :class="index % 2 !== 0 ? 'md:flex-row-reverse' : ''"
    >
      <!-- Profile Image -->
      <div class="w-50 h-50 bg-gray-200 flex-shrink-0 rounded">
        <img
          v-if="member.image"
          :src="member.image"
          :alt="member.nameEn"
          class="w-full h-full object-cover rounded"
        />
      </div>

      <!-- Profile Info -->
      <div class="text-center md:text-left md:max-w-lg">
        <span class="text-sm font-semibold">{{ member.role }}</span>
        <h3 class="font-bold text-lg flex flex-col">
          {{ member.nameEn }}
        </h3>
        <p class="text-sm font-semibold">{{ member.nameJp }}</p>
        <p class="text-sm mt-2 leading-relaxed">{{ member.description }}</p>
      </div>
    </div>
  </section>
</template>

<script>
import staffProfile01 from '@assets/images/staff-profile01.jpg';
import staffProfile02 from '@assets/images/staff-profile02.jpg';

export default {
  name: "StaffProfilePc",
  data() {
    return {
      team: [
        {
          nameEn: "Dangi Tilak",
          nameJp: "ダンギ・ティラック",
          role: "代表取締役/CEO",
          description:
            "それは、ご本人や企業様の期待があれば、国で管理することを可能にする画期的な雇用システムのことです。",
          image: staffProfile01,
        },
        {
          nameEn: "Santosh",
          nameJp: "サントシュ",
          role: "取締役/COO",
          description:
            "それは、ご本人や企業様の期待があれば、国で管理することを可能にする画期的な雇用システムのことです。",
          image: staffProfile01,
        },
        {
          nameEn: "Chynna Marie",
          nameJp: "チャイナ・マリー",
          role: "リクルーティングアドバイザー/Recruiting Advisor",
          description:
            "それは、ご本人や企業様の期待があれば、国で管理することを可能にする画期的な雇用システムのことです。",
          image: staffProfile02,
        },
        {
          nameEn: "中島 由香",
          nameJp: "Nakajima Yuka",
          role: "リクルーティングアドバイザー/Recruiting Advisor",
          description:
            "それは、ご本人や企業様の期待があれば、国で管理することを可能にする画期的な雇用システムのことです。",
          image: staffProfile02,
        },
        {
          nameEn: "古山 綾子",
          nameJp: "Furuyama Ayako",
          role: "リクルーティングアドバイザー/Recruiting Advisor",
          description:
            "それは、ご本人や企業様の期待があれば、国で管理することを可能にする画期的な雇用システムのことです。",
          image: staffProfile01,
        }
      ]
    };
  }
};
</script>
