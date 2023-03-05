<template>
  <section class="section details-section">
    <video
      :src="work.trailer"
      class="trailer"
      :muted="mute"
      autoplay
      loop
    ></video>
    <button class="btn mute" @click="mute = !mute">
      <i
        class="bi"
        :class="{ 'bi-volume-down': !mute, 'bi-volume-mute': mute }"
      ></i>
    </button>
    <button class="btn add-to-list" @click="addToList">
      <i class="bi bi-plus"></i>
    </button>
    <div class="content">
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
    </div>
  </section>
</template>

<script>
export default {
  name: "DetailsSection",
  props: ["work"],
  data() {
    return {
      mute: true,
      season: 1,
      link: "",
    };
  },
  watch: {
    season(v) {
      this.$emit("getEpsoides", v);
    },
  },
  methods: {
    addToList() {
      let ids = JSON.parse(localStorage.getItem("mylist")) || [];
      if (ids.includes(this.work.id)) {
        ids.splice(ids.indexOf(this.work.id), 1);
      } else {
        ids.push(this.work.id);
      }
      localStorage.setItem("mylist", JSON.stringify(ids));
    },
  },
};
</script>

<style lang="scss" scoped>
.details-section {
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
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 15px;
    justify-content: center;
    align-items: flex-start;
    z-index: 9;
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
  @media (max-width: 768px) {
    height: 750px;
  }
}
</style>
