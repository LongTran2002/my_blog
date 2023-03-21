const Book = require('../models/Book');
const { multipleMongooseToObject } = require('../../util/moongose');
class NewsController {
    //[GET]/news
    index(req, res, next) {
        Book.find()
            .then((books) => {
                res.render('news', { books: multipleMongooseToObject(books) });
            })
            .catch(function (err) {
                next(err);
            });
    }
    show(req, res) {
        res.send('Hello, world!');
    }
    test(req, res) {
        res.render('test');
    }
}

module.exports = new NewsController();
