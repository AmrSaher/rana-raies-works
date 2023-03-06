<template>
  <Loader v-if="loader" />
  <div class="page work">
    <DetailsSection
      @getEpsoides="
        (s) => {
          season = s;
          generateCards();
        }
      "
      :work="work"
    />
    <Slider title="Epsoides" :cards="cards" />
  </div>
  <Footer />
</template>

<script>
import DetailsSection from "@/components/Work/DetailsSection.vue";
import Slider from "@/components/Slider.vue";
import Loader from "@/components/Loader.vue";
import Footer from "@/components/Footer.vue";
import { db } from "@/firebase";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";

export default {
  name: "WorkView",
  components: {
    DetailsSection,
    Slider,
    Loader,
    Footer,
  },
  data() {
    return {
      work: {
        seasons: [{ id: "_" }],
      },
      cards: [],
      season: 1,
      loader: false,
    };
  },
  mounted() {
    this.fetchWork();
  },
  computed: {
    id() {
      return this.$route.params.id;
    },
  },
  methods: {
    async fetchWork() {
      this.loader = true;
      const workRef = doc(db, "works", this.id);
      const workSnap = await getDoc(workRef);
      let seasons = [];
      const seasonsRef = await getDocs(collection(db, "seasons"));
      seasonsRef.forEach((doc) => {
        if (doc.data().work_id == workSnap.id) {
          seasons.push({
            id: doc.id,
            ...doc.data(),
          });
        }
      });
      this.seasons = seasons;
      this.work = {
        id: workSnap.id,
        ...workSnap.data(),
        seasons: seasons,
      };
      this.generateCards();
      this.loader = false;
    },
    generateCards() {
      this.cards = [];
      this.seasons[this.season - 1].epsoides.forEach((epsoide, i) => {
        this.cards.push({
          name: "الحلقة " + (i + 1),
          img: this.work.avatar,
          link: "/watch/" + this.seasons[this.season - 1].id + "/" + (i + 1),
        });
      });
    },
  },
};
</script>
