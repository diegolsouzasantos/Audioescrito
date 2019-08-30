const mongo = require('mongodb').MongoClient;
const url = 'mongodb+srv://audioescritomaster:yFNuM1JL8oSOI09F@hpc-x-nwjtd.mongodb.net/test?retryWrites=true&w=majority';

const User = ({
  email: {
    type: String,
    required: { type: String, lowercase: true, required: [true, "at least one character, one @ sign and one dot"], match: [/\S+@\S+\.\S+/, 'is invalid'] }
  },
  password: {
    type: String,
    required: true
  }
});

User.login = function(currentEmail, currentPassword, callback) {
	mongo.connect(url, (err, client) => {
		if (err) {
			console.log(err);
		} else {
			const db = client.db('Audioescrito');
			const collection = db.collection('users');
			collection.find( {email: currentEmail} ).toArray((err, result) => {
				if (err) {
					return callback(err)
				} else if (result.length == 0) {
					let err = new Error('Não existe uma conta com este email!');
					err.status = 401;
					return callback(err);
				}
				currentPassword = Buffer.from(currentPassword).toString('Base64');
				if(result[0].password == currentPassword) {
					return callback(null, result);
				} else {
					return callback();
				}
			});			
		}
	});
};

User.register = function (newUser, callback) {
	mongo.connect(url, (err, client) => {
		if (err) {
			console.log(err);
		} else {
			const db = client.db('Audioescrito');
			const collection = db.collection('users');
			collection.find( {email: newUser.email} ).toArray((err, result) => {
				if (err) {
					return callback(err);
				} else if(result.length > 0) {
					let err = new Error('Já existe uma conta com este email!');
					err.status = 409;
					return callback(err);
				} else {
					newUser.password = Buffer.from(newUser.password).toString('Base64');
					
					collection.insertOne( {email: newUser.email, password: newUser.password}, (err, result) => {
						if (err) {
							callback(err);
						} else { 
							return callback(null, result);
						}
					});
				}
			});
		}
	});
}

module.exports = User;