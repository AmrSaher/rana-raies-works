<template>
  <div class="page home">
    <HeroSection />
    <Slider
      v-if="continueWatching.length > 0"
      title="Continue Watching"
      :cards="continueWatching"
    />
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
  mounted() {
    this.getContinueList();
  },
  methods: {
    getContinueList() {
      let epsoides = (
        JSON.parse(localStorage.getItem("continuelist")) || []
      ).reverse();
      epsoides.map(async (epsoide) => {
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
