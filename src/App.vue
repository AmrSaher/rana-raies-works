<template>
  <Header />
  <router-view />
</template>

<script>
import Header from "@/components/Main/Header.vue";

export default {
  name: "App",
  components: {
    Header,
  },
  mounted() {
    this.$store.dispatch("getWorks");
  },
};
</script>
