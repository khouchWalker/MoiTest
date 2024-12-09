<template>
  <a-row :gutter="[20, 20]">
    <a-col :span="18" :xs="24" :sm="24" :md="24" :lg="24" :xl="18">
      <a-row>
        <a-flex vertical class="gap-1">
          <a-typography-text class="text-[20px] font-[700] text-[#2F2B3DE5]">
            សូមស្វាគមន៍មកកាន់, ផ្ទាំងរបាយការណ៍សង្ខេប
          </a-typography-text>
          <a-typography-text class="text-[17px] font-[300] text-[#2F2B3DB2]">
            កសាងរដ្ឋាភិបាលឌីជីថលដើម្បីលើកកម្ពស់គុណភាពជីវិត
            និងទំនុកចិត្តប្រជាពលរដ្ឋតាមរយៈការបម្រើសេវាសាធារណៈឱ្យកាន់តែល្អប្រសើរ
          </a-typography-text>
        </a-flex>
      </a-row>

      <a-row :gutter="[10, 10]" class="mt-5">
        <a-col
          :span="6"
          :xs="12"
          :sm="12"
          :md="12"
          :lg="6"
          :xl="6"
          v-for="(item, index) in props.menu"
          key="index"
        >
          <a-flex align="center" class="gap-[16px]">
            <a-avatar
              shape="square"
              :size="54"
              class="items-center flex"
              :style="{ backgroundColor: item.color }"
            >
              <Icon :icon="item.icon" class="w-[31px] h-[31px]" />
            </a-avatar>
            <a-flex vertical class="  ">
              <a-typography class="font-[700] text-[15px] text-[#2F2B3DB2]">
                {{ item.title }}
              </a-typography>
              <a-typography class="font-[500] text-[20px] text-[#005C94]">
                {{ item.data }}
              </a-typography>
            </a-flex>
          </a-flex>
        </a-col>
      </a-row>
    </a-col>
    <a-col :span="6" :xs="24" :sm="24" :md="24" :lg="24" :xl="6">
      <a-flex align="center" gap="10" class="w-full">
        <a-divider
          type="vertical"
          style="height: 140px; background-color: #2f2b3d1f"
        />
        <a-flex justify="space-between" align="center" class="w-full">
          <a-flex vertical gap="20">
            <a-typography-text
              class="text-base sm:text-lg font-bold"
              style="color: #0a373c"
              >កាលបរិច្ឆេទបច្ចុប្បន្ន</a-typography-text
            >
            <a-typography-text
              class="text-[15px] sm:text-[21px] font-normal"
              style="color: #0a373c"
              >{{
                dayjs(new Date()).format("dddd DD MMMM YYYY")
              }}</a-typography-text
            >
            <a-typography-text
              class="text-[15px] sm:text-[21px] font-normal"
              style="color: #0a373c"
              >{{ dayjs(new Date()).format("hh:mm") }} PM</a-typography-text
            >
          </a-flex>
          <a-progress
            type="dashboard"
            :steps="30"
            :percent="85"
            :size="180"
            :stroke-color="{
              '0%': '#7367F0 ',
              '100%': '#7367F000',
            }"
            :strokeWidth="14"
          >
            <template #format>
              <a-flex vertical>
                <a-typography-text
                  class="text-[16px] sm:text-[23px] font-normal"
                  >ថ្ងៃ</a-typography-text
                >
                <a-typography-text
                  class="text-[16px] sm:text-[23px] font-medium"
                  >365</a-typography-text
                >
              </a-flex>
            </template>
          </a-progress>
        </a-flex>
      </a-flex>
    </a-col>
  </a-row>
</template>

<script setup lang="ts">
import { Icon } from "@iconify/vue";
const props = defineProps({
  menu: {
    item: {
      title: String,
      data: String,
      icon: String,
      iconColor: String,
      color: String,
    },
    type: Array<{
      title: String;
      data: String;
      icon: String;
      iconColor: String;
      color: String;
    }>,
  },
});
const dayjs = useDayjs();
</script>

<style scoped></style>
