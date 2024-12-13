<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { reactive } from "vue";

const columns = [
  {
    title: "ឈ្មោះរាជធានី-ខេត្ត",
    dataIndex: "names",
  },
  {
    title: "ចំណូលសរុប",
    dataIndex: "total",
  },
  {
    title: "ចំណូលសរុបគិតជាភាគរយ",
    dataIndex: "percentage",
  },
];

const data = ref([
  { key: 1, name: "ខេត្តបាត់ដំបង", total: 10, percentage: 0 },
  { key: 2, name: "ខេត្តកំពង់ចាម", total: 10, percentage: 0 },
  { key: 3, name: "ខេត្តកំពង់ឆ្នាំង", total: 20, percentage: 0 },
  { key: 4, name: "ខេត្តព្រះសីហនុ", total: 60, percentage: 0 },
]);
async function calculatePercentage() {
  let sum = 0;

  for await (const item of data.value) {
    sum += item.total;
  }

  for await (const [index, item] of data.value.entries()) {
    data.value[index].percentage = sum ? (item.total / sum) * 100 : 0;
  }
}

await calculatePercentage();

const state = reactive({
  selectedRowKeys: [] as Key[],
  loading: false,
});

const onSelectChange = (selectedRowKeys: Key[]) => {
  console.log("Selected keys: ", selectedRowKeys);
  state.selectedRowKeys = selectedRowKeys;
};
</script>

<template>
  <div>
    ចំណូល
    <a-table
      :columns="columns"
      class="mb-5"
      :data-source="data"
      :scroll="{ x: 500 }"
      :pagination="false"
      :row-selection="{
        selectedRowKeys: state.selectedRowKeys,
        onChange: onSelectChange,
      }"
    >
      <template #bodyCell="{ column, record }">
        <template v-if="column.dataIndex === 'names'">
          <a-space>
            {{ record.name }}
          </a-space>
        </template>
        <template v-if="column.dataIndex === 'total'">
          {{ record.total }}
        </template>
        <template v-if="column.dataIndex === 'percentage'">
          {{ record.percentage }}%
        </template>
      </template>
    </a-table>
  </div>
</template>

<style lang="scss" scoped></style>
