const express = require('express');
const router = express.Router();
const sitecontroller = require('../app/controllers/siteControllers');

router.post('/home', sitecontroller.index);
router.use('/:slug', sitecontroller.index);
router.use('/', sitecontroller.index);

module.exports = router;
