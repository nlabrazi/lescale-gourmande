<template>
  <nav
    class="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/80 border-b border-gray-200 shadow-sm transition-all">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
      <NuxtLink to="/" class="flex items-center gap-2 hover:opacity-80 transition">
        <img src="@/assets/image/logo.svg" alt="Logo L’escale gourmande" class="h-10 w-auto object-contain" />
        <span class="text-xl font-bold text-gray-800">L’escale Gourmande</span>
      </NuxtLink>

      <div class="flex items-center">
        <div class="desktop-nav-menu items-center space-x-6 text-sm font-medium">
          <span v-for="(link, i) in navLinks" :key="i" class="relative group inline-block">
            <NuxtLink :to="link.to"
              class="text-gray-800 hover:text-yellow-400 transition-colors duration-300 ease-in-out">
              {{ link.label }}
              <span
                class="absolute left-0 -bottom-1 w-0 h-0.5 bg-yellow-400 transition-all duration-300 ease-in-out group-hover:w-full"></span>
            </NuxtLink>
          </span>
        </div>

        <button
          class="mobile-nav-button flex items-center p-2 bg-white/90 rounded shadow border border-gray-300 focus:outline-none transition"
          @click="toggleMenu" aria-label="Menu">
          <FontAwesomeIcon :icon="isOpen ? 'times' : 'bars'" class="text-2xl text-gray-800" />
        </button>
      </div>
    </div>

    <transition name="slide-fade">
      <div v-if="isOpen"
        class="md:hidden absolute top-16 left-0 w-full bg-white/95 backdrop-blur-lg shadow-lg border-b border-gray-200 flex flex-col items-center space-y-4 py-8 z-40">
        <span v-for="(link, i) in navLinks" :key="i" class="relative group inline-block">
          <NuxtLink :to="link.to"
            class="text-lg font-medium text-gray-800 hover:text-yellow-400 transition-colors duration-300 ease-in-out inline-block px-2"
            @click="closeMenu">
            {{ link.label }}
            <span
              class="absolute left-0 -bottom-1 w-0 h-0.5 bg-yellow-400 transition-all duration-300 ease-in-out group-hover:w-full"></span>
          </NuxtLink>
        </span>
      </div>
    </transition>
  </nav>
</template>

<script setup>
import { ref } from "vue";
import { useSiteLinks } from "@/composables/useSiteLinks";

const isOpen = ref(false);
const navLinks = useSiteLinks().filter((link) => link.showInNav);

function toggleMenu() {
  isOpen.value = !isOpen.value;
}
function closeMenu() {
  isOpen.value = false;
}
</script>

<style scoped>
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.25s ease;
}

.slide-fade-enter-from {
  opacity: 0;
  transform: translateY(-16px);
}

.slide-fade-enter-to {
  opacity: 1;
  transform: translateY(0);
}

.slide-fade-leave-from {
  opacity: 1;
  transform: translateY(0);
}

.slide-fade-leave-to {
  opacity: 0;
  transform: translateY(-16px);
}

/* Comportement par défaut (mobile) */
.desktop-nav-menu {
  display: none;
  /* Cache le menu desktop */
}

.mobile-nav-button {
  display: flex;
  /* Affiche le bouton burger */
}

/* Comportement sur les écrans plus grands que 'md' (768px) */
@media (min-width: 768px) {
  .desktop-nav-menu {
    display: flex;
    /* Affiche le menu desktop */
  }

  .mobile-nav-button {
    display: none;
    /* Cache le bouton burger */
  }
}
</style>
