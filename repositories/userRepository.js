const mongo = require('mongodb').MongoClient;
const url = 'mongodb+srv://audioescritomaster:yFNuM1JL8oSOI09F@hpc-x-nwjtd.mongodb.net/test?retryWrites=true&w=majority';

const getUser = function (currentEmail, currentPassword, callback) {
	try {
		mongo.connect(url, (err, client) => {
			if (err) {
				console.log(err);
			} else {
				const db = client.db('Audioescrito');
				const collection = db.collection('users');
				let currentUser = {
					email: currentEmail,
					password: currentPassword,
				}
				collection.find({ email: currentUser.email }, result => {
					if (err) {
						return callback(err)
					} else if (typeof result == 'undefined') {
						console.log('Não existe uma conta com este email!');
						return callback(err);
					}
					currentUser.encryptPassword();
					if (currentUser.validatePassword(result.password)) {
						return callback(null, user);
					} else {
						return callback();
					}
				});
			}
			client.close();
		});
	} catch (err) {
		throw err;
	}
};

const createUser = function (newUser, callback) {
	try {
		mongo.connect(url, (err, client) => {
			if (err) {
				console.log(err);
			} else {
				const db = client.db('Audioescrito');
				const collection = db.collection('users');
				collection.find({ email: newUser.email }, result => {
					if (err) {
						return callback(err);
					} else if (typeof result != 'undefined') {
						console.log('Já existe uma conta de usuário com este email.');
						return callback(err);
					} else {
						newUser.encryptPassword();
						collection.insertOne({ email: newUser.email, password: newUser.password }, result => {
							if (err) {
								callback(err);
							} else {
								return callback(null, result);
							}
						});
					}
				});
				client.close();
			}
			
		});
		
	} catch (err) {
		throw err;
	}
}