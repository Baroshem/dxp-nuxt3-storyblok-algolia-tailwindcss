<template>
  <div>
    <cat-image-gallery :images="story.content.body"/>
  </div>
</template>

<script setup lang="ts">
const { result, search } = useAlgoliaSearch('test_index')
const story = await useStoryblok("home", { version: "draft" });

onMounted(async () => {
  await search({ query: 'Samsung' })
})
</script>