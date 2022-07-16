import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    [
      "@nuxtjs/algolia",
      {
        apiKey: process.env.ALGOLIA_SEARCH_API_KEY,
        applicationId: process.env.ALGOLIA_APP_ID,
        indexer: {
          storyblok: {
            secret: process.env.INDEXER_SECRET,
            algoliaAdminApiKey: process.env.ALGOLIA_ADMIN_KEY,
            indexName: process.env.ALGOLIA_INDEX_NAME,
            accessToken: process.env.STORYBLOK_ACCESS_TOKEN
          }
        }
      },
    ],
    ["@storyblok/nuxt", { accessToken: process.env.STORYBLOK_ACCESS_TOKEN }],
  ],
});
