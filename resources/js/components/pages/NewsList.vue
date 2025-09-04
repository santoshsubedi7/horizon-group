<!-- src/components/BlogList.vue -->
<template>
  <div class="space-y-4">
    <a
      v-for="post in sortedPosts"
      :key="post.id"
      :href="post.href"
      class="block rounded-xl bg-sky-50 p-4 hover:bg-sky-100 transition"
    >
      <div class="flex items-center gap-6">
        <!-- Thumb placeholder -->
        <div class="w-52 h-28 bg-gray-200 rounded-md shrink-0" />

        <!-- Body -->
        <div class="flex-1 min-w-0">
          <div class="flex items-center gap-3 text-xs text-gray-500">
            <span>{{ formatDate(post.date) }}</span>
            <span class="inline-flex items-center rounded bg-gray-800 text-white px-2 py-0.5 text-[10px]">
              お知らせ
            </span>
          </div>

          <h3 class="mt-2 text-gray-900 font-semibold truncate">
            {{ post.title }}
          </h3>

          <p class="mt-2 text-sm text-gray-600">
            {{ post.excerpt }}
          </p>
        </div>

        <!-- Arrow -->
        <div class="shrink-0">
          <div class="w-9 h-9 rounded-full bg-sky-500 text-white flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 11-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd" />
            </svg>
          </div>
        </div>
      </div>
    </a>
  </div>
</template>

<script setup>
import { computed } from "vue";

/** 3 templates (sample posts). Link to '#' for now. */
const posts = [
  {
    id: 1,
    title: "小さな会社でも外国人を採用",
    excerpt:
      "採用人数に制限が出る場合もございますが、ビザ取得も問題なく対応可能です。詳しくは弊社までお気軽にご相談ください。",
    date: new Date("2025-07-27"),
    href: "#",
  },
  {
    id: 2,
    title: "在留資格の更新サポート",
    excerpt:
      "在留カードの更新や各種手続きを丁寧にサポートします。スケジュール管理もお任せください。",
    date: new Date("2025-06-15"),
    href: "#",
  },
  {
    id: 3,
    title: "採用セミナー開催レポート",
    excerpt:
      "多数の企業様にご参加いただき、最新の採用トレンドと事例を紹介しました。",
    date: new Date("2025-05-20"),
    href: "#",
  },
];

/** Newest first */
const sortedPosts = computed(() => [...posts].sort((a, b) => b.date - a.date));

/** Format like 2025.07.27 */
function formatDate(d) {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}.${m}.${day}`;
}
</script>
