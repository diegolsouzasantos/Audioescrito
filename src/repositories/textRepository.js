const mongoose = require('mongoose');
const textSchema = require('../models/text');
const model = mongoose.model('Text', textSchema);

module.exports = {
	getTextBy: (args) => {
		try {
			return model.findOne(args);
		} catch (error) {
			throw error;
		}
	},

	getTextsBy: (args) => {
		try {
			return model.find(args);
		} catch (error) {
			throw error;
		}
	},

	createText: (args) => {
		try {
			return model.create(args);
		} catch (error) {
			throw error;
		}
	},

	updateText: (fileName, args) => {
		try {
			return model.findOneAndUpdate(fileName, { $set: args }, { new: true });
		} catch (error) {
			throw error;
		}
	},

	deleteText: (args) => {
		try {
			return model.findOneAndRemove(args);
		} catch (error) {
			throw error;
		}
	}
}