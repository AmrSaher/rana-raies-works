<template>
  <div class="page watch" v-html="iframe"></div>
</template>

<script>
import { db } from "@/firebase";
import { doc, getDoc } from "firebase/firestore";

export default {
  name: "WatchView",
  computed: {
    seasonId() {
      return this.$route.params.sid;
    },
    epsoideIndex() {
      return this.$route.params.ep;
    },
  },
  data() {
    return {
      iframe: "",
    };
  },
  mounted() {
    this.getIframe();
  },
  methods: {
    async getIframe() {
      const seasonRef = doc(db, "seasons", this.seasonId);
      const seasonSnap = await getDoc(seasonRef);
      this.iframe = seasonSnap.data().epsoides[this.epsoideIndex - 1];
      this.saveEpsoide(seasonSnap.data().work_id);
    },
    saveEpsoide(workId) {
      let epsoides = JSON.parse(localStorage.getItem("continuelist")) || [];
      let ep = `${workId}|${this.seasonId}|${this.epsoideIndex}`;
      let isExist = this.isExist(epsoides, workId);
      if (isExist[0]) {
        epsoides[isExist[1]] = ep;
      } else {
        epsoides.push(ep);
      }
      localStorage.setItem("continuelist", JSON.stringify(epsoides));
      this.$store.dispatch("getContinueWatchingList");
    },
    isExist(epsoides, workId) {
      let isExist = false;
      let key = null;
      epsoides.forEach((ep, i) => {
        if (ep.split("|")[0] == workId) isExist = true;
        key = i;
      });
      return [isExist, key];
    },
  },
};
</script>
