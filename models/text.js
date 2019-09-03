var mongoose = require('mongoose');
const User = require('../models/user');

const Text = new mongoose.Schema({
	author: {
		type: User.email,
		required: true,
	},
	fileName: {
		type: String,
		required: true,
	},
	filePhotoPath: {
		type: String,
	},
	filePath: {
		type: String,
		required: true,
	}
});

var Text = mongoose.model('Text', Text);
module.exports = Text;