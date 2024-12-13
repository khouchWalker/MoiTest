<template>
  <a-flex vertical>
    <DashboardFillter />
    <DashboardSummaryReport :menu="item" class="py-[20px] px-[20px]" />
    <div class="py-[20px] px-[20px]">
      <DashboardAdministratorReportFromCNP />
    </div>
    <div class="py-[20px] px-[20px]">
      <DashboardAdministratorReportBySector :menu="data" />
    </div>
  </a-flex>
</template>

<script setup lang="ts">
import { Icon } from "@iconify/vue";
definePageMeta({
  layout: "dashboard",
});
const datas = ref([
  {
    name: "ខេត្តបាត់ដំបង",
    total: 10,
    percentage: 0,
  },
]);

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
const stringToColour = (str: string) => {
  let hash = 0;
  str.split("").forEach((char) => {
    hash = char.charCodeAt(0) + ((hash << 5) - hash);
  });
  let colour = "#";
  for (let i = 0; i < 3; i++) {
    const value = (hash >> (i * 8)) & 0xff;
    colour += value.toString(16).padStart(2, "0");
  }
  return colour;
};

const data = reactive<{ title: string; color: string; data: string }[]>([
  {
    title: "ការងារនីត្យានុកូលកម",
    color: "",
    data: "2393 សេវា",
  },
  {
    title: "វិស័យបរិស្ថាន",
    color: "",
    data: "2393 សេវា",
  },
  {
    title: "វិស័យឧស្សាហកម្ម និងសិប្បកម្ម",
    color: "",
    data: "2393 សេវា",
  },
  {
    title: "វិស័យសុខាភិបាល",
    color: "",
    data: "2393 សេវា",
  },
  {
    title: "ការងាររដ្ឋបាល",
    color: "",
    data: "2393 សេវា",
  },
  {
    title: "វិស័យពាណិជ្ជកម្ម",
    color: "",
    data: "2393 សេវា",
  },
  {
    title: "វិស័យរ៉ែ និងថាមពល",
    color: "",
    data: "2393 សេវា",
  },
  {
    title: "វិស័យសាធារណការ និងដឹកជញ្ជូន",
    color: "",
    data: "2393 សេវា",
  },
  {
    title: "វិស័យរៀបចំដែនដី នគរូបនីយកម្ម និងសំណង់",
    color: "",
    data: "2393 សេវា",
  },
  {
    title: "វិស័យវប្បធម៌ និងវិចិត្រសិល្បះ",
    color: "",
    data: "2393 សេវា",
  },
  {
    title: "វិស័យកសិកម្ម រុក្ខាប្រម៉ាញ់ និងនេសាទ",
    color: "",
    data: "2393 សេវា",
  },
  {
    title: "វិស័យព័ត៌មាន",
    color: "",
    data: "2393 សេវា",
  },
  {
    title: "វិស័យការងារ បណ្តុះបណ្តាល និងវិជ្ជាជីវៈ",
    color: "",
    data: "2393 សេវា",
  },
  {
    title: "វិស័យទេសចរណ៍",
    color: "",
    data: "2393 សេវា",
  },
]);
data.forEach((item) => {
  item.color = stringToColour(item.color);
});
</script>

<style scoped></style>
