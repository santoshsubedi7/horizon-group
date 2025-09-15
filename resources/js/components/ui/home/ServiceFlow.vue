<template>
  <section class="py-32 bg-gray-100">
    <div class="xl:w-[75%] mx-auto px-4 xl:px-0">
      <!-- Title -->
      <div class="text-center mb-10">
        <h2 class="text-center font-semibold tracking-tight text-[#0D0F11]">SERVICE FLOW</h2>
        <h6 class="text-center mb-3 font-semibold">入社までの流れ</h6>
        <p class="text-center mb-3">採用までの流れ専任スタッフが貴社に最適な採用プランを提案します</p>
      </div>

      <!-- Steps -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-2">
        <div v-for="(step, index) in steps" :key="index"
          class="bg-[#00AEEF] rounded-md p-6 text-center text-white shadow hover:shadow-lg transition-shadow">
          <p class="text-sm mb-1">Step {{ step.number }}</p>
          <h5 class="text-slate-900 font-bold mb-4">{{ step.title }}</h5>
          <div class="w-20 h-20 mx-auto flex items-center justify-center bg-white rounded-full mb-4">
            <img :src="step.icon" alt="" class="text-[#00AEEF] w-16 h-16" />
          </div>
          <p class="text-sm leading-relaxed">
            {{ step.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import serviceFlowIcon01 from '@assets/images/serviceflowicon01.svg';
import serviceFlowIcon02 from '@assets/images/serviceflowicon02.svg';
import serviceFlowIcon03 from '@assets/images/serviceflowicon03.svg';
import serviceFlowIcon04 from '@assets/images/serviceflowicon04.svg';
import serviceFlowIcon05 from '@assets/images/serviceflowicon05.svg';
import serviceFlowIcon06 from '@assets/images/service-flow-icon-06.svg';
import serviceFlowIcon07 from '@assets/images/service-flow-icon-07.svg';



export default {
  name: 'ServiceFlow',

  data() {
    return {
      steps: [
        {
          number: 1,
          title: 'ご契約',
          description: 'サービスや人材についてお気軽にご相談ください。',
          icon: serviceFlowIcon01
        },
        {
          number: 2,
          title: 'ヒアリング',
          description: 'ご希望条件や必要な人材像を丁寧にお伺いします。',
          icon: serviceFlowIcon02
        },
        {
          number: 3,
          title: '人材の推薦',
          description: '条件に合った最適な候補者をご紹介します。',
          icon: serviceFlowIcon03
        },
        {
          number: 4,
          title: '面接',
          description: '候補者との面接を実施いただきます。',
          icon: serviceFlowIcon04
        },
        {
          number: 5,
          title: '内定・成約',
          description: '採用決定後、正式に契約を結びます。',
          icon: serviceFlowIcon05
        },
        {
          number: 6,
          title: '在留資格申請',
          description: '外国人採用の場合、在留資格手続きをサポートします。',
          icon: serviceFlowIcon06
        },
           {
          number: 7,
          title: '入社',
          description: '必要な手続きを終え、就業がスタートします。',
          icon: serviceFlowIcon07
        }
      ]
    }
  }
}
</script>

<style scoped>
/* For extra small devices, make icons smaller */
@media (max-width: 400px) {
  .w-20 {
    width: 4rem;
    height: 4rem;
  }
}
</style>
