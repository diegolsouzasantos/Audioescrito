const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', function (req, res) {
	res.sendFile(__dirname + '/index.html');
});

app.post('/login', function (req, res) {
	let currentEmail = req.body.username;
	let currentPassword = req.body.password;
	
	const mongo = require('mongodb').MongoClient;
	const url = 'mongodb+srv://audioescritomaster:yFNuM1JL8oSOI09F@hpc-x-nwjtd.mongodb.net/test?retryWrites=true&w=majority'

	mongo.connect(url, (err, client) => {
		if (err) {
			console.log(err);
		} else {
			const db = client.db('Audioescrito');
			const collection = db.collection('users');
			collection.find( {email: currentEmail} ).toArray((err, result) => {
				if (err) {
					throw err;
				} else {
					if (result.length != 0) {
						currentPassword = Buffer.from(currentPassword).toString('Base64');
						if(result[0].password == currentPassword) {
							res.send('Login realizado com sucesso!');
						} else {
							res.send('Senha incorreta!');
						}
					} else {
						res.send("Email inválido!");
					}
				}
			});
		}
	});
});

app.post('/register', function (req, res) {
	let currentEmail = req.body.username;
	let currentPassword = req.body.password;
	
	const mongo = require('mongodb').MongoClient;
	
	const url = 'mongodb+srv://audioescritomaster:yFNuM1JL8oSOI09F@hpc-x-nwjtd.mongodb.net/test?retryWrites=true&w=majority'
	
	mongo.connect(url, (err, client) => {
		if (err) {
			console.log(err);
		} else {
			const db = client.db('Audioescrito');
			const collection = db.collection('users');
			collection.find( {email: currentEmail} ).toArray((err, result) => {
				if (err) {
					throw err;
				} else {
					if (result.length == 0) {
						currentPassword = Buffer.from(currentPassword).toString('Base64');
						
						collection.insertOne( {email: currentEmail, password: currentPassword}, (err, result) => {
							if (err) {
								throw err;
							} else { 
								res.send('Conta cadastrada com sucesso!');
							}
						});
					} else {
						res.send('Já existe uma conta com este email!');
					}
				}
			});
		}
	});
});

app.listen(1000, function () {
	console.log('Application running on port 1000!');
});