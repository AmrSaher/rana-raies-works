<template>
  <section class="section about-rana-section" id="about">
    <h2 class="section-title">About Rana Raies</h2>
    <div class="content">
      <img src="@/assets/rana.jpg" class="avatar" alt="Rana Raies" />
      <h3 class="name">Rana Raies</h3>
      <p class="desc">
        Egyptian actress born in Cairo who got into the business by chance. Her
        onscreen debut was in 2017 with two different series, Security Situation
        with Amr Saad and Ground/Air with Ghada Abdel Razek. She also appeared
        on other series on Ramadan such as Cuffs S2 (2018), and Baraka (2019).
      </p>
      <ul class="social-media-links">
        <li>
          <a href="https://www.tiktok.com/@ranaraeis" target="_blank"
            ><i class="bi bi-tiktok"></i
          ></a>
        </li>
        <li>
          <a href="https://www.instagram.com/ranaraeis/" target="_blank"
            ><i class="bi bi-instagram"></i
          ></a>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: "AboutRanaSection",
};
</script>

<style lang="scss" scoped>
.about-rana-section {
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
    .social-media-links {
      margin-top: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 10px;
      width: 100%;
      a {
        padding: 12px 16px;
        background-color: #272e3a;
        border-radius: 50%;
        color: var(--text-color);
        transition: 0.3s background-color ease-in-out;
        &:hover {
          background-color: var(--main-color);
        }
      }
    }
  }
}
</style>
