<template>
  <header class="header" :class="{ color: color }">
    <div class="brand">
      <h1>RRW</h1>
      <span>Rana Raies Works</span>
    </div>
    <nav class="links" :class="{ active: isActive }">
      <ul>
        <li>
          <router-link to="/">Home</router-link>
        </li>
        <li>
          <router-link to="/works/movies">Movies</router-link>
        </li>
        <li>
          <router-link to="/works/series">Series</router-link>
        </li>
        <li>
          <a href="/#about" class="not">About Me</a>
        </li>
        <li>
          <router-link to="/works/my-list">My List</router-link>
        </li>
      </ul>
    </nav>
    <button class="toggle" @click="isActive = !isActive">
      <i class="bi bi-list"></i>
    </button>
  </header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      isActive: false,
      color: false,
    };
  },
  mounted() {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 10) {
        this.color = true;
      } else {
        this.color = false;
      }
    });
  },
};
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  background-color: transparent;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  transition: 0.3s background ease-in-out;
  &.color {
    background-color: var(--bg-color);
  }
  .brand {
    display: flex;
    flex-direction: column;
    gap: 0;
    h1 {
      font-size: 30px;
    }
    span {
      font-size: 12px;
      color: var(--main-color);
      font-weight: 400;
      margin-top: -8px;
    }
  }
  .links {
    ul {
      display: flex;
      align-items: center;
      gap: 20px;
      a {
        color: var(--text-color);
        font-size: 16px;
        transition: 0.3s color ease-in-out;
        &:hover,
        &.active:not(.not) {
          color: var(--main-color);
        }
      }
      @media (max-width: 768px) {
        flex-direction: column;
      }
    }
    @media (max-width: 768px) {
      position: fixed;
      width: 300px;
      height: 100%;
      left: -330px;
      top: 0;
      background-color: var(--bg-color);
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
      border-right: 1px solid #272d36;
      padding: 20px 0;
      transition: 0.3s left ease-in-out;
      &.active {
        left: 0;
      }
    }
  }
  .toggle {
    font-size: 30px;
    color: var(--text-color);
    background-color: transparent;
    border: none;
    cursor: pointer;
    transition: 0.3s opacity ease-in-out;
    display: none;
    &:hover {
      opacity: 0.8;
    }
    @media (max-width: 768px) {
      display: block;
    }
  }
}
</style>
