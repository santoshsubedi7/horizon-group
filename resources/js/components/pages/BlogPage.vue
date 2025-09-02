<template>
        <section class="md:w-[75%] mx-auto px-6 md:px-0 pg-title">
        <div class="">
            <h1 class="text-5xl pb-4 font-semibold">BLOGS</h1>
            <h5 class="font-semibold text-[#96999B]">ブログ</h5>
        </div>
    </section>
        <hr class="border-gray-300 my-4">
    <div class="w-[75%] mx-auto">
        <Breadcrumbs :items="breadcrumbItems" />
    </div>

<section class="w-full bg-white">
    <div class="mx-auto max-w-5xl px-4 md:px-6 py-8 md:py-12">
      <!-- meta row -->
      <div class="flex items-center gap-3 text-xs md:text-sm">
        <span
          class="inline-flex items-center bg-[#0D0F11] px-2 py-0.5 text-white"
        >
          {{ badge }}
        </span>
        <time class="text-gray-500">{{ date }}</time>
      </div>

      <!-- title -->
      <h3
        class="mt-3 text-lg md:text-xl font-semibold tracking-tight text-gray-900"
      >
        {{ title }}
      </h3>

      <hr class="mt-3 border-gray-200" />

      <!-- hero / media block -->
      <div
        class="mt-5 rounded-lg bg-gray-200/90 w-full h-52 md:h-80"
        aria-label="placeholder image"
      ></div>

      <!-- body -->
      <p class="mt-4 text-xs md:text-sm leading-relaxed text-gray-600">
        {{ body }}
      </p>

      <!-- back link -->
      <div class="mt-10 flex justify-center">
        <a
          :href="backHref"
          class="inline-flex items-center gap-2 text-sm text-sky-600 hover:underline"
        >
          <svg
            class="size-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.8"
            stroke-linecap="round"
            stroke-linejoin="round"
            aria-hidden="true"
          >
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 8 8 12 12 16" />
            <line x1="16" y1="12" x2="8" y2="12" />
          </svg>
          一覧へ戻る
        </a>
      </div>
    </div>
  </section>

</template>

<script setup>

import Breadcrumbs from '../ui/breadcrumbs/Breadcrumbs.vue';
// Breadcrumb items
const breadcrumbItems = [
    { label: 'ホーム', to: '/' },
    { label: 'ブログ', to: '/blog' }
];

defineProps({
  badge: { type: String, default: "お知らせ" },
  date: { type: String, default: "2025.07.27" },
  title: { type: String, default: "小さな会社でも外国人を採用" },
  body: {
    type: String,
    default:
      "採用人数に制限がある場合もございますが、ビザ取得や面談など対応可能です。詳しくご希望はぜひお気軽にご相談ください。",
  },
  backHref: { type: String, default: "#" },
});
</script>