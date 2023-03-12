<template>
  <div class="page home">
    <HeroSection />
    <Slider
      v-if="continueWatchingList.length > 0"
      title="Continue Watching"
      :cards="continueWatchingList"
    />
    <Slider v-if="myList.length > 0" title="My List" :cards="myList" />
    <Slider v-if="lastWorks.length > 0" title="Last Works" :cards="lastWorks" />
    <AboutMeSection />
  </div>
  <Footer />
</template>

<script>
import HeroSection from "@/components/Home/HeroSection.vue";
import Slider from "@/components/Slider.vue";
import AboutMeSection from "@/components/Home/AboutRanaSection.vue";
import Footer from "@/components/Main/Footer.vue";

export default {
  name: "HomeView",
  components: {
    HeroSection,
    Slider,
    AboutMeSection,
    Footer,
  },
  computed: {
    continueWatchingList() {
      return this.$store.getters.continueWatchingList;
    },
    myList() {
      return this.$store.getters.myList;
    },
    lastWorks() {
      return this.$store.getters.works
        .filter((work) => {
          if (Number(work.created_at) >= 2020) return true;
        })
        .sort((a, b) => {
          return Number(a.created_at) - Number(b.created_at);
        })
        .reverse();
    },
  },
};
</script>
