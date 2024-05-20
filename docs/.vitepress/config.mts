import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Moon2Module",
  description: "Moon Animator Plugin Website",
  head: [
    ['link', { rel: 'icon', href: 'favicon.ico' }],
  ],
  base: '/moon2module/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Get Plugin', link: 'https://create.roblox.com/store/asset/17539091951/Moon2Module' },
      { text: 'Youtube Tutorial', link: 'https://youtu.be/UB-93iD-Xrk' }
    ],

    socialLinks: [
      { icon: 'discord', link: 'https://discord.gg/bGvVtGYdUW' }
    ]
  },
})
