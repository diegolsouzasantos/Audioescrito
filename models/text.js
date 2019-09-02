const User = require('../models/user');

const Text = ({
	author: {
		type: User.email,
		required: true,
	},
	fileName: {
		type: String,
		unique: true,
		required: true,
	},
	filePhotoPath: {
		type: String,
		required: true,
	},
	filePath: {
		type: String,
		required: true,
	}
});


module.exports = Text;