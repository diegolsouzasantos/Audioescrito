const express = require('express');

const router = express.Router();

router.get('/', function (req, res) {
	res.sendFile(path.join(__dirname + '/index.html'));
});

router.post('/', function (req, res, next) {

});

module.exports = router;