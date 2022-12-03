<template>
  <div class="container max-w-4xl px-10 py-10 mx-auto space-y-8 lg:px-0">
    <p class="text-4xl font-bold text-center text-gray-600">
      <span class="text-gray-400">/</span>experience
      <span class="text-gray-400">.</span>
    </p>
    <div class="flex flex-col justify-center">
      <div class="w-full px-2 py-3">
        <div class="relative text-sm antialiased font-semibold text-gray-700">
          <!-- Vertical bar running through middle -->
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1000"
            class="absolute hidden w-1 h-full transform -translate-x-1/2 bg-gray-300 sm:block left-1/2"
          ></div>

          <!-- Left section, set by justify-start and sm:pr-8 -->
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="600"
            class="mt-6 sm:mt-0 sm:mb-12"
          >
            <div class="flex flex-col items-center sm:flex-row">
              <div class="flex items-center justify-start w-full mx-auto">
                <div class="w-full sm:w-1/2 sm:pr-8">
                  <div class="p-4 space-y-5 bg-white rounded-lg shadow">
                    <p class="text-lg font-bold text-purple-600">
                      October 2022 - Present
                    </p>
                    <div>
                      <p>Web Developer and UI/UX Designer</p>
                      <p>
                        <a
                          href="https://www.linkedin.com/company/toat-agency/"
                          class="text-purple-600 hover:underline"
                          >TOAT Agency</a
                        >
                        - Part Time
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="absolute flex items-center justify-center w-10 h-10 transform -translate-x-1/2 -translate-y-4 bg-green-600 border-4 border-white rounded-full left-1/2 sm:translate-y-0"
              >
                <i class="text-xl text-white fa-solid fa-check"></i>
              </div>
            </div>
          </div>

          <!-- Right section, set by justify-end and sm:pl-8 -->
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="700"
            class="mt-6 sm:mt-0 sm:mb-12"
          >
            <div class="flex flex-col items-center sm:flex-row">
              <div class="flex items-center justify-end w-full mx-auto">
                <div class="w-full sm:w-1/2 sm:pl-8">
                  <div class="p-4 space-y-5 bg-white rounded-lg shadow">
                    <p class="text-lg font-bold text-gray-600">
                      August 2022 - November 2022
                    </p>
                    <div>
                      <p>UI/UX Designer</p>
                      <p>
                        <a
                          href="https://www.linkedin.com/company/rentazon/"
                          class="text-purple-600 hover:underline"
                          >Rentazon</a
                        >
                        - Part Time
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="absolute flex items-center justify-center w-8 h-8 transform -translate-x-1/2 -translate-y-4 bg-red-600 border-4 border-white rounded-full left-1/2 sm:translate-y-0"
              >
                <i class="text-white fa-solid fa-xmark"></i>
              </div>
            </div>
          </div>

          <!-- Left section, set by justify-start and sm:pr-8 -->
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="800"
            class="mt-6 sm:mt-0 sm:mb-12"
          >
            <div class="flex flex-col items-center sm:flex-row">
              <div class="flex items-center justify-start w-full mx-auto">
                <div class="w-full sm:w-1/2 sm:pr-8">
                  <div class="p-4 space-y-5 bg-white rounded-lg shadow">
                    <p class="text-lg font-bold text-gray-600">
                      November 2017 - July 2022
                    </p>
                    <div>
                      <p>Web Developer and UI/UX Designer</p>
                      <p>
                        <a
                          href="https://www.linkedin.com/company/cazoomi/"
                          class="text-purple-600 hover:underline"
                          >SyncApps by Cazoomi</a
                        >
                        - Part Time
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="absolute flex items-center justify-center w-8 h-8 transform -translate-x-1/2 -translate-y-4 bg-red-600 border-4 border-white rounded-full left-1/2 sm:translate-y-0"
              >
                <i class="text-white fa-solid fa-xmark"></i>
              </div>
            </div>
          </div>

          <!-- Right section, set by justify-end and sm:pl-8 -->
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="900"
            class="mt-6 sm:mt-0"
          >
            <div class="flex flex-col items-center sm:flex-row">
              <div class="flex items-center justify-end w-full mx-auto">
                <div class="w-full sm:w-1/2 sm:pl-8">
                  <div class="p-4 space-y-5 bg-white rounded-lg shadow">
                    <p class="text-lg font-bold text-gray-600">
                      February 2022 - May 2022
                    </p>
                    <div>
                      <p>Web Developer</p>
                      <p>
                        <a
                          href="https://www.linkedin.com/company/wela-school-systems/"
                          class="text-purple-600 hover:underline"
                          >Wela School Systems</a
                        >
                        - Internship
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="absolute flex items-center justify-center w-8 h-8 transform -translate-x-1/2 -translate-y-4 bg-red-600 border-4 border-white rounded-full left-1/2 sm:translate-y-0"
              >
                <i class="text-white fa-solid fa-xmark"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  layout: "secondary",
  name: "ExperiencePage",
  head: {
    title: "Experience",
  },
};
</script>
