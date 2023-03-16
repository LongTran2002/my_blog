const express = require('express')
const morgan = require('morgan')
const path = require('path'); 
const { engine } = require('express-handlebars');
const app = express()


//view engine setup
app.engine('.hbs', engine({extname: '.hbs'}));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'resources/views'));


//Static Folder
// app.use('/public', express.static(path.join(__dirname, 'public')))


app.use(morgan('combined'))

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.render('home');
});


app.listen(3000)