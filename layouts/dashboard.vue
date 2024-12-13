<template>
  <a-layout style="min-height: 100vh">
    <a-layout-header class="headerStyle"><LayoutHeader /></a-layout-header>
    <a-layout-content class="contentStyle"><slot /></a-layout-content>
    <a-layout-footer class="footerStyle"><LayoutFooter /></a-layout-footer>
  </a-layout>
</template>

<script setup lang="ts"></script>

<style scoped>
.headerStyle {
  max-height: 93px;
  height: 100%;
  line-height: 70px;
  padding: 10px 50px;
}
.footerStyle {
  background-color: none;
}
/* .contentStyle {
  padding: 0px 50px;
} */
@media (max-width: 576px) {
  .contentStyle {
    padding: 0px 20px;
  }
  .headerStyle {
    padding: 10px 20px;
  }
  .footerStyle {
    padding: 10px 20px;
  }
}
</style>
