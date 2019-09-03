const user = require('../models/user');

const database = require('../lib/database/index');

module.exports = {

	// resolver
	getUserBy: async (args) => {
		try {
			database.connect();
			const requestUser = await user.findOne(args);

           	// resolver 
			database.disconnect();
			return requestUser;
		} catch (error) {
			throw error;
		}
	},

	createUser: async (args) => {
		try {
			database.connect();
			const requestUser = await user.create(args);
			
			// resolver
			console.log(requestUser);
			database.disconnect();

			return requestUser;
		} catch (error) {
			throw error;
		}
	},

	updateUser: (id, args) => {
		try {
			database.connect();
			const requestUser = user.findByIdAndUpdate(id, { $set: args }, { new: true });
			//database.connection.close();
			return requestUser;
		} catch (error) {
			throw error;
		}
	},

	deleteUser: (id) => {
		try {
			database.connect();
			const requestUser = user.findByIdAndDelete(id);
			//database.connection.close();
			return requestUser;
		} catch (error) {
			throw error;
		}
	},
};