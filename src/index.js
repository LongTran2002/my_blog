const express = require('express');
const morgan = require('morgan');
const path = require('path');
const { engine } = require('express-handlebars');
const app = express();
const route = require('./routes/index.js');
const bodyParser = require('body-parser');

const db = require('./config/db');

route(app);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Conect to DB
db.connect();

//view engine setup
app.engine('.hbs', engine({ extname: '.hbs' }));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'resources/views'));

//Static Folder
app.use(express.static(path.join(__dirname, 'public')));

// app.use(morgan('combined'))

app.use('/static', express.static(path.join(__dirname, 'public')));

app.listen(3000);
