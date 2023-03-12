<template>
  <Loader v-if="works.length == 0" />
  <video-background
    v-if="works[currentTrailer]"
    :work="works[currentTrailer]"
    :playBtn="true"
    contentStyle="padding-bottom: 30px;
    justify-content: flex-end;
    text-align: center;
    max-width: 700px;"
    @ended="nextVideo"
  >
    <TrailersSlider
      :works="works"
      :currentTrailer="currentTrailer"
      @setCurrentTrailer="
        (i) => {
          currentTrailer = i;
        }
      "
    />
  </video-background>
</template>

<script>
import Loader from "@/components/Loader.vue";
import VideoBackground from "@/components/VideoBackground.vue";
import TrailersSlider from "@/components/Home/TrailersSlider.vue";

export default {
  name: "HeroSection",
  data() {
    return {
      currentTrailer: 0,
    };
  },
  components: {
    Loader,
    VideoBackground,
    TrailersSlider,
  },
  computed: {
    works() {
      return this.$store.getters.works.slice(0, 4);
    },
  },
  methods: {
    nextVideo() {
      if (this.works[this.currentTrailer + 1]) this.currentTrailer++;
      else this.currentTrailer = 0;
    },
  },
};
</script>
