<template>
  <div>
    <h2>Storyblok</h2>
    {{ story }}
    <h2>Algolia</h2>
    {{ result }}
  </div>
</template>

<script setup lang="ts">
const { result, search } = useAlgoliaSearch('test_index')
const story = await useStoryblok("home", { version: "draft" });

onMounted(async () => {
  await search({ query: 'Samsung' })
})
</script>