<template>
  <div class="page works">
    <CardList />
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
  },
};
</script>

<style lang="scss" scoped>
.works {
  padding-top: 70px;
}
</style>
