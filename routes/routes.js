const express = require('express');

const router = express.Router();

router.post('/login', userController.login);
router.post('/register', userController.register);

router.get('/users/:_id', userController.get);
router.delete('/users/:_id', userController.delete);
router.put('/users/:_id', userController.update);

router.post('/texts', textController.post);
router.get('/texts/:_id', textController.get);
router.delete('/texts/:_id', textController.delete);
router.put('/texts/:_id', textController.update);

module.exports = router;