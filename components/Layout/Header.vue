<template>
  <a-row align="middle">
    <a-col :span="4">
      <a-flex justify="flex-start" align="center" class="py-3">
        <NuxtLink to="/dashboard/administration">
          <img
            src="/assets/images/logo.png"
            alt=""
            class="max-w-[160px] max-h-[40px] w-full h-full"
          />
        </NuxtLink>
      </a-flex>
    </a-col>
    <a-col :span="16" :xs="0" :sm="0" :md="0" :lg="16" :xl="16">
      <a-flex
        class="rounded-r-[50px] rounded-l-[50px] bg-[#FFFFFF1A] gap-10 py-3 px-10"
      >
        <swiper
          :breakpoints="breakpoints"
          :space-between="16"
          @swiper="onSwiper"
          @slideChange="onSlideChange"
        >
          <swiper-slide
            key="administration"
            @click="
              () => {
                activeItem = 'administration';
                router.push('/dashboard/administration');
              }
            "
            style="height: 40px"
          >
            <Nuxtlink to="/dashboard/aministration">
              <a-button
                style="border-radius: 99px; background-color: #1a2e40"
                size="large"
                class="w-full grid content-center"
                :class="{ ' active-slide  ': activeItem === 'administration' }"
              >
                <a-flex justify="center" align="center" gap="8">
                  <a-avatar :size="30">
                    <template #icon>
                      <img src="/assets/images/Rectangle (1).png" alt="" />
                    </template>
                  </a-avatar>
                  <a-typography-text class="text-white"
                    >អគ្គនាយកដ្ឋានរដ្ឋបាល</a-typography-text
                  >
                </a-flex>
              </a-button>
            </Nuxtlink>
          </swiper-slide>
          <swiper-slide
            style="height: 40px"
            id="2"
            key="nationalPolice"
            @click="
              () => {
                activeItem = 'administration';
                router.push('/dashboard/nationalPolice');
              }
            "
          >
            <a-button
              style="border-radius: 99px; background-color: #1a2e40"
              size="large"
              class="w-full grid content-center"
              :class="{ ' active-slide  ': activeItem === 'nationalPolice' }"
            >
              <a-flex justify="center" align="center" gap="8">
                <a-avatar :size="30">
                  <template #icon>
                    <img src="/assets/images/Rectangle (2).png" alt="" />
                  </template>
                </a-avatar>
                <a-typography-text class="text-white"
                  >អគ្គនាយកដ្ឋានរដ្ឋបាល</a-typography-text
                >
              </a-flex>
            </a-button>
          </swiper-slide>
          <swiper-slide
            style="height: 40px"
            id="3"
            key="immigration"
            @click="
              () => {
                activeItem = 'administration';
                router.push('/dashboard/immigration');
              }
            "
          >
            <a-button
              style="border-radius: 99px; background-color: #1a2e40"
              size="large"
              class="w-full grid content-center"
              :class="{ ' active-slide  ': activeItem === 'nationalPolice' }"
            >
              <a-flex justify="center" align="center" gap="8">
                <a-avatar :size="30">
                  <template #icon>
                    <img src="/assets/images/Rectangle (3).png" alt="" />
                  </template>
                </a-avatar>
                <a-typography-text class="text-white"
                  >អគ្គនាយកដ្ឋានរដ្ឋបាល</a-typography-text
                >
              </a-flex>
            </a-button>
          </swiper-slide>
          <swiper-slide
            style="height: 40px"
            id="4"
            key="identification"
            @click="
              () => {
                activeItem = 'identification';
                router.push('/dashboard/identification');
              }
            "
          >
            <a-button
              style="border-radius: 99px; background-color: #1a2e40"
              size="large"
              class="w-full grid content-center"
              :class="{ ' active-slide': activeItem === 'nationalPolice' }"
            >
              <a-flex justify="center" align="center" gap="8">
                <a-avatar :size="30">
                  <template #icon>
                    <img src="/assets/images/Rectangle (4).png" alt="" />
                  </template>
                </a-avatar>
                <a-typography-text class="text-white"
                  >អគ្គនាយកដ្ឋានរដ្ឋបាល</a-typography-text
                >
              </a-flex>
            </a-button>
          </swiper-slide>
        </swiper>
      </a-flex>
    </a-col>
    <a-col :span="4" :xs="12" :sm="12" :md="12" :lg="4" :xl="4">
      <a-flex justify="flex-end" align="center" gap="10">
        <!-- <a-tooltip title="search">
                    <a-button shape="circle" :icon="h(SearchOutlined)"
                        style="background-color: #E7F3FF1A; border: none; color: white;" size="large" />
                </a-tooltip>
                <a-badge dot>
                    <Icon icon="tabler:bell" width="24" height="24" style="color: white;" />
                </a-badge> -->

        <a-dropdown :trigger="['click']">
          <a class="ant-dropdown-link" @click.prevent>
            <a-avatar :size="38" class="rounded-full border border-white">
              <template #icon>
                <UserOutlined />
              </template>
            </a-avatar>
          </a>
          <template #overlay>
            <a-menu>
              <!-- <a-menu-item key="0">
                <a href="/user_info">
                  <a-flex align="center" gap="5" justify="space-between">
                    <Icon icon="tabler:user" width="18" height="18" />
                    ព័ត៌មានបុគ្គល
                  </a-flex>
                </a>
              </a-menu-item> -->
              <a-menu-divider />
              <a-menu-item key="1" danger @click="logoutClicked()">
                <a href="#">
                  <a-flex align="center" justify="space-between">
                    <LogoutOutlined />
                    ចាកចេញ
                  </a-flex>
                </a>
              </a-menu-item>
            </a-menu>
          </template>
        </a-dropdown>
      </a-flex>
    </a-col>
  </a-row>

</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { Icon } from "@iconify/vue";
import type { Swiper as SwiperClass } from "swiper";
import { ref, watch } from "vue";
import { useRouter, useRoute } from "vue-router";
import "swiper/css";
const route = useRoute();
const router = useRouter();
const activeItem = ref("");
const updateActiveItemFromRoute = () => {
  switch (route.path) {
    case "/dashboard/administration":
      activeItem.value = "administration";
      break;
    case "/dashboard/nationalPolice":
      activeItem.value = "nationalPolice";
      break;
    case "/dashboard/immigration":
      activeItem.value = "immagration";
      break;
    case "/dashboard/identifycation":
      activeItem.value = "identification";
      break;
    default:
      activeItem.value = "";
      break;
  }
};

const onSwiper = (swiper: SwiperClass) => {
  console.log(swiper);
};
const onSlideChange = () => {
  console.log("slidechange");
};
const breakpoints = {
  30: {
    slidesPerView: 1,
    spaceBetween: 10,
  },
  768: {
    slidesPerView: 1,
    spaceBetween: 20,
  },
  1024: {
    slidesPerView: 2,
    spaceBetween: 20,
  },
  1440: {
    slidesPerView: 3,
    spaceBetween: 20,
  },
  1700: {
    slidesPerView: 4,
    spaceBetween: 10,
  },
};
watch(() => route.path, updateActiveItemFromRoute);
updateActiveItemFromRoute();
</script>

<style scoped>
.active-slide {
  background-color: #b3babb !important;
}
</style>
