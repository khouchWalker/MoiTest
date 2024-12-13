// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: [
    "@ant-design-vue/nuxt",
    "@nuxtjs/tailwindcss",
    "@nuxt/icon",
    "dayjs-nuxt",
    "nuxt-echarts",
  ],
  dayjs: {
    locales: ["km", "en"],
    defaultLocale: "km",
  },
  echarts: {
    charts: ["BarChart", "PieChart", "MapChart"],
    components: [
      "DatasetComponent",
      "GridComponent",
      "TooltipComponent",
      "ToolboxComponent",
      "LegendComponent",
    ],
    renderer: ["canvas", "svg"],
  },
});
