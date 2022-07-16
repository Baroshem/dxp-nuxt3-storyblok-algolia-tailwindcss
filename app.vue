<template>
  <div>
    {{ result }}
  </div>
</template>

<script setup lang="ts">
const { result, search } = useAlgoliaSearch('test_index')

onMounted(async () => {
  await search({ query: 'Samsung' })
})
</script>