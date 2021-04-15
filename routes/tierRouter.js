const express            = require('express');
const { render }         = require('../app');
const { tierController } = require('../controllers');

const router = express.Router();

router.post('/', tierController.createTier);
router.get('/', tierController.findAllTier);
router.get('/:name', tierController.findOneTier);


module.exports = router;