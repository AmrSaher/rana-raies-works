<template>
  <Loader v-if="works.length == 0" />
  <section class="section hero-section">
    <video
      v-if="works[currentTrailer]"
      :src="works[currentTrailer].trailer"
      :poster="works[currentTrailer].poster"
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
    <button class="btn add-to-list" @click="addToList()">
      <i
        v-if="works[currentTrailer]"
        class="bi"
        :class="{
          'bi-plus': !myList.includes(works[currentTrailer].id),
          'bi-dash': myList.includes(works[currentTrailer].id),
        }"
      ></i>
    </button>
    <router-link
      v-if="works[currentTrailer]"
      :to="{ name: 'work', params: { id: works[currentTrailer].id } }"
      class="btn play"
    >
      <i class="bi bi-play"></i>
    </router-link>
    <div class="content">
      <!-- <div class="about-rana">
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
      </div> -->
      <div class="last-works">
        <swiper
          :slides-per-view="2"
          :space-between="20"
          :breakpoints="{
            1200: {
              slidesPerView: 3,
            },
          }"
          :modules="modules"
          navigation
        >
          <swiper-slide
            v-for="(work, i) in works"
            :key="i"
            :class="{ active: i == currentTrailer }"
            @click="currentTrailer = i"
          >
            <img :src="work.logo" :alt="work.name" />
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </section>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper";
import Loader from "@/components/Loader.vue";
import "swiper/css";
import "swiper/css/navigation";

export default {
  name: "HeroSection",
  data() {
    return {
      mute: true,
      currentTrailer: 0,
      modules: [Navigation],
    };
  },
  components: {
    Loader,
    Swiper,
    SwiperSlide,
  },
  computed: {
    works() {
      return this.$store.getters.works.slice(0, 4);
    },
    myList() {
      return JSON.parse(localStorage.getItem("mylist")) || [];
    },
  },
  methods: {
    nextVideo() {
      if (this.works[this.currentTrailer + 1]) this.currentTrailer++;
      else this.currentTrailer = 0;
    },
    addToList() {
      let ids = JSON.parse(localStorage.getItem("mylist")) || [];
      if (ids.includes(this.works[this.currentTrailer].id)) {
        ids.splice(ids.indexOf(this.works[this.currentTrailer].id), 1);
      } else {
        ids.push(this.works[this.currentTrailer].id);
      }
      localStorage.setItem("mylist", JSON.stringify(ids));
    },
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
    top: 80px;
    right: 30px;
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
      top: 140px;
    }
    &.play {
      top: 200px;
    }
    @media (max-width: 768px) {
      width: 40px;
      height: 40px;
      font-size: 25px;
      right: 20px;
      &.add-to-list {
        top: 130px;
      }
      &.play {
        top: 180px;
      }
    }
  }
  .content {
    height: 100%;
    padding: 20px;
    padding-bottom: 100px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    text-align: center;
    max-width: 700px;
    width: 100%;
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
      .swiper-wrapper {
        width: 100%;
        padding: 10px;
        .swiper-slide {
          padding: 30px 0;
          img {
            height: 60px;
            cursor: pointer;
            transition: 0.3s transform ease-in-out;
            @media (max-width: 700px) {
              height: 40px;
            }
          }
          &.active {
            img {
              transform: scale(1.3);
            }
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
