// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    ssr: false,
    modules: ['@nuxtjs/strapi'],
    strapi: {
        url: 'http://localhost:1337',
        prefix: '',
    }
})
