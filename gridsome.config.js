const tailwind = require('tailwindcss');
const postcssPlugins = [tailwind()];

module.exports = {
	siteName: 'Greasby Opticians',
	siteDescription: 'Description for Greasby Opticians',
	plugins: [
		{
			use: '@gridsome/vue-remark',
			options: {
				typeName: 'Documentation',
				baseDir: './static/updates',
				pathPrefix: 'updates',
				template: './src/templates/Updates.vue',
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
};
