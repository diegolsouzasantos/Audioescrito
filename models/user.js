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

module.exports = User;