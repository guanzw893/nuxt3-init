// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/stylelint-module',
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt'
  ],
  css: ['~/assets/css/main.css'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "~/assets/css/_colors.scss";'
        }
      }
    }
  },
  stylelint: {
    lintOnStart: false,
    chokidar: true
  },
  pinia: {
    storesDirs: ['./stores/**']
  },
  piniaPersistedstate: {
    storage: 'localStorage'
  }
})
