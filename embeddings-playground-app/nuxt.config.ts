// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  runtimeConfig:{
    //private keys
    hfAccessToken: process.env.HF_ACCESS_TOKEN
    //public keys
    // public: {
      // key: process.env.YOUR_PUBLIC_KEY
    // }
  }
})
