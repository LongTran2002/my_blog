const express = require('express');
const router = express.Router();
const bookcontroller = require('../app/controllers/bookController');
router.get('/create', bookcontroller.create);
router.post('/store', bookcontroller.store);
router.get('/:slug', bookcontroller.show);

module.exports = router;
