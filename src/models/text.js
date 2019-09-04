const mongoose = require('mongoose');

const Text = new mongoose.Schema({
	author: { 
			type: String, 
			ref: 'User.email',
	},
	fileName: {
		type: String,
		index: true,
		required: true,
	},
	content: {
		type: String,
		required: true,
	}
});

module.exports = Text;