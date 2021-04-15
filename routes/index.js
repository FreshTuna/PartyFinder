const express = require('express');
const router  = express.Router();

const homeRouter = require('./homeRouter');
const userRouter = require('./userRouter');
const roomRouter = require('./roomRouter');
const tierRouter = require('./tierRouter');

router.use('/', homeRouter);
router.use('/', userRouter);
router.use('/room', roomRouter);
router.use('/tier', tierRouter);

module.exports = router;
