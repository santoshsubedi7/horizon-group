<template>
  <section class="md:w-[75%] mx-auto px-6 md:px-0 pg-title">
    <div>
      <h1 class="text-3xl md:text-5xl pb-3 md:pb-4 font-semibold">BLOGS</h1>
      <h5 class="font-semibold text-[#96999B] text-sm md:text-base">ブログ一覧</h5>
    </div>
  </section>

  <hr class="border-gray-300 my-4" />

  <div class="w-[92%] md:w-[75%] mx-auto">
    <Breadcrumbs :items="breadcrumbItems" />
  </div>

  <section class="w-[92%] md:w-[75%] mx-auto my-12 md:my-36 space-y-3 md:space-y-4">
    <a
      v-for="post in sortedPosts"
      :key="post.id"
      :href="post.href"
      class="group block rounded-xl bg-sky-50 p-3 sm:p-4 hover:bg-sky-100 transition ring-1 ring-transparent focus:outline-none focus:ring-2 focus:ring-sky-400"
    >
      <div class="flex flex-col md:flex-row md:items-center gap-3 sm:gap-4 md:gap-6">
        <!-- Thumb placeholder with fixed aspect ratio -->
        <div class="w-full md:w-52">
          <div class="aspect-[16/9] md:aspect-auto md:h-28 w-full bg-gray-200 rounded-md"></div>
        </div>

        <!-- Body -->
        <div class="flex-1 min-w-0">
          <div class="flex items-center gap-2 sm:gap-3 text-[11px] sm:text-xs text-gray-500">
            <span>{{ formatDate(post.date) }}</span>
            <span class="inline-flex items-center rounded bg-gray-800 text-white px-2 py-0.5 text-[10px]">
              お知らせ
            </span>
          </div>

          <h5 class="mt-1.5 sm:mt-2 text-gray-900 font-semibold truncate text-base sm:text-lg">
            {{ post.title }}
          </h5>

          <p class="mt-1.5 sm:mt-2 text-sm sm:text-[15px] text-gray-600">
            {{ post.excerpt }}
          </p>
        </div>

        <!-- Arrow -->
        <div class="mt-2 md:mt-0 shrink-0 self-end md:self-auto">
          <div
            class="w-8 h-8 md:w-9 md:h-9 rounded-full bg-sky-500 text-white flex items-center justify-center md:group-hover:translate-x-0.5 transition"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
              <path
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 11-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>
    </a>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import Breadcrumbs from '../ui/breadcrumbs/Breadcrumbs.vue'

// Breadcrumbs
const breadcrumbItems = [
  { label: 'ホーム', to: '/' },
  { label: 'ニュース', to: '/news_list' },
]

// Sample posts (link to '#' for now)
const posts = [
  {
    id: 1,
    title: '小さな会社でも外国人を採用',
    excerpt:
      '採用人数に制限が出る場合もございますが、ビザ取得も問題なく対応可能です。詳しくは弊社までお気軽にご相談ください。',
    date: new Date('2025-07-27'),
    href: '#',
  },
  {
    id: 2,
    title: '在留資格の更新サポート',
    excerpt: '在留カードの更新や各種手続きを丁寧にサポートします。スケジュール管理もお任せください。',
    date: new Date('2025-06-15'),
    href: '#',
  },
  {
    id: 3,
    title: '採用セミナー開催レポート',
    excerpt: '多数の企業様にご参加いただき、最新の採用トレンドと事例を紹介しました。',
    date: new Date('2025-05-20'),
    href: '#',
  },
]

// Newest first
const sortedPosts = computed(() => [...posts].sort((a, b) => b.date - a.date))

// Format like 2025.07.27
function formatDate(d) {
  const y = d.getFullYear()
  const m = String(d.getMonth() + 1).padStart(2, '0')
  const day = String(d.getDate()).padStart(2, '0')
  return `${y}.${m}.${day}`
}
</script>
