<template>
  <section class="w-[90%] md:w-[80%] mx-auto py-10">
    <div class="text-center mb-6">
      <h1 class="text-xl font-bold">MEET OUR TEAM</h1>
      <p class="text-sm text-gray-500">スタッフご紹介</p>
    </div>

    <div v-for="(member, index) in team" :key="index" class="mb-6">
      <div class="bg-white shadow-md rounded-lg p-6 text-center">
        <!-- Profile Image -->
        <div class="w-24 h-24 mx-auto rounded-full bg-gray-200 mb-4">
          <img
            v-if="member.image"
            :src="member.image"
            :alt="member.nameEn"
            class="w-full h-full rounded-full object-cover"
          />
        </div>
        <!-- Role -->
        <p class="text-xs text-gray-500 mb-1">{{ member.role }}</p>
        <!-- Name -->
        <h2 class="font-bold text-lg">{{ member.nameEn }}</h2>
        <p class="text-sm text-gray-500">{{ member.nameJp }}</p>
        <!-- Description -->
        <p class="text-sm mt-3 leading-relaxed">{{ member.description }}</p>
      </div>
    </div>
  </section>
</template>

<script>
import staffProfile01 from '../../../../assets/images/staff-profile01.jpg';
import staffProfile02 from '../../../../assets/images/staff-profile02.jpg';

export default {
  name: "MeetOurTeamMobile",
  data() {
    return {
      team: [
        {
          nameEn: "Dangi Tilak",
          nameJp: "ダンギ・ティラック",
          role: "代表取締役/COO",
          description:
            "それは、ご本人や企業様の期待があれば、国で管理することを可能にする画期的な雇用システムのことです。ご本人や企業様の期待があれば、国で管理することを可能にする画期的な雇用システムのことです。",
          image: staffProfile01,
        },
        {
          nameEn: "Santosh Subedi",
          nameJp: "サントシュ・スベディ",
          role: "取締役/COO",
          description:
            "それは、ご本人や企業様の期待があれば、国で管理することを可能にする画期的な雇用システムのことです。ご本人や企業様の期待があれば、国で管理することを可能にする画期的な雇用システムのことです。",
          image: staffProfile01,
        },
        {
          nameEn: "Chynna Marie",
          nameJp: "チャイナ・マリー",
          role: "リクルーティングアドバイザー",
          description:
            "それは、ご本人や企業様の期待があれば、国で管理することを可能にする画期的な雇用システムのことです。ご本人や企業様の期待があれば、国で管理することを可能にする画期的な雇用システムのことです。",
          image: staffProfile02
        }
      ]
    };
  }
};
</script>
