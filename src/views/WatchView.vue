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
      console.log(this.iframe);
    },
  },
};
</script>
