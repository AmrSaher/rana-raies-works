<template>
  <div class="card" @click="openWork">
    <img src="@/assets/avatar1.webp" :src="img" class="avatar" alt="avatar" />
    <h3 class="name">{{ name }}</h3>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: ["img", "name", "link"],
  methods: {
    openWork() {
      this.$router.push(this.link ?? '/work/1');
    }
  }
};
</script>

<style lang="scss" scoped>
.card {
  background-color: #272e3a;
  padding-bottom: 8px;
  cursor: pointer;
  border-radius: 5px;
  overflow: hidden;
  transition: 0.3s transform ease-in-out;
  .avatar {
    width: 100%;
  }
  .name {
    width: 100%;
    text-align: center;
    font-family: "IBM Plex Sans Arabic", sans-serif;
    font-size: 15px;
  }
}
</style>
