// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/stylelint-module',
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    './modules/auto-import-eslint'
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "~/assets/css/_colors.scss" as *;'
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
