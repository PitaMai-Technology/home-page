// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },

  dir: {
    layouts: "layouts", // デフォルト設定
  },

  app: {
    baseURL: "/", // デプロイ先の基準URLに応じて変更
    buildAssetsDir: "/_nuxt/", // デフォルト
  },

  modules: ["@nuxt/image", "@nuxtjs/seo"],

  image: {
    // 画像モジュールの設定
    dir: "public",
  },

  css: [
    "@fortawesome/fontawesome-svg-core/styles.css",
    "~/assets/css/main.css",
  ],

  sitemap: {
    xsl: false,
  },

  site: {
    url: "https://pitamai.com",
    name: "ピタマイ(PitaMai)",
  },
  seo: {
    canonicalLowercase: false
  },

  plugins: ["~/plugins/fontawesome.js"],
});