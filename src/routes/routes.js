const express = require('express');
const userController = require('../controller/userController');
const textController = require('../controller/textController');

const router = express.Router();


router.post('/users', userController.register);
router.post('/users/login', userController.login);
router.delete('/users/:_id', userController.erase);

router.post('users/:_id/texts', textController.create);
router.get('users/:_id/texts/', textController.list);
router.get('users/:_id/texts/:_id', textController.get);
router.delete(':users/:_id/texts/:_id', textController.erase);
router.put(':users/:_id/texts/:_id', textController.update);

/* nope button
router.get('/users/:_id', userController.get);
router.put('/users/:_id', userController.update);
*/

module.exports = router;