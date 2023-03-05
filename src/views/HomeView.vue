<template>
  <div class="page home">
    <HeroSection />
    <Slider v-if="false" title="Continue Watching" />
    <Slider v-if="myList.length > 0" title="My List" :cards="myList" />
    <AboutMeSection />
  </div>
  <Footer />
</template>

<script>
import HeroSection from "@/components/Home/HeroSection.vue";
import Slider from "@/components/Slider.vue";
import AboutMeSection from "@/components/Home/AboutMeSection.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "HomeView",
  components: {
    HeroSection,
    Slider,
    AboutMeSection,
    Footer
  },
  computed: {
    myList() {
      let ids = JSON.parse(localStorage.getItem("mylist")) || [];
      return this.$store.getters.works
        .filter((work) => {
          if (ids.includes(work.id)) return true;
        })
        .map((work) => {
          work.link = "/work/" + work.id;
          return work;
        });
    },
  },
};
</script>
