// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: ['@nlabrazi/nuxt-layer'],
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  runtimeConfig: {
    health: {
      service: 'lescale-gourmande',
    },
    public: {
      umami: {
        websiteId: 'e645b936-7e7b-4c32-96fe-977fa406323f',
        domains: 'lescale-gourmande.nabster.dev',
      },
      site: {
        name: "L'Escale Gourmande",
        url: 'https://lescale-gourmande.nabster.dev',
      },
    },
  },
  css: ['~/assets/css/main.css'],
  modules: ['@vueuse/motion/nuxt', '@nuxt/icon', '@nuxt/image', '@nuxt/ui'],
})
