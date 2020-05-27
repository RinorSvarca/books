var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());

const cors = require('cors');
const corsOptions = {
    origin: 'http://localhost:8080',
    optionsSuccessStatus: 200
};
app.use(cors(corsOptions));

const db = require('./app/config/db.config');

db.sequelize.sync({force: true}).then(() => {
    console.log('Drop and Resync with { force: true}');
});

require('./route/book.route')(app);

var server = app.listen(8080,function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log("App is listening on port", port);
});