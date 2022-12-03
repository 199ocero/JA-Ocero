<template>
  <div class="container max-w-4xl px-10 py-10 mx-auto lg:px-0">
    <div class="space-y-12 text-center">
      <div v-if="error.statusCode === 404" class="items-center space-y-3">
        <p class="text-6xl">😞</p>
        <h1 class="text-6xl font-bold text-red-500">We looked everywhere.</h1>
        <p class="text-4xl text-gray-700">Looks like this page is missing.</p>
      </div>
      <p v-else class="text-4xl text-gray-700">
        Looks like something went wrong.
      </p>
      <div>
        <nuxt-link
          to="/"
          class="px-12 py-5 text-white transition ease-in-out bg-gray-700 rounded-lg hover:bg-gray-900"
          >Go Back</nuxt-link
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["error"],
  head: {
    title: "Error",
  },
};
</script>
