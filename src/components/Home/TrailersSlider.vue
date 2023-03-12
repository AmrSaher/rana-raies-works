<template>
  <div class="last-works">
    <swiper
      :slides-per-view="2"
      :space-between="20"
      :breakpoints="{
        1200: {
          slidesPerView: 3,
        },
      }"
    >
      <swiper-slide
        v-for="(work, i) in works"
        :key="i"
        :class="{ active: i == currentTrailer }"
        @click="$emit('setCurrentTrailer', i)"
      >
        <img :src="work.logo" :alt="work.name" />
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";

export default {
  name: "TrailersSlider",
  props: ["works", "currentTrailer"],
  components: {
    Swiper,
    SwiperSlide,
  },
};
</script>

<style lang="scss" scoped>
.last-works {
  width: 100%;
  .swiper-wrapper {
    width: 100%;
    padding: 10px;
    .swiper-slide {
      padding: 10px 0;
      position: relative;
      &::before {
        content: "";
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 0;
        height: 2px;
        background-color: var(--main-color);
        transition: 0.3s width ease-in-out;
        border-radius: 2px;
      }
      img {
        height: 60px;
        cursor: pointer;
        @media (max-width: 700px) {
          height: 50px;
        }
      }
      &.active::before {
        width: 50%;
      }
    }
  }
}
</style>
