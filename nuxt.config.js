export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    htmlAttrs: {
      lang: "en",
    },
    titleTemplate: "%s | Jay-Are Ocero",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "Jay-Are Ocero is a full stack developer and UI/UX designer who always been passionate about web development and constantly seeking out new technologies and staying up-to-date on trends in the industry.",
      },
      { name: "format-detection", content: "telephone=no" },
      {
        hid: "og:title",
        property: "og:title",
        content: "Jay-Are Ocero",
      },
      {
        hid: "og:description",
        property: "og:description",
        content:
          "Jay-Are Ocero is a full stack developer and UI/UX designer who always been passionate about web development and constantly seeking out new technologies and staying up-to-date on trends in the industry.",
      },
      {
        hid: "og:type",
        property: "og:type",
        content: "website",
      },
      {
        hid: "og:image",
        property: "og:image",
        content: "/og.jpg",
      },
      {
        hid: "og:url",
        property: "og:url",
        content: "https://jaocero.com/",
      },
      {
        property: "og:locale",
        content: "de_DE",
      },
    ],
    link: [
      {
        hid: "canonical",
        rel: "canonical",
        href: "https://jaocero.com/",
      },
      { rel: "icon", type: "image/x-icon", href: "/favicon.png" },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["@/assets/css/main.css", "@fortawesome/fontawesome-free/css/all.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{ src: "@/plugins/aos", mode: "client" }],
  purgeCSS: {
    whitelist: [
      "aos-init",
      "aos-animate",
      "data-aos-delay",
      "data-aos-duration",
      "fade-up",
    ],
  },

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ["@nuxt/postcss8", "vue-notion/nuxt", "@nuxtjs/sitemap"],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: "/",
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },

  // Sitemap
  sitemap: {
    hostname: "https://jaocero.com",
  },

  generate: {
    fallback: "404.html",
  },

  publicRuntimeConfig: {
    notionTableID: process.env.NOTION_PUBLIC_ID,
  },
};
