const express = require('express');
const userController = require('../controller/userController');
const textController = require('../controller/textController');

const router = express.Router();

router.post('/login', userController.login);
router.post('/register', userController.register);


/* nope button
router.post('/texts', textController.post);
router.get('/texts/:_id', textController.get);
router.delete('/texts/:_id', textController.delete);
router.put('/texts/:_id', textController.update);
router.get('/users/:_id', userController.get);
router.delete('/users/:_id', userController.delete);
router.put('/users/:_id', userController.update);
*/

module.exports = router;