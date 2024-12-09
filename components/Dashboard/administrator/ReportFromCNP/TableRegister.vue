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

const state = reactive<{
  selectedRowKeys: Key[];
  loading: boolean;
}>({
  selectedRowKeys: [],
  loading: false,
});

const onSelectChange = (selectedRowKeys: Key[]) => {
  console.log("selectedRowKeys changed: ", selectedRowKeys);
  state.selectedRowKeys = selectedRowKeys;
};
</script>

<template>
  <div>
    ចំនួនសេវា
    <a-table
      :columns="columns"
      class="mb-5"
      :data-source="data"
      :scroll="{ x: 500 }"
      :pagination="{ pageSize: 5 }"
      :row-selection="{
        selectedRowKeys: state.selectedRowKeys,
        onChange: onSelectChange,
      }"
    >
      <template #bodyCell="{ column, record }">
        <template v-if="column.dataIndex === 'names'">
          <a-space>
            {{ record.CapitalName }}
          </a-space>
        </template>
        <template v-if="column.dataIndex === 'total'">
          {{ useNumeral(record.Register) }}
        </template>
        <template v-if="column.dataIndex === 'percentage'">
          {{ record.Percentage }}%
        </template>
      </template>
    </a-table>
  </div>
</template>

<style lang="scss" scoped></style>
