// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  build: {
    transpile: ['vuetify'],
  },
  modules: [(_options, nuxt) => {
    nuxt.hooks.hook('vite:extendConfig', (config) => {
      // @ts-expect-error
      config.plugins.push(vuetify({ autoImport: true }))
    })
  },'@nuxt/fonts', '@nuxt/icon', '@nuxt/image', '@nuxt/ui', '@sidebase/nuxt-auth'],
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
  runtimeConfig: {
    AUTH_SECRET: process.env.AUTH_SECRET,
    GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,    
    GITHUB_CLIENT_ID: process.env.GITHUB_CLIENT_ID,
    GITHUB_CLIENT_SECRET: process.env.GITHUB_CLIENT_SECRET,
  },
  auth: {
    globalAppMiddleware: true,
    originEnvKey: 'AUTH_ORIGIN',
    baseURL: process.env.API_BASE_AUTH || 'http://localhost:3000/api/auth',
    provider: {
      type: 'authjs',
      addDefaultCallbackUrl: true,
    },
    sessionRefresh: {
      enablePeriodically: true,
      enableOnWindowFocus: true,
    },
  },
})