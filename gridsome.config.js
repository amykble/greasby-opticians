// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config
const tailwind = require('tailwindcss');

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const postcssPlugins = [
    tailwind(),
]

module.exports = {
  siteName: 'Greasby Opticians',
  siteDescription: 'Description for Greasby Opticians',
  plugins: [],
  css: {
    loaderOptions: {
      postcss: {
        plugins: postcssPlugins,
      }
    }
  }
}
