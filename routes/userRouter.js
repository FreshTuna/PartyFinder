const express            = require('express');
const { render }         = require('../app');
const { userController } = require('../controllers');

const router = express.Router();

router.post('/riot', userController.sendToRiot);
router.post('/usercookie', userController.createUserCookie);
router.post('/user', userController.createUser);
router.get('/user', userController.findUser);

module.exports = router;