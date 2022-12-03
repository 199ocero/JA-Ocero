<template>
  <div class="container max-w-4xl px-10 mx-auto bg-white lg:px-0">
    <NotionRenderer
      :blockMap="blockMap"
      :pageLinkOptions="pageLinkOptions"
      fullPage
      prism
      katex
    />
  </div>
</template>

<script>
import "prismjs";
import "prismjs/themes/prism-tomorrow.css";
export default {
  layout: "secondary",
  head: {
    title: "Tutorial",
  },
  data() {
    return {
      pageLinkOptions: { component: "NuxtLink", href: "to" },
    };
  },
  async asyncData({ $notion, params, error, $config: { notionTableID } }) {
    const pageTable = await $notion.getPageTable(notionTableID);
    const page = pageTable.find(
      (item) => item.published && item.slug === params.slug
    );
    const blockMap = await $notion.getPageBlocks(page ? page.id : params.slug);
    if (!blockMap || blockMap.error) {
      return error({ statusCode: 404, message: "Post not found" });
    }
    return { blockMap, page };
  },
};
</script>

<style>
@import "vue-notion/src/styles.css";

.notion-h1,
.notion-h2,
.notion-h3,
.notion-text {
  color: #37352f !important;
}
@media only screen and (max-width: 1024px) {
  .notion-title {
    font-size: 1.5em !important;
  }
}
</style>
