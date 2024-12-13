<template>
  <a-card>
    <a-row :gutter="[20, 20]">
      <a-col :span="22" :xs="21" :sm="22" :md="22" :lg="22" :xl="22">
        <a-flex vertical gap="10">
          <a-typography-text
            style="color: #333333"
            class="text-base md:text-2xl font-bold"
            >រាយការណ៍​ការ​ផ្តល់​សាធារណៈ​តាម​វិស័យ​</a-typography-text
          >
          <a-typography-text
            style="color: #2f2b3d66"
            class="text-[15px] md:text-base font-light"
            >ទិន្នន័យ​ត្រូវ​បាន​បង្ហាញ​តាម​កាល​បរិច្ឆេទ​</a-typography-text
          >
        </a-flex>
      </a-col>
      <a-col :span="2" :xs="3" :sm="2" :md="2" :lg="2" :xl="2">
        <a-flex align="start" justify="flex-end">
          <Icon icon="mdi:dots-vertical" width="22" height="22" />
        </a-flex>
      </a-col>
      <a-col :span="12" :xs="24" :sm="24" :md="24" :lg="24" :xl="12">
        <a-row :gutter="[10, 10]">
          <a-col
            :span="12"
            :xs="24"
            :sm="24"
            :md="12"
            :lg="12"
            :xl="12"
            v-for="(data, index) in props.menu"
            :key="index"
          >
            <a-flex justify="flex-start" align="center" gap="15">
              <a-avatar
                :size="35"
                shape="square"
                style="background-color: #eeedf0"
                class="flex items-center"
              >
                <div class="w-5 h-5 rounded-full">
                  {{ data.color }}
                </div>
              </a-avatar>
              <a-flex vertical justify="flex-start">
                <a-typography-text
                  class="text-[15px] font-light"
                  style="color: #2f2b3de5"
                >
                  {{ data.title }}</a-typography-text
                >
                <a-typography-text
                  class="tetx-[13px] font-light"
                  style="color: #28c76f"
                >
                  {{ data.data }}
                </a-typography-text>
              </a-flex>
            </a-flex>
          </a-col>
        </a-row>
      </a-col>
      <a-col :span="12" :xs="24" :sm="24" :md="24" :lg="24" :xl="12">
        <DashboardAdministratorReportBySectorPieChart />
      </a-col>
    </a-row>
  </a-card>
</template>

<script setup lang="ts">
import { Icon } from "@iconify/vue";

const props = defineProps({
  menu: {
    type: Array as () => Array<{
      title: string;
      data: string;

      color: string;
    }>,
    required: true,
  },
});
</script>

<style scoped></style>
