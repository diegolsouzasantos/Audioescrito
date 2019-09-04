const express = require('express');
const userController = require('../controller/userController');
const textController = require('../controller/textController');

const router = express.Router();


router.post('/users', userController.register);
router.post('/users/login', userController.login);
router.delete('/users/:email', userController.erase);

router.post('/users/:email/texts', textController.add);
router.get('/users/:email/texts/', textController.list);
router.get('/users/:email/texts/:fileName', textController.getOne);
router.delete('/users/:email/texts/:fileName', textController.erase);
router.put('/users/:email/texts/:fileName', textController.update);

/* nope button
router.get('/users/:_id', userController.get);
router.put('/users/:email', userController.update);
*/

module.exports = router;