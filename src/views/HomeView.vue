<template>
  <div class="page home">
    <HeroSection />
    <Slider title="Continue Watching" />
    <Slider title="My List" />
    <AboutMeSection />
  </div>
</template>

<script>
import HeroSection from "@/components/Home/HeroSection.vue";
import Slider from "@/components/Slider.vue";
import AboutMeSection from "@/components/Home/AboutMeSection.vue";

export default {
  name: "HomeView",
  components: {
    HeroSection,
    Slider,
    AboutMeSection,
  },
};
</script>
