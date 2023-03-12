<template>
  <section class="section video-background">
    <video
      v-if="work"
      :src="work.trailer"
      :poster="work.poster"
      class="trailer"
      :muted="mute"
      playsinline
      autoplay
      loop
      @ended="$emit('ended')"
    ></video>
    <button class="btn mute" @click="mute = !mute">
      <i
        class="bi"
        :class="{ 'bi-volume-down': !mute, 'bi-volume-mute': mute }"
      ></i>
    </button>
    <button class="btn add-to-list" @click="addToList()">
      <i
        v-if="work"
        :class="{
          'bi bi-plus': !isWorkInMyList,
          'bi bi-dash': isWorkInMyList,
        }"
      ></i>
    </button>
    <router-link
      v-if="work && playBtn"
      :to="{ name: 'work', params: { id: work.id } }"
      class="btn play"
    >
      <i class="bi bi-play"></i>
    </router-link>
    <div class="content" :style="contentStyle">
      <slot />
    </div>
  </section>
</template>

<script>
export default {
  name: "VideoBackground",
  props: ["work", "playBtn", "contentStyle"],
  data() {
    return {
      mute: true,
      isWorkInMyList: false,
    };
  },
  computed: {
    myList() {
      return this.$store.getters.myList;
    },
  },
  watch: {
    work() {
      this.checkIfWorkInMyList();
    },
  },
  mounted() {
    this.checkIfWorkInMyList();
  },
  methods: {
    addToList() {
      this.isWorkInMyList = !this.isWorkInMyList;
      let ids = JSON.parse(localStorage.getItem("mylist")) || [];
      if (ids.includes(this.work.id)) {
        ids.splice(ids.indexOf(this.work.id), 1);
      } else {
        ids.push(this.work.id);
      }
      localStorage.setItem("mylist", JSON.stringify(ids));
      this.$store.dispatch("getMyList");
    },
    checkIfWorkInMyList() {
      for (let i = 0; i < this.myList.length; i++) {
        let work = this.myList[i];
        if (this.work.id == work.id) {
          this.isWorkInMyList = true;
          break;
        }
        this.isWorkInMyList = false;
      }
    },
  },
};
</script>

<style lang="scss">
.video-background {
  padding: 0;
  position: relative;
  display: flex;
  justify-content: center;
  height: 650px;
  background-color: black;
  overflow: hidden;
  box-shadow: rgba(150, 150, 163, 0.3) 0px 10px 35px 0px;
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
    right: 20px;
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
    display: flex;
    flex-direction: column;
    width: 100%;
    z-index: 9;
  }
  @media (max-width: 768px) {
    height: 680px;
  }
}
</style>
