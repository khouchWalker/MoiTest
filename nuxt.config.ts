// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: [
    "@ant-design-vue/nuxt",
    "@nuxtjs/tailwindcss",
    "@nuxt/icon",
    "dayjs-nuxt",
  ],
  dayjs: {
    locales: ["km", "en"],
    defaultLocale: "km",
  },
});