<template>
  <div class="page works">
    <p v-if="works.length == 0">Empty</p>
    <CardList :works="works" />
  </div>
</template>

<script>
import CardList from "@/components/CardList.vue";

export default {
  name: "WorksView",
  components: {
    CardList,
  },
  computed: {
    cat() {
      return this.$route.params.cat;
    },
    works() {
      if (this.cat == "movies" || this.cat == "series") {
        let type = this.cat == "movies" ? "movie" : "series";
        return this.$store.getters.works.filter((work) => {
          if (work.type == type) return true;
        });
      } else if (this.cat == "my-list") {
        return this.$store.getters.myList;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.works {
  padding-top: 70px;
  p {
    color: #ddd;
    width: 100%;
    text-align: center;
  }
}
</style>
