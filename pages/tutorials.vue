<template>
  <div class="container max-w-4xl px-10 py-10 mx-auto space-y-8 lg:px-0">
    <p class="text-4xl font-bold text-center text-gray-600">
      <span class="text-gray-400">/</span>tutorials
      <span class="text-gray-400">.</span>
    </p>
    <div class="space-y-3">
      <p><i class="fa-solid fa-meteor"></i> Connected to Notion API</p>
      <ul v-if="posts != ''" class="space-y-5">
        <li
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="600"
          v-for="(post, k) in posts"
          :key="k"
        >
          <div
            class="flex flex-col items-center p-4 space-y-5 bg-white rounded-lg shadow lg:space-y-0 lg:space-x-5 lg:items-start lg:flex-row"
          >
            <div class="md:w-70 lg:w-96">
              <img
                :src="`${post.thumbnail[0].url}`"
                alt=""
                class="rounded-lg"
              />
            </div>
            <div class="w-full lg:w-auto">
              <p class="text-sm text-gray-600">
                {{ formatDate(post.date) }}
              </p>
              <NuxtLink
                v-if="post.slug"
                :to="'tutorial/' + post.slug"
                class="text-xl font-bold text-purple-600 hover:underline"
              >
                {{ post.title }}
              </NuxtLink>
              <p class="text-base text-gray-400">{{ post.preview }}</p>
              <div class="flex space-x-2">
                <div
                  class="px-2 py-1 bg-gray-700 rounded-lg"
                  v-for="(tag, index) in post.tags"
                  :key="index"
                >
                  <p class="text-sm text-white">{{ tag }}</p>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
      <p v-else class="text-2xl">
        Sorry, the tutorial articles are still in the making.
      </p>
    </div>
  </div>
</template>
<script>
export default {
  layout: "secondary",
  name: "TutorialPage",
  head: {
    title: "Tutorial",
  },
  async asyncData({ $notion, params, error, $config: { notionTableID } }) {
    const pageTable = await $notion.getPageTable(notionTableID);
    // sort published pages
    const posts = pageTable
      .filter((page) => page.published)
      .sort((a, b) => a.date - b.date);
    return {
      posts,
    };
  },
  methods: {
    formatDate(date) {
      const options = { year: "numeric", month: "long", day: "numeric" };
      return new Date(date).toLocaleDateString("en", options);
    },
  },
};
</script>
<style>
@import "vue-notion/src/styles.css";
</style>
