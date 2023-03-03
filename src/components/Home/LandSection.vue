<template>
  <section class="section hero-section">
    <video
      :src="trailers[currentTrailer - 1].video"
      class="trailer"
      :muted="mute"
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
            v-for="trailer in trailers"
            :key="trailer.id"
            v-html="trailer.name"
            :class="{ active: trailer.id == currentTrailer }"
            @click="currentTrailer = trailer.id"
          ></li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
import video1 from "@/assets/video.mp4";
import video2 from "@/assets/video1.mp4";
import video3 from "@/assets/video2.mp4";
import video4 from "@/assets/video3.mp4";

export default {
  name: "LandSection",
  data() {
    return {
      mute: false,
      currentTrailer: 1,
      trailers: [
        {
          id: 1,
          video: video1,
          name: "موضوع <br>عائلى",
        },
        {
          id: 2,
          video: video2,
          name: "ازمة منصتف <br>العمر",
        },
        {
          id: 3,
          video: video3,
          name: "الحرامى",
        },
        {
          id: 4,
          video: video4,
          name: "جزيرة <br>غمام",
        },
      ],
    };
  },
  methods: {
    nextVideo() {
      if (this.trailers[this.currentTrailer]) this.currentTrailer++;
      else this.currentTrailer = 1;
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
  height: 650px;
  background-color: black;
  overflow: hidden;
  .trailer {
    height: 100%;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
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
