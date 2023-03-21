const Book = require('../models/Book');
const { mongooseToObject } = require('../../util/moongose');
class BookController {
    show(req, res, next) {
        Book.findOne({ slug: req.params.slug })
            .then((book) => {
                res.render('books/show', mongooseToObject(book));
            })
            .catch(next);
    }

    //[GET] /books/create
    create(req, res, next) {
        res.render('books/create');
    }

    //[POST] /books/store
    store(req, res, next) {
        console.log(req.body);
        res.json(req.body);
        // .render('books/create')
    }
}

module.exports = new BookController();
