const tailwind = require('tailwindcss')
const postcssPlugins = [tailwind()]

module.exports = {
  siteName: 'Greasby Opticians',
  titleTemplate: '%s | Greasby Opticians',
  siteDescription:
    'Greasby Opticians is an independent opticians which offers excellent quality eyecare and an extensive range of spectacle frames and contact lenses. We have served the community of Greasby for over 30 years.',
  icon: {
    favicon: {
      src: './src/assets/images/GO-favicon.png',
      sizes: [16, 32, 96],
    },
  },
  plugins: [
    {
      use: '@gridsome/vue-remark',
      options: {
        typeName: 'Documentation',
        baseDir: './static/announcements',
        pathPrefix: 'announcements',
        template: './src/templates/AnnouncementsTemp.vue',
      },
    },
  ],
  css: {
    loaderOptions: {
      postcss: {
        plugins: postcssPlugins,
      },
    },
  },
}
