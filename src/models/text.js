const mongoose = require('mongoose');

const Text = new mongoose.Schema({
	author: { 
			type: mongoose.Schema.Types.ObjectId, 
			ref: 'User',
	},
	fileName: {
		type: String,
		required: true,
	},
	content: {
		type: String,
		required: true,
	}
});

module.exports = Text;