<template>
  <a-flex vertical>
    <DashboardFillter />
    <DashboardSummaryReport :menu="item" class="py-[20px] px-[20px]" />
    <D/>
  </a-flex>
</template>

<script setup lang="ts">
import { Icon } from "@iconify/vue";
definePageMeta({
  layout: "dashboard",
});
const item = ref([
  {
    title: "ចំនួនសេវាបានស្នើសុំសរុប",
    icon: "iconamoon:news-thin",
    color: "#7367F029",
    data: "1,342,000",
    iconColor: "#2F5B77",
  },
  {
    title: "ចំនួនសេវាស្នើសុំអនឡាញ",
    icon: "icon-park-outline:earth",
    color: "#00BAD129",
    data: "1,342M",
    iconColor: "#2F5B77",
  },
  {
    title: "ចំនួនសេវាស្នើសុំផ្ទាល់",
    icon: "fluent:building-bank-48-regular",
    color: "#FF9F4329",
    data: "1,342,000",
    iconColor: "#2F5B77",
  },
  {
    title: "បញ្ជរបេឡា",
    icon: "tabler:report-analytics",
    color: "#0A373CB2",
    data: "1,342,000",
    iconColor: "#FFFFFF",
  },
]);
interface dataEntry {
  key: number;
  name: string;
  total: number;
  percentage: number;
}
const data = ref<dataEntry[]>([
  { key: 1, name: "ខេត្តបាត់ដំបង", total: 10, percentage: 0 },
  { key: 2, name: "ខេត្តកំពង់ចាម", total: 10, percentage: 0 },
  { key: 3, name: "ខេត្តកំពង់ឆ្នាំង", total: 20, percentage: 0 },
  { key: 4, name: "ខេត្តព្រះសីហនុ", total: 60, percentage: 0 },
]);
async function calculatePercentage() {
  const sum = data.value.reduce((acc, item) => acc + item.total, 0);

  data.value.forEach((item) => {
    item.percentage = sum ? (item.total / sum) * 100 : 0;
  });
}

await calculatePercentage();
</script>

<style scoped></style>
