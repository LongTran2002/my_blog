const express = require('express');
const router = express.Router();
const newscontroller = require('../app/controllers/newsController');
router.get('/test', newscontroller.test);

router.use('/:slug', newscontroller.show);
router.use('/', newscontroller.index);

module.exports = router;
