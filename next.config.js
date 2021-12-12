const path = require('path')

module.exports = {
	images: {
		loader: 'akamai',
		path: '',
	},
	trailingSlash: true,
	sassOptions: {
		includePaths: [path.join(__dirname, 'styles')],
	  },
}
