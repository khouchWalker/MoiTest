<template>
  <a-extract-style>
    <a-config-provider
      :theme="{
        token: {
          colorPrimary: '#0A373C',
          fontFamily: 'Hanuman',
          colorInfo: '#005C94',
          colorLink: '#005C94',
          colorText: '#4B465C',
        },
        components: {
          Form: {
            colorTextHeading: '#4B465C',
          },
        },
      }"
    >
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </a-config-provider>
  </a-extract-style>
</template>
<script setup lang="ts">
import kmKH from "ant-design-vue/es/locale/km_KH";
const locale = ref(kmKH);
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Hanuman:wght@100;300;400;700;900&family=Noto+Sans:ital,wght@0,100..900;1,100..900&display=swap");
</style>
