<template>
  <footer class="bg-gray-900 text-white py-16 mt-24">
    <div class="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
      <!-- Colonne 1 : Nom / Logo -->
      <div>
        <h3 class="text-2xl font-bold mb-4">L’escale gourmande</h3>
        <p class="text-gray-300 text-sm">
          Traiteur pour particuliers et entreprises. Des prestations sur mesure pour vos événements culinaires.
        </p>
      </div>
      <!-- Colonne 2 : Liens -->
      <div>
        <h4 class="text-lg font-semibold mb-4">Navigation</h4>
        <ul class="space-y-2 text-sm">
          <li v-for="(link, i) in footerLinks" :key="i">
            <span class="relative group inline-block">
              <NuxtLink v-if="link.isNuxtLink" :to="link.to"
                class="text-gray-300 hover:text-yellow-400 transition-colors duration-300 ease-in-out">
                {{ link.label }}
                <span
                  class="absolute left-0 -bottom-1 w-0 h-0.5 bg-yellow-400 transition-all duration-300 ease-in-out group-hover:w-full"></span>
              </NuxtLink>
              <a v-else :href="link.href" :target="link.target" :rel="link.rel"
                class="text-gray-300 hover:text-yellow-400 transition-colors duration-300 ease-in-out">
                {{ link.label }}
                <span
                  class="absolute left-0 -bottom-1 w-0 h-0.5 bg-yellow-400 transition-all duration-300 ease-in-out group-hover:w-full"></span>
              </a>
            </span>
          </li>
        </ul>

      </div>
      <!-- Colonne 3 : Contact (identique à avant) -->
      <div>
        <h4 class="text-lg font-semibold mb-4">Contact</h4>
        <ul class="text-sm space-y-2 text-gray-300">
          <li class="flex items-center">
            <FontAwesomeIcon icon="envelope" class="mr-2" />
            <a href="mailto:contact@lescalegourmande.fr" class="hover:text-yellow-400">contact@lescalegourmande.fr</a>
          </li>
          <li class="flex items-center">
            <FontAwesomeIcon icon="phone" class="mr-2" />
            <a href="tel:+33123456789" class="hover:text-yellow-400">01 23 45 67 89</a>
          </li>
          <!-- Réseaux sociaux -->
          <li class="flex items-center gap-4 mt-4">
            <a href="#" class="hover:text-yellow-400">
              <FontAwesomeIcon :icon="['fab', 'facebook']" />
            </a>
            <a href="#" class="hover:text-yellow-400">
              <FontAwesomeIcon :icon="['fab', 'instagram']" />
            </a>
            <a href="#" class="hover:text-yellow-400">
              <FontAwesomeIcon :icon="['fab', 'twitter']" />
            </a>
          </li>
        </ul>
      </div>
    </div>
    <!-- Footer bas -->
    <div class="text-center text-xs text-gray-500 mt-2 space-x-3">
      &copy; {{ new Date().getFullYear() }} L’escale gourmande. Tous droits réservés.
      <NuxtLink to="/legal-mentions" class="hover:text-yellow-400">Mentions légales</NuxtLink>
      <span>|</span>
      <NuxtLink to="/rgpd-page" class="hover:text-yellow-400">RGPD</NuxtLink>
      <span>|</span>
      <NuxtLink to="/cgv-page" class="hover:text-yellow-400">CGV</NuxtLink>
    </div>
  </footer>
</template>

<script setup>
import { useSiteLinks } from '@/composables/useSiteLinks'
const footerLinks = useSiteLinks().filter(l => l.showInFooter)
</script>
