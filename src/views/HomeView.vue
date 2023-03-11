<template>
  <div class="page home">
    <HeroSection />
    <Slider
      v-if="continueWatching.length > 0"
      title="Continue Watching"
      :cards="continueWatching"
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
import { getDoc, doc } from "firebase/firestore";
import { db } from "@/firebase";

export default {
  name: "HomeView",
  components: {
    HeroSection,
    Slider,
    AboutMeSection,
    Footer,
  },
  data() {
    return {
      continueWatching: [],
    };
  },
  computed: {
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
  mounted() {
    this.getContinueList();
  },
  methods: {
    getContinueList() {
      let epsoides = (
        JSON.parse(localStorage.getItem("continuelist")) || []
      ).reverse();
      epsoides.forEach(async (epsoide) => {
        let workId = epsoide.split("|")[0];
        let seasonId = epsoide.split("|")[1];
        let epsoideIndex = epsoide.split("|")[2];
        const workRef = doc(db, "works", workId);
        const workSnap = await getDoc(workRef);
        const seasonRef = doc(db, "seasons", seasonId);
        const seasonSnap = await getDoc(seasonRef);
        this.continueWatching.push({
          name:
            workSnap.data().name +
            " " +
            seasonSnap.data().name +
            " الحلقة " +
            epsoideIndex,
          img: workSnap.data().avatar,
          link: "/watch/" + seasonId + "/" + epsoideIndex,
        });
      });
    },
  },
};
</script>
