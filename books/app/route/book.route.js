module.exports =function (app) {
    const books = require('../controller/book.controller.js');

    //Create a book
    app.post('/api/books/create', books.create);

    //Retrieve all books
    app.get('/api/books', books.findAll);

    //Retrieve a single Book by id
    app.get('/api/books/:bookId', books.findById);

    //Update a Book by Id
    app.put('/api/books/:bookId', books.update);

    //Delete a Book by Id
    app.delete('/api/books/:bookId', books.delete);
};