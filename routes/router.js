var express = require('express');
var router = express.Router();
var User = require('../models/user');

router.get('/', function (req, res) {
	res.sendFile(path.join(__dirname + '/index.html'));
});

router.post('/', function (req, res, next) {
	if (req.body.email && req.body.password) {
		User.login(req.body.email, req.body.password, function (error, result) {
			if (error || !result) {
				var err = new Error('Não existe uma conta com este email ou a senha está incorreta!');
				err.status = 401;
				return next(err);
			} else {
				return res.send('Login realizado com sucesso!\n' + result);
			}
		});
	} else if (req.body.newUserEmail && req.body.newUserPassword) {

		let newUser = {
			email: req.body.newUserEmail,
			password: req.body.newUserPassword,
		}

		User.register(newUser, function (error, result) {
			if (error) {
				return next(error);
			} else {
				return res.send('Conta cadastrada com sucesso!\n' + result);
			}
		});
	} else {
		var err = new Error('Preencha os campos corretamente para fazer login');
		err.status = 400;
		return next(err);
	}
});

module.exports = router;