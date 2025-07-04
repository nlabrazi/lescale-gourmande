<template>
  <nav
    class="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/80 border-b border-gray-200 shadow-sm transition-all">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
      <NuxtLink to="/" class="flex items-center gap-2 hover:opacity-80 transition">
        <img src="@/assets/image/logo.png" alt="Logo L’escale gourmande" class="h-10 w-auto object-contain" />
        <span class="text-xl font-bold text-gray-800">L’escale Gourmande</span>
      </NuxtLink>

      <div class="flex items-center space-x-6 text-sm font-medium">
        <NuxtLink v-for="(link, i) in links" :key="i" :to="link.to"
          class="relative text-gray-600 hover:text-yellow-500 transition-colors duration-300 ease-in-out"
          @mouseenter="hovered = i" @mouseleave="hovered = null">
          {{ link.label }}
          <span class="absolute left-0 -bottom-1 w-0 h-0.5 bg-yellow-400 transition-all duration-300 ease-in-out"
            :class="{ 'w-full': hovered === i }"></span>
        </NuxtLink>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'

const hovered = ref(null)
const links = useNavLinks()
</script>

<style scoped>
a:hover span {
  width: 100% !important;
}
</style>
