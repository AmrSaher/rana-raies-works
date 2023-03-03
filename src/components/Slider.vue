<template>
  <section class="section slider" :class="{ active: !isActive }">
    <h2 class="section-title">{{ title }}</h2>
    <swiper
      :slides-per-view="1"
      :space-between="20"
      :breakpoints="{
        1200: {
          slidesPerView: 4,
        },
        1024: {
          slidesPerView: 3,
        },
        768: {
          slidesPerView: 2,
        },
      }"
      :modules="modules"
      navigation
    >
      <swiper-slide>
        <Card name="موضوع عائلى الحلقة الاولى الموسم الاول" />
      </swiper-slide>
      <swiper-slide>
        <Card name="موضوع عائلى الحلقة الاولى الموسم الاول" />
      </swiper-slide>
      <swiper-slide>
        <Card name="موضوع عائلى الحلقة الاولى الموسم الاول" />
      </swiper-slide>
      <swiper-slide>
        <Card name="موضوع عائلى الحلقة الاولى الموسم الاول" />
      </swiper-slide>
      <swiper-slide>
        <Card name="موضوع عائلى الحلقة الاولى الموسم الاول" />
      </swiper-slide>
    </swiper>
  </section>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import Card from "@/components/Card.vue";
import { isMobile, isTablet } from 'mobile-device-detect';

export default {
  name: "Slider",
  components: {
    Swiper,
    SwiperSlide,
    Card,
  },
  data() {
    return {
      modules: [Navigation],
      isActive: !isMobile || !isTablet
    };
  },
  props: ["title", "cards"],
};
</script>

<style lang="scss" scoped>
.slider {
  &.active {
    .swiper,
    swiper-container {
      overflow: unset;
    }
  }
}
</style>
