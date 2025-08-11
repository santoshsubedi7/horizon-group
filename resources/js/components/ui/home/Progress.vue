<template>
  <section 
    ref="counterSection" 
    class="w-full bg-white py-12"
  >
    <div class="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
      <div v-for="(item, index) in counters" :key="index" class="flex flex-col items-center">
        <span class="text-6xl font-light text-blue-600">
          {{ displayValues[index] }}<span v-if="item.sign">{{ item.sign }}</span>
        </span>
        <span class="text-sm font-semibold text-[#595D61] mt-2">{{ item.label }}</span>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ProgressCounter",
  data() {
    return {
      counters: [
        { value: 500, sign: "+", label: "卒業生数" },
        { value: 85, sign: "%", label: "就職成功率" },
        { value: 20, sign: "+", label: "対応業種" },
        { value: 15, sign: "", label: "対応言語" },
      ],
      displayValues: [0, 0, 0, 0],
      hasAnimated: false,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.checkIfInView);
    this.checkIfInView();
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.checkIfInView);
  },
  methods: {
    checkIfInView() {
      if (this.hasAnimated) return;

      const section = this.$refs.counterSection;
      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (rect.top < windowHeight && rect.bottom >= 0) {
        this.animateCounters();
        this.hasAnimated = true;
      }
    },
    animateCounters() {
      this.counters.forEach((counter, index) => {
        const startValue = 0;
        const endValue = counter.value;
        const duration = 1500; // ms
        const startTime = performance.now();

        const updateCounter = (now) => {
          const elapsed = now - startTime;
          const progress = Math.min(elapsed / duration, 1);
          const currentValue = Math.floor(progress * (endValue - startValue) + startValue);

          this.displayValues[index] = currentValue; // Vue 3 reactive update

          if (progress < 1) {
            requestAnimationFrame(updateCounter);
          }
        };

        requestAnimationFrame(updateCounter);
      });
    },
  },
};
</script>
