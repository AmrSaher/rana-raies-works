<template>
  <video-background
    v-if="work"
    :work="work"
    :playBtn="false"
    contentStyle="gap: 15px;
    justify-content: center;
    align-items: flex-start;"
  >
    <img :src="work.logo" class="logo" :alt="work.name" />
    <select class="season" v-model="season">
      <option
        v-for="(season, i) in work.seasons"
        :key="season.id"
        :value="i + 1"
      >
        {{ season.name }}
      </option>
    </select>
    <h2 class="name">{{ work.name }}</h2>
    <ul class="categories">
      <li v-for="(cat, i) in work.categories" :key="i">
        <span></span>{{ cat }}
      </li>
    </ul>
    <p class="desc">{{ work.description }}</p>
    <hr />
    <div class="watch-btn">
      <router-link
        :to="{
          name: 'watch',
          params: { sid: work.seasons[season - 1].id, ep: 1 },
        }"
      >
        <i class="bi bi-play-fill"></i>
      </router-link>
      <span>Watch Now</span>
    </div>
  </video-background>
</template>

<script>
import VideoBackground from "@/components/VideoBackground.vue";

export default {
  name: "DetailsSection",
  props: ["work"],
  components: {
    VideoBackground,
  },
  data() {
    return {
      season: 1,
    };
  },
  watch: {
    season(v) {
      this.$emit("getEpsoides", v);
    },
  },
};
</script>

<style lang="scss">
.video-background {
  .content {
    .logo {
      height: 100px;
      margin-bottom: 10px;
    }
    .season {
      padding: 8px 10px;
      background-color: var(--bg-color);
      border: 1px solid var(--main-color);
      color: var(--text-color);
      outline: none;
    }
    .name {
      font-size: 20px;
      font-family: "IBM Plex Sans Arabic", sans-serif;
    }
    .categories {
      display: flex;
      align-items: center;
      gap: 15px;
      li {
        display: flex;
        align-items: center;
        gap: 5px;
        font-size: 15px;
        color: #ddd;
        span {
          width: 8px;
          height: 8px;
          background-color: var(--main-color);
          border-radius: 50%;
        }
      }
    }
    .desc {
      color: #ddd;
      font-family: "IBM Plex Sans Arabic", sans-serif;
      max-width: 500px;
    }
    hr {
      width: 100%;
      background-color: #ddd;
      height: 1px;
      opacity: 0.3;
    }
    .watch-btn {
      display: flex;
      align-items: center;
      gap: 10px;
      a {
        width: 50px;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: var(--main-color);
        border-radius: 50%;
        font-size: 30px;
        color: var(--text-color);
        border: 1px solid var(--main-color);
        transition: 0.3s background ease-in-out;
        &:hover {
          background-color: #00000044;
        }
      }
    }
  }
}
</style>
