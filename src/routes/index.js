const newsRouter = require('./news');
const siteRouter = require('./site');
const bookRouter = require('./book');

function route(app) {
    app.use('/news', newsRouter);
    app.use('/books', bookRouter);
    app.use('/site', siteRouter);

    // app.use('/', siteRouter);
}

module.exports = route;
