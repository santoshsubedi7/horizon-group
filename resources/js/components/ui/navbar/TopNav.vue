<template>
  <div class="top-bar bg-[#00B1E6] text-white text-sm flex justify-between items-center py-2 px-4 md:px-8 fixed top-0 left-0 w-full z-[1001]">
    <div class="flex justify-between gap-6">
      <span class="hg-email">info@horizongroup.co.jp</span>
      <span class="hidden md:block">03-5497-8734</span>
    </div>
    <div class="flex items-center gap-4">
      <a href="#" aria-label="Facebook" class="hover:opacity-80 hidden md:block"><font-awesome-icon :icon="['fab', 'facebook-f']" /></a>
      <a href="#" aria-label="TikTok" class="hover:opacity-80 hidden md:block"><font-awesome-icon :icon="['fab', 'tiktok']" /></a>
      <a href="#" aria-label="Twitter/X" class="hover:opacity-80 hidden md:block"><font-awesome-icon :icon="['fab', 'x-twitter']" /></a>
      <button class="px-2 md:pr-0 text-white text-right hover:underline whitespace-nowrap shrink-0" @click="toggleLanguage">
        {{ languageLabel }}
        <!-- <font-awesome-icon :icon="['fas', 'angle-down']" /> -->
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const languages = [
  { code: 'eng', label: 'Eng' },
  { code: 'ja', label: '日本語' }
];
const currentLang = ref('ja');
const toggleLanguage = () => {
  currentLang.value = currentLang.value === 'eng' ? 'ja' : 'eng';
};
const languageLabel = computed(() => {
  return languages.find(lang => lang.code === currentLang.value)?.label || 'Eng';
});
</script>

<style>
@media (max-width: 767px) {


}
</style>
