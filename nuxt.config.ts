// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  nitro: {
    preset: "netlify",
  },
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  app: {
    head: {
      meta: [{ name: "viewport", content: "width=device-width, initial-scale=1" }],
    },
  },
  modules: ["@vueuse/motion/nuxt", "@nuxtjs/tailwindcss", "@nuxt/icon", "@nuxt/image", "@nuxt/ui"],
});
