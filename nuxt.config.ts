// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  modules: ['@nuxt/ui', '@nuxt/eslint'],
  css: ['@/assets/css/main.css'],
  ui: {
    colorMode: false
  },
  app: {
    head: {
      title: 'Nuxt Starter Kit',
      meta: [
        { name: 'description', content: 'A starter kit for Nuxt.js applications' }
      ]
    }
  }
})