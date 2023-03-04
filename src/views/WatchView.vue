<template>
  <div class="page watch">
    <iframe
      src="https://vk.com/video_ext.php?oid=786380097&id=456239152&hash=83387938839401d8"
      frameborder="0"
      allowfullscreen="1"
      allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
    ></iframe>
  </div>
</template>

<script>
export default {
  name: "WatchView",
};
</script>

<style lang="scss" scoped>
.watch {
  iframe {
    margin-top: 70px;
    width: 100%;
    height: calc(100vh - 70px);
  }
}
</style>
