const express            = require('express');
const { render }         = require('../app');
const { roomController } = require('../controllers');

const router = express.Router();

router.post('/', roomController.createRoom);

module.exports = router;