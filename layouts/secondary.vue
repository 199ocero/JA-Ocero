<template>
  <div
    class="flex flex-col justify-between w-full min-h-screen bg-contain bg-grid-pattern bg-opacity-10"
  >
    <div>
      <Navigation />
      <Nuxt />
    </div>

    <Footer />
  </div>
</template>

<script>
export default {
  name: "secondary",
};
</script>
