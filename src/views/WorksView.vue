<template>
  <div class="page works">
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
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.works {
  padding-top: 70px;
}
</style>
