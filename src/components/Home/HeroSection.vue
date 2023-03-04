<template>
  <Loader v-if="works.length == 0" />
  <section class="section hero-section">
    <video
      :src="trailer"
      class="trailer"
      :muted="mute"
      playsinline
      autoplay
      @ended="nextVideo()"
    ></video>
    <button class="btn mute" @click="mute = !mute">
      <i
        class="bi"
        :class="{ 'bi-volume-down': !mute, 'bi-volume-mute': mute }"
      ></i>
    </button>
    <button class="btn add-to-list">
      <i class="bi bi-plus"></i>
    </button>
    <div class="content">
      <div class="about-rana">
        <img src="@/assets/rana.jpg" class="hero" alt="Rana Raies" />
        <div class="details">
          <h2 class="name">Rana Raies</h2>
          <p class="desc">
            Egyptian actress born in Cairo who got into the business by chance.
            Her onscreen debut was in 2017 with two different series, Security
            Situation with Amr Saad and Ground/Air with Ghada Abdel Razek. She
            also appeared on other series on Ramadan such as Cuffs S2 (2018),
            and Baraka (2019).
          </p>
        </div>
      </div>
      <div class="last-works">
        <ul>
          <li
            v-for="(work, i) in works"
            :key="i"
            v-html="work.textLogo"
            :class="{ active: i == currentTrailer }"
            @click="currentTrailer = i"
          ></li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
import Loader from "@/components/Loader.vue";

export default {
  name: "HeroSection",
  data() {
    return {
      mute: true,
      currentTrailer: 0,
    };
  },
  components: {
    Loader,
  },
  computed: {
    works() {
      return this.$store.getters.works.slice(0, 3);
    },
    trailer() {
      return this.$store.getters.heroTrailer;
    },
  },
  methods: {
    nextVideo() {
      if (this.works[this.currentTrailer + 1]) this.currentTrailer++;
      else this.currentTrailer = 0;
      this.$store.dispatch("getFile", this.works[this.currentTrailer].trailer);
    },
    // getFile(location) {
    //   getDownloadURL(ref(storage, location)).then((url) => {
    //     this.$store.commit("heroTrailer", url);
    //   });
    // },
  },
};
</script>

<style lang="scss" scoped>
.hero-section {
  padding: 0;
  position: relative;
  display: flex;
  justify-content: center;
  height: 700px;
  background-color: black;
  overflow: hidden;
  .trailer {
    height: 120vh;
    min-height: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .btn {
    position: absolute;
    top: 70px;
    right: 10px;
    font-size: 30px;
    border: none;
    background-color: transparent;
    cursor: pointer;
    color: var(--text-color);
    width: 50px;
    height: 50px;
    background-color: #00000044;
    border-radius: 50%;
    border: 1px solid var(--main-color);
    transition: 0.3s background ease-in-out;
    z-index: 99;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover,
    &.active {
      background-color: var(--main-color);
    }
    &.add-to-list {
      top: 130px;
    }
    @media (max-width: 768px) {
      width: 40px;
      height: 40px;
    }
  }
  .content {
    height: 100%;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    max-width: 500px;
    width: 100%;
    gap: 30px;
    z-index: 9;
    .hero {
      width: 250px;
      border: 3px solid var(--main-color);
      clip-path: polygon(
        0% 15%,
        15% 15%,
        15% 0%,
        85% 0%,
        85% 15%,
        100% 15%,
        100% 85%,
        85% 85%,
        85% 100%,
        15% 100%,
        15% 85%,
        0% 85%
      );
    }
    .name {
      font-size: 20px;
    }
    .desc {
      font-size: 12px;
      color: #ddd;
    }
    .last-works {
      ul {
        flex-wrap: wrap;
        display: flex;
        align-items: center;
        gap: 40px;
        row-gap: 20px;
        justify-content: center;
        width: 100%;
        li {
          font-family: "IBM Plex Sans Arabic", sans-serif;
          font-size: 20px;
          white-space: nowrap;
          cursor: pointer;
          height: 75px;
          display: flex;
          justify-content: center;
          align-items: center;
          transition: 0.3s border ease-in-out;
          position: relative;
          &::before {
            content: "";
            position: absolute;
            bottom: -3px;
            left: 0;
            width: 0;
            height: 3px;
            background-color: var(--main-color);
            transition: 0.3s width ease-in-out;
            border-radius: 3px;
          }
          &.active::before {
            width: 100%;
          }
        }
      }
    }
  }
  @media (max-width: 768px) {
    height: 750px;
  }
}
</style>
