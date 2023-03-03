<template>
  <section class="section card-list">
    <div class="cards">
      <Card name="موضوع عائلى" />
      <Card name="موضوع عائلى" />
      <Card name="موضوع عائلى" />
      <Card name="موضوع عائلى" />
      <Card name="موضوع عائلى" />
      <Card name="موضوع عائلى" />
      <Card name="موضوع عائلى" />
      <Card name="موضوع عائلى" />
    </div>
  </section>
</template>

<script>
import Card from "@/components/Card.vue";

export default {
  name: "CardList",
  components: {
    Card,
  },
};
</script>

<style lang="scss" scoped>
.card-list {
  .cards {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    @media (max-width: 1024px) {
      grid-template-columns: repeat(3, 1fr);
    }
    @media (max-width: 900px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }
  }
}
</style>
