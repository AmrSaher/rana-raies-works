<template>
  <section class="section slider">
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
      <swiper-slide v-for="(card, i) in cards" :key="i">
        <Card :name="card.name" :img="card.img" :link="card.link" />
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
    };
  },
  props: ["title", "cards"],
};
</script>
