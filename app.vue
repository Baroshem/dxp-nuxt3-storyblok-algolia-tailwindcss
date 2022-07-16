<template>
  <div>
    <h1 class="text-xl">Cats from Storyblok</h1>
    <cat-image-gallery :images="story.content.body"/>
    <h2 class="text-xl">Cats from Algolia</h2>
    <cat-image-gallery :images="result?.hits "/>
  </div>
</template>

<script setup lang="ts">
const { result, search } = useAlgoliaSearch('dxp')
const story = await useStoryblok("home", { version: "draft" });

onMounted(async () => {
  await search({ query: 'chill' })
})
</script>