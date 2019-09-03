var mongoose = require('mongoose');

var User = new mongoose.Schema({
	email: {
		type: String,
		unique: true,
		required: { type: String, lowercase: true, required: [true, "at least one character, one @ sign and one dot (.)"], match: [/\S+@\S+\.\S+/, 'is invalid'] }
	},
	password: {
		type: String,
		required: true
	}
});

var User = mongoose.model('User', User);
module.exports = User;