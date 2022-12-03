<template>
  <div class="container max-w-4xl px-10 py-10 mx-auto space-y-8 md:px-0">
    <div class="grid grid-cols-1 gap-12 lg:grid-cols-2">
      <div
        data-aos="fade-up"
        data-aos-delay="200"
        data-aos-duration="600"
        class="w-1/2 mx-auto lg:w-full lg:order-last"
      >
        <img
          src="~assets/images/profile.jpeg"
          alt=""
          class="w-full rounded-lg"
        />
      </div>
      <div class="space-y-8">
        <p
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="700"
          class="text-4xl font-bold text-center text-gray-600 lg:text-start"
        >
          <span class="text-gray-400">/</span>about me
          <span class="text-gray-400">.</span>
        </p>
        <p data-aos="fade-up" data-aos-delay="200" data-aos-duration="800">
          Hi, I'm Jay-Are Ocero and I'm 23 years old. I recently graduated last
          August, 2022.
        </p>
        <p data-aos="fade-up" data-aos-delay="200" data-aos-duration="800">
          I am a
          <span class="font-bold text-purple-600"> full stack developer</span>
          and
          <span class="font-bold text-purple-600"> UI/UX designer </span> and
          have been working in this field for almost 5 long years. You might be
          asking how a recent graduate acquired 5 years of experience. I'll
          explain. I began as a working student since Grade 12 (Senior High
          School). I've been producing a lot of graphic designs, including
          banners, graphics for social media, and blog images. These are the
          main things I do, along with a little minor video editing. This work
          aids in my study during my years in school. Working up until my fourth
          year of college, I switch from graphic designer to UI/UX designer till
          I land my ideal position as a web developer after I graduated.
        </p>
      </div>
    </div>

    <div class="space-y-8">
      <p
        data-aos="fade-up"
        data-aos-delay="200"
        data-aos-duration="900"
        class="font-bold text-gray-700"
      >
        You know what? I still consistently make the
        <span class="text-purple-600">dean's list </span> and graduate with
        latin honors as <span class="text-purple-600">Cum Laude</span> despite
        my struggles and sacrifices.
      </p>
      <p data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
        I have always been passionate about web development, which led me to
        pursue a
        <span class="font-bold text-purple-600"
          >Bachelor of Science in Information Technology</span
        >
        degree. I am constantly seeking out new technologies and staying
        up-to-date on trends in the industry.
      </p>
      <p data-aos="fade-up" data-aos-delay="200" data-aos-duration="1100">
        Here are a few technologies I’ve been working with recently:
      </p>
      <ul
        data-aos="fade-up"
        data-aos-delay="200"
        data-aos-duration="1200"
        class="flex flex-row px-4 space-x-8 text-gray-500 list-disc"
      >
        <div>
          <li>Laravel (PHP Framework)</li>
          <li>Inertia.js</li>
          <li>Vue.js</li>
        </div>
        <div>
          <li>Nuxt.js</li>
          <li>Livewire</li>
          <li>Tailwind CSS</li>
        </div>
        <div>
          <li>Bootstrap</li>
        </div>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  layout: "secondary",
  name: "AboutPage",
  head: {
    title: "About",
  },
};
</script>
