<template>
  <section class="section about-me-section">
    <h2 class="section-title">About Me</h2>
    <div class="content">
      <img src="@/assets/amr.jpg" class="avatar" alt="Amr Saher" />
      <h3 class="name">Amr Saher</h3>
      <p class="desc">
        My name is Amr Saher, and I am a 16-year-old programmer who started
        learning how to code when I was 11. Since then, I have been continuously
        learning several programming languages, such as Python, PHP, JavaScript,
        MySQL, HTML, CSS, Sass, Vue.js, Laravel, Django, PyQt5, and more. I have
        been working as a full-stack web developer for about two years, and I'm
        always eager to learn and improve my skills in order to become a
        successful programmer in the future.
      </p>
    </div>
  </section>
</template>

<script>
export default {
  name: "AboutMeSection",
};
</script>

<style lang="scss" scoped>
.about-me-section {
  background-image: url(../../assets/bg.png);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  .content {
    width: 100%;
    max-width: 500px;
    text-align: center;
    margin: 0 auto;
    .name {
      font-size: 20px;
    }
    .desc {
      font-size: 12px;
      color: #ddd;
    }
    .avatar {
      width: 250px;
      border: 3px solid var(--main-color);
      clip-path: polygon(
        20% 0%,
        80% 0%,
        100% 20%,
        100% 80%,
        80% 100%,
        20% 100%,
        0% 80%,
        0% 20%
      );
    }
  }
}
</style>
