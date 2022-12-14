const rootMain = require('../../../../.storybook/main');

module.exports = {
	...rootMain,

	addons: [...rootMain.addons],
	core: { ...rootMain.core, builder: 'webpack5' },
	staticDirs: [{ from: '../../../assets', to: '/assets' }],
	stories: [
		...rootMain.stories,
		'../src/lib/**/*.stories.mdx',
		'../src/lib/**/*.stories.@(js|jsx|ts|tsx)',
	],
	webpackFinal: async (config, { configType }) => {
		// apply any global webpack configs that might have been specified in .storybook/main.js
		if (rootMain.webpackFinal) {
			config = await rootMain.webpackFinal(config, { configType });
		}

		// add your own webpack tweaks if needed

		return config;
	},
};
