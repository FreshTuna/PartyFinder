const express            = require('express');
const { render }         = require('../app');
const { homeController } = require('../controllers');

const router = express.Router();

router.get('/', homeController.toHome);
router.get('/hello', homeController.sendHello);

module.exports = router;