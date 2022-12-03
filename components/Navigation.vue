<template>
  <nav class="py-2 bg-white">
    <div
      class="container flex flex-wrap items-center max-w-4xl px-10 py-4 mx-auto lg:px-0 lg:flex-nowrap"
    >
      <nuxt-link
        to="/"
        class="flex-shrink-0 text-4xl font-bold text-gray-700 transition ease-in-out hover:text-purple-600"
      >
        JA.
      </nuxt-link>
      <a
        href="#"
        class="relative flex flex-col justify-center w-8 h-8 ml-auto lg:hidden"
        @click.prevent="mobileNavOpen = !mobileNavOpen"
      >
        <span
          class="w-8 h-1 mb-1 bg-gray-500 rounded"
          :class="{
            'transition ease-in-out rotate-45 absolute right-0': mobileNavOpen,
            'transition ease-in-out': !mobileNavOpen,
          }"
        ></span>
        <span
          class="w-8 h-1 mb-1 bg-gray-500 rounded"
          :class="{
            hidden: mobileNavOpen,
          }"
        ></span>
        <span
          class="w-8 h-1 mb-1 bg-gray-500 rounded"
          :class="{
            'transition ease-in-out -rotate-45 absolute right-0': mobileNavOpen,
            'transition ease-in-out': !mobileNavOpen,
          }"
        ></span>
      </a>
      <div
        class="flex w-full"
        :class="{
          'hidden lg:flex': !mobileNavOpen,
        }"
      >
        <div
          @click.prevent="mobileNavOpen = !mobileNavOpen"
          class="flex flex-col mt-5 space-y-5 lg:ml-auto lg:mt-0 lg:flex-row lg:items-center lg:space-x-2 lg:space-y-0"
        >
          <nuxt-link
            to="/about"
            class="text-base transition ease-in-out hover:text-purple-600"
            :class="{
              'underline decoration-purple-600 font-bold text-purple-600':
                $route.name == 'about',
            }"
          >
            About</nuxt-link
          >
          <p class="hidden lg:flex">//</p>
          <nuxt-link
            to="/projects"
            class="text-base transition ease-in-out hover:text-purple-600"
            :class="{
              'underline decoration-purple-600 font-bold text-purple-600':
                $route.name == 'projects',
            }"
          >
            Projects</nuxt-link
          >
          <p class="hidden lg:flex">//</p>
          <nuxt-link
            to="/tutorials"
            class="text-base transition ease-in-out hover:text-purple-600"
            :class="{
              'underline decoration-purple-600 font-bold text-purple-600':
                $route.name == 'tutorials' || $route.name == 'tutorial-slug',
            }"
          >
            Tutorials</nuxt-link
          >
          <p class="hidden lg:flex">//</p>
          <nuxt-link
            to="/courses"
            class="text-base transition ease-in-out hover:text-purple-600"
            :class="{
              'underline decoration-purple-600 font-bold text-purple-600':
                $route.name == 'courses',
            }"
          >
            Courses</nuxt-link
          >
          <p class="hidden lg:flex">//</p>
          <nuxt-link
            to="/experience"
            class="text-base transition ease-in-out hover:text-purple-600"
            :class="{
              'underline decoration-purple-600 font-bold text-purple-600':
                $route.name == 'experience',
            }"
          >
            Experience</nuxt-link
          >
          <p class="hidden lg:flex">//</p>
          <nuxt-link
            to="/contact"
            class="text-base transition ease-in-out hover:text-purple-600"
            :class="{
              'underline decoration-purple-600 font-bold text-purple-600':
                $route.name == 'contact',
            }"
          >
            Contact</nuxt-link
          >
        </div>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  name: "Navigation",
  data() {
    return {
      mobileNavOpen: false,
    };
  },
};
</script>
