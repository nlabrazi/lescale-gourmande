// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  app: {
    head: {
      meta: [{ name: "viewport", content: "width=device-width, initial-scale=1" }],
      script: [
        {
          src: "https://umami.nabster.dev/script.js",
          defer: true,
          "data-website-id": "e645b936-7e7b-4c32-96fe-977fa406323f",
        },
      ],
    },
  },
  modules: ["@vueuse/motion/nuxt", "@nuxtjs/tailwindcss", "@nuxt/icon", "@nuxt/image", "@nuxt/ui"],
});
