const User = ({
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

const encryptPassword = function () {
	this.password = Buffer.from(password).toString('Base64');
};

const decryptPassword = function () {
	this.password = Buffer.from(password, 'base64').toString('ascii');
};

const validatePassword = function(password) {
	return this.password == password ? true : false;
};

module.exports = User;