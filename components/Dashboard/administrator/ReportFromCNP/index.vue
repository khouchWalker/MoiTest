<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { reactive } from "vue";

const columns = [
  {
    title: "ឈ្មោះរាជធានី-ខេត្ត",
    dataIndex: "names",
  },
  {
    title: "ចំនួនសរុប",
    dataIndex: "total",
  },
  {
    title: "ចំនួនសរុបគិតជាភាគរយ",
    dataIndex: "percentage",
  },
];

const props = defineProps({
  menu: {
    type: Array as () => Array<{
      name: string;
      total: number;
      percentage: number;
    }>,
  },
});

const tabButton = ref<1 | 2>(1);
const switchTab = (tab: 1 | 2) => {
  tabButton.value = tab;
};
</script>

<template>
  <a-card>
    <a-row :gutter="[20, 20]">
      <a-col :span="22" :xs="21" :sm="22" :md="22" :lg="22" :xl="22">
        <a-flex vertical gap="10">
          <a-typography-text
            style="color: #333333"
            class="text-base md:text-2xl font-bold"
            >របាយការណ៍ប្រៀបធៀបការផ្តល់សេវាបណ្តាយរាជធានី-ខេត្ត</a-typography-text
          >
          <a-typography-text
            style="color: #2f2b3d66"
            class="text-[15px] md:text-base font-light"
            >រូបភាពក្រាហ្វិកប្រៀបធៀបការផ្តល់សេវាថ្នាក់រាជធានី-ខេត្ត</a-typography-text
          >
        </a-flex>
      </a-col>
      <a-col :span="2" :xs="3" :sm="2" :md="2" :lg="2" :xl="2">
        <a-flex align="start" justify="flex-end">
          <Icon icon="mdi:dots-vertical" width="22" height="22" />
        </a-flex>
      </a-col>
      <a-col :span="12" :xs="24" :sm="24" :md="24" :lg="24" :xl="12">
        <a-flex gap="20" vertical>
          <a-flex gap="20">
            <a-button
              style="height: 100px; width: 100px"
              type="dashed"
              :style="{
                borderColor: tabButton === 1 ? '#7367F0' : '',
              }"
              @click="switchTab(1)"
            >
              <a-flex vertical gap="4" align="center">
                <a-avatar
                  :size="38"
                  shape="square"
                  :style="{
                    backgroundColor: tabButton === 1 ? '#7367F029' : '#eeedf0',
                    color: tabButton === 1 ? '#7367F0' : '#2f2b3db2',
                  }"
                  class="flex items-center"
                >
                  <Icon
                    icon="tabler:chart-bar-popular"
                    width="22"
                    height="22"
                    style="color: #2f2b3db2"
                  />
                </a-avatar>
                <a-typography-text>ចំនួនសេវា</a-typography-text>
              </a-flex>
            </a-button>
            <a-button
              style="height: 100px; width: 100px"
              type="dashed"
              :style="{
                borderColor: tabButton === 2 ? '#7367F0' : '',
              }"
              @click="switchTab(2)"
            >
              <a-flex vertical gap="4" align="center">
                <a-avatar
                  :size="38"
                  shape="square"
                  :style="{
                    backgroundColor: tabButton === 2 ? '#7367F029' : '#eeedf0',
                    color: tabButton === 2 ? '#7367F0' : '#2f2b3db2',
                  }"
                  class="flex items-center"
                >
                  <Icon
                    icon="tabler:currency-dollar"
                    width="22"
                    height="22"
                    style="color: #2f2b3db2"
                  />
                </a-avatar>
                <a-typography-text>ចំណូល</a-typography-text>
              </a-flex>
            </a-button>
          </a-flex>
          <DashboardAdministratorReportFromCNPTableRegister
            v-if="tabButton === 1"
          />
          <DashboardAdministratorReportFromCNPTableIncome
            v-if="tabButton === 2"
          />
        </a-flex>
      </a-col>
      <a-col :span="12" :xs="24" :sm="24" :md="24" :lg="24" :xl="12">
        <DashboardAdministratorReportFromCNPMap />
      </a-col>
    </a-row>
  </a-card>
</template>

<style scoped>
/* Additional styles here for any custom adjustments */
</style>
