<template>
  <nav class="flex text-sm my-4" aria-label="Breadcrumb">
    <p class="mr-2"> <font-awesome-icon :icon="['fas','house']" /></p>
    <ol class="inline-flex items-center space-x-1 md:space-x-3">
      <li v-for="(crumb, idx) in items" :key="idx" class="inline-flex items-center">
        <template v-if="idx !== items.length - 1">
          <router-link
            :to="crumb.to"
            class="text-gray-500 hover:text-blue-600 transition-colors duration-150"
          >
            {{ crumb.label }}
          </router-link>
          <svg class="mx-2 w-3 h-3 text-gray-400" fill="none" stroke="currentColor" stroke-width="2"
               viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"/>
          </svg>
        </template>
        <template v-else>
          <span class="border-b border-[#00B1E6]"aria-current="page">{{ crumb.label }}</span>
        </template>
      </li>
    </ol>
  </nav>
</template>

<script setup>
defineProps({
  items: {
    type: Array,
    required: true,
    // Each item: { label: String, to: String (optional for last item) }
  }
});
</script>