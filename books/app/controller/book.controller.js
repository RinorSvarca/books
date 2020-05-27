const db = require('../config/db.config');
const Books = db.books;

//Post a Book
exports.create = (req, res) => {
    Books.create({
        title: req.body.title,
        author: req.body.author,
        description: req.body.description;
    published: req.body.published
}).
    then(book => {
        res.send(book);
    }).catch(err => {
        res.status(500).send("Error -> " + err);
    })
};

//Fetch all Books
exports.findAll = (req, res) => {
    Books.findAll().then(books => {
        res.send(books);
    }).catch(err => {
        res.status(500).send("Error ->" + err);
    })
};

//Find a Customer by Id
exports.findById = (req, res) => {
    Books.findById(req.params.bookId).then(book => {
        res.send(book);
    }).catch(err => {
        res.status(500).send("Erro ->" + err);
    })
};


//Update a Book
exports.update = (req, res) => {
    var book = req.body;
    const id = req.params.bookId;
    Books.update({
            title: req.body.title,
            author: req.body.author,
            description: req.body.description,
            published: req.body.published
        },
        {
            where: {
                id: req.params.bookId
            }
        })
        .then(() => {
            res.status(200).send(book);
        }).catch(err => {
            res.status(500).send("Error ->" + err);
    })
};

//Delete a Book by id
exports.delete = (req,res) => {
    oconst id = req.params.bookId;
    Books.destroy({
        where:{id: id}
    }).then(() => {
        res.status(200).send('Book has been deleted');
    }).catch(err => {
        res.status(500).send("Fail to delete!");
    });
};














