<template>
  <iframe
    width="560" 
    height="315"
    :src="`https://player.vimeo.com/video/${ props.videoId }`"
    title="Video player"
    allow="autoplay; accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
    frameborder="0"
  >

  </iframe>
</template>

<script lang="ts" setup>
  const props = defineProps({
    videoId: {
      type: Number,
      required: true,
    },
  })
</script>

<style scoped></style>
