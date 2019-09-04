const mongoose = require('mongoose');
const userSchema = require('../models/user');
const model = mongoose.model('User', userSchema);

module.exports = {
	getUserBy: (args) => {
		try {
			return requestUser = model.findOne(args);
		} catch (error) {
			throw error;
		}
	},

	createUser: (args) => {
		try {
			return model.create(args);
		} catch (error) {
			throw error;
		}
	},

	updateUser: async (email, args) => {
		try {
			return requestUser = model.findOneAndUpdate(email, { $set: args }, { new: true });
		} catch (error) {
			throw error;
		}
	},

	deleteUser: async (args) => {
		try {
			return model.findOneAndRemove(args);
		} catch (error) {
			throw error;
		}
	}
}
