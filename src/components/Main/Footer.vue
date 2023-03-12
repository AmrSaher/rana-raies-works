<template>
  <footer class="footer">
    <span
      >Made With <i class="bi bi-heart-fill"></i> By
      <a href="https://regal-manatee-1d4304.netlify.app/" target="_blank"
        >Amr Saher</a
      ></span
    >
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style lang="scss" scoped>
.footer {
  width: 100%;
  padding: 15px;
  text-align: center;
  background-color: #272e3a;
  span {
    font-size: 16px;
    i {
      color: red;
    }
    a {
      color: var(--text-color);
      text-decoration: underline;
    }
  }
}
</style>
