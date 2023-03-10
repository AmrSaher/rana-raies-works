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
  .swiper-wrapper {
    width: 100%;
    padding: 10px;
    .swiper-slide {
      padding: 30px 0;
      img {
        height: 60px;
        cursor: pointer;
        transition: 0.3s transform ease-in-out;
        @media (max-width: 700px) {
          height: 40px;
        }
      }
      &.active {
        img {
          transform: scale(1.3);
        }
      }
    }
  }
}
</style>
