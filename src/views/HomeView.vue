<template>
  <div class="page home">
    <LandSection />
    <Slider title="Continue Watching" />
    <Slider title="My List" />
    <AboutMeSection />
  </div>
</template>

<script>
import LandSection from "@/components/Home/LandSection.vue";
import Slider from "@/components/Slider.vue";
import AboutMeSection from "@/components/Home/AboutMeSection.vue";

export default {
  name: "HomeView",
  components: {
    LandSection,
    Slider,
    AboutMeSection,
  },
};
</script>
