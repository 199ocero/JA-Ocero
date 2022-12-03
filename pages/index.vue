<template>
  <div
    class="container relative max-w-4xl px-10 py-10 mx-auto space-y-12 md:px-0"
  >
    <div class="space-y-5">
      <div
        data-aos="fade-up"
        data-aos-delay="200"
        data-aos-duration="500"
        class="flex justify-center space-x-2 lg:justify-start"
      >
        <p>Hi</p>
        <div class="animate-wiggle">👋</div>
        <p>, my name is</p>
      </div>
      <h1
        data-aos="fade-up"
        data-aos-delay="200"
        data-aos-duration="600"
        class="text-5xl font-bold text-center text-gray-800 glitch lg:text-start lg:text-8xl"
      >
        Jay-Are Ocero.
      </h1>
      <p
        data-aos="fade-up"
        data-aos-delay="200"
        data-aos-duration="700"
        class="text-lg font-bold text-center lg:text-start"
      >
        Freelance Full Stack Developer & UI/UX Designer
      </p>
    </div>
    <div
      data-aos="fade-up"
      data-aos-delay="200"
      data-aos-duration="800"
      class="space-y-5 text-center lg:text-start"
    >
      <p>
        I am passionate about creating high-quality websites and web/mobile apps
        that benefit everyone else around me. I incorporate fully responsive
        design and realistic look and style to create an amazing user interface
        with an excellent user experience.
      </p>
    </div>
    <div
      class="flex flex-col items-center justify-center space-y-8 lg:justify-between lg:flex-row lg:space-y-0"
    >
      <div
        data-aos="fade-up"
        data-aos-delay="200"
        data-aos-duration="900"
        class="flex flex-col items-center space-y-5 lg:space-x-8 lg:space-y-0 lg:flex-row"
      >
        <nuxt-link
          to="/about"
          class="transition ease-in-out hover:text-purple-600"
          >Discover more about me
        </nuxt-link>
        <div class="hidden lg:flex">
          <i class="text-gray-500 fa-solid fa-angles-left bounce-side"></i>
        </div>
        <div class="flex items-center justify-center lg:hidden">
          <i class="text-gray-500 fa-solid fa-angles-up animate-bounce"></i>
        </div>
      </div>
      <div
        data-aos="fade-up"
        data-aos-delay="200"
        data-aos-duration="1000"
        class="flex flex-col items-center text-base text-gray-500 lg:space-x-5 lg:flex-row"
      >
        <div class="flex items-center space-x-5">
          <a
            href="mailto: freelanceocero@gmail.com"
            class="transition ease-in-out hover:text-purple-600"
            >freelanceocero@gmail.com</a
          >
          <div
            class="w-5 md:w-10 h-0.5 rounded-lg bg-purple-600 hidden lg:flex"
          ></div>
        </div>
        <div class="flex flex-row space-x-5">
          <a
            href="https://github.com/199ocero"
            class="transition ease-in-out hover:text-purple-600"
            ><i class="fa-brands fa-github"></i
          ></a>
          <a
            href="https://www.behance.net/freelance-ocero"
            class="transition ease-in-out hover:text-purple-600"
          >
            <i class="fa-brands fa-behance"></i
          ></a>
          <a
            href="https://www.linkedin.com/in/jay-are-ocero-891b63208/"
            class="transition ease-in-out hover:text-purple-600"
          >
            <i class="fa-brands fa-linkedin-in"></i
          ></a>
          <a
            href="https://www.facebook.com/jaocero/"
            class="transition ease-in-out hover:text-purple-600"
          >
            <i class="fa-brands fa-facebook-f"></i
          ></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "IndexPage",
  head: {
    title: "Full Stack Developer and UI/UX Designer",
  },
};
</script>
