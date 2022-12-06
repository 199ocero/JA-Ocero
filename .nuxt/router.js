import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _693ff20e = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _1b887ae1 = () => interopDefault(import('../pages/contact.vue' /* webpackChunkName: "pages/contact" */))
const _1530ee79 = () => interopDefault(import('../pages/courses.vue' /* webpackChunkName: "pages/courses" */))
const _401ab639 = () => interopDefault(import('../pages/experience.vue' /* webpackChunkName: "pages/experience" */))
const _4507cf09 = () => interopDefault(import('../pages/projects.vue' /* webpackChunkName: "pages/projects" */))
const _47446254 = () => interopDefault(import('../pages/tutorials.vue' /* webpackChunkName: "pages/tutorials" */))
const _57a96130 = () => interopDefault(import('../pages/tutorial/_slug.vue' /* webpackChunkName: "pages/tutorial/_slug" */))
const _ee10665a = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _693ff20e,
    name: "about"
  }, {
    path: "/contact",
    component: _1b887ae1,
    name: "contact"
  }, {
    path: "/courses",
    component: _1530ee79,
    name: "courses"
  }, {
    path: "/experience",
    component: _401ab639,
    name: "experience"
  }, {
    path: "/projects",
    component: _4507cf09,
    name: "projects"
  }, {
    path: "/tutorials",
    component: _47446254,
    name: "tutorials"
  }, {
    path: "/tutorial/:slug?",
    component: _57a96130,
    name: "tutorial-slug"
  }, {
    path: "/",
    component: _ee10665a,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
