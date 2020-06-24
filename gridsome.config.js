const tailwind = require('tailwindcss')
const postcssPlugins = [tailwind()]

module.exports = {
  siteName: 'Greasby Opticians',
  siteDescription: 'Description for Greasby Opticians',
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
