<template>
  <section class="py-32 bg-gray-100">
    <div class="md:w-[75%] mx-auto px-4">
      <!-- Title -->
      <div class="text-center mb-10">
        <h2 class="text-center font-semibold tracking-tight text-[#0D0F11]">SERVICE FLOW</h2>
        <h6 class="text-center mb-3 font-semibold">サービスの流れ</h6>
      </div>

      <!-- Steps -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        <div
          v-for="(step, index) in steps"
          :key="index"
          class="bg-[#00AEEF] rounded-md p-6 text-center text-white shadow hover:shadow-lg transition-shadow"
        >
          <p class="text-sm mb-1">Step {{ step.number }}</p>
          <h5 class="text-slate-900 font-bold mb-4">{{ step.title }}</h5>
          <div
            class="w-20 h-20 mx-auto flex items-center justify-center bg-white rounded-full mb-4"
          >
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



export default {
  name: 'ServiceFlow',

  data() {
    return {
      steps: [
        {
          number: 1,
          title: '見出し位置',
          description: '日本社会での生活に必要な文化理解。',
          icon: serviceFlowIcon01
        },
        {
          number: 2,
          title: '見出し位置',
          description: '日本社会での生活に必要な文化理解。',
          icon: serviceFlowIcon02
        },
        {
          number: 3,
          title: '見出し位置',
          description: '日本社会での生活に必要な文化理解。',
          icon: serviceFlowIcon03
        },
        {
          number: 4,
          title: '見出し位置',
          description: '日本社会での生活に必要な文化理解。',
          icon: serviceFlowIcon04
        },
        {
          number: 4,
          title: '見出し位置',
          description: '日本社会での生活に必要な文化理解。',
          icon: serviceFlowIcon05
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
