const Book = require('../models/Book');
class SiteController {
    index(req, res) {
        console.log(req.body);
        res.json(req.body);
    }
}

module.exports = new SiteController();
