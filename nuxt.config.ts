// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      viewport: "width=500, initial-scale=1",
      title: "123",
      meta: [
        { name: "description", "content": "123" },
        { property: "og:title", "content": "123" },
        { property: "og:url", "content": "http://localhost:3000/" },
        { property: "og:description", "content": "123" },
      ]
    }
  },
  devtools: { enabled: true },
  components: {
    dirs: [
      {
        path: "@/components/global",
        global: true
      }
    ],
  },
  imports: {
    dirs: ['stores']
  },
  modules: ['@pinia/nuxt'],
})
