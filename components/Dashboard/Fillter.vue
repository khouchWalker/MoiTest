<template>
  <a-card class="p-[20px] gap-[10px]" :body-style="{ padding: 0 }">
    <a-row class="justify-between">
      <a-col>
        <a-row class="gap-[10px]">
          <a-flex class="gap-[5px] items-center">
            <img
              src="/assets/icons/Group (1).png"
              alt=""
              class="h-[25px] w-[25px]"
            />

            <a-typography class="text-[24px] text-[ #333333] font-[700px]"
              >សេវាសាធារណៈឌីជីថល</a-typography
            >
          </a-flex>
          <a-flex
            class="py-[5px] px-[20px] gap-[10px] bg-[#8888881A] rounded-r-[50px] rounded-l-[50px]"
          >
            <img
              src="/assets/icons/Rectangle (6).png"
              alt=""
              class="h-[25px] w-[25px]"
            />
            <a-typography class="text-[20px] text-[ #333333] font-[300px]">
              សេវាច្រកចេញចូលតែមួយរាជធានី-ខេត្ត
            </a-typography>
          </a-flex>
        </a-row>
      </a-col>
      <a-col>
        <a-row>
          <a-flex
            class="gap-[10px] xl:justify-end justify-cneter flex"
            align="center"
            gap="5"
          >
            <Icon
              icon="ant-design:calendar-outlined"
              width="24"
              height="24"
              style="color: #0a373c"
            />
            <a-typography-text
              class="text-[24px] text-[#0A373C] font-[700px] pt-1"
              >សេវាសាធារណៈឌីជីថល</a-typography-text
            >
          </a-flex>
          <a-range-picker
            class="rounded-r-[50px] rounded-l-[50px] border border-gray-300"
            v-model:value="value1"
            :placeholder="['ថ្ងៃចាប់ផ្ដើម', 'ថ្ងៃបញ្ចប់']"
          />
        </a-row>
      </a-col>
    </a-row>
  </a-card>
</template>

<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { ref } from "vue";
import type { Dayjs } from "dayjs";
type RangeValue = [Dayjs, Dayjs];
const value1 = ref<RangeValue>();

const dateRange$ =
  useState<[string | undefined, string | undefined]>("dateRange");

const rangeDateChanged = async (date: [Dayjs, Dayjs]) => {
  if (date?.length === 2) {
    dateRange$.value = [
      date[0].format("YYYY-MM-DD"),
      date[1].format("YYYY-MM-DD"),
    ];
  } else {
    dateRange$.value = [undefined, undefined];
  }
};
</script>

<style scoped></style>
