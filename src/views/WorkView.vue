<template>
  <div class="page work">
    <DetailsSection />
    <Slider title="Epsoides" />
  </div>
</template>

<script>
import DetailsSection from '@/components/Work/DetailsSection.vue';
import Slider from "@/components/Slider.vue";

export default {
  name: "WorkView",
  components: {
    DetailsSection,
    Slider
  }
};
</script>

<style lang="scss" scoped>
.work {
}
</style>
