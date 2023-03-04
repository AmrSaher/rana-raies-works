<template>
  <div class="loader">
    <div class="spinner"></div>
  </div>
</template>

<script>
export default {
  name: "Loader",
};
</script>

<style lang="scss" scoped>
.loader {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--bg-color);
  z-index: 9999999999999999;
  display: flex;
  justify-content: center;
  align-items: center;
  .spinner {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: conic-gradient(#0000 10%, #0c9);
    -webkit-mask: radial-gradient(
      farthest-side,
      #0000 calc(100% - 8px),
      #000 0
    );
    animation: s3 1s infinite linear;
  }
}
@keyframes s3 {
  to {
    transform: rotate(1turn);
  }
}
</style>
