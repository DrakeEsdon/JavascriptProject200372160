require('dotenv').config();

//mongoose
const mongoose = require('mongoose');
mongoose.connect(process.env.DB_URI, {auth: {
    user: process.env.DB_USER,
    password: process.env.DB_PASS
}, useNewUrlParser: true
}).catch(err => console.error(`ERROR: ${err}`));

const express = require('express');
const path = require('path');


const app = express();

// view path
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');


//body parser
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

//our routes
const routes = require('./routes.js');
app.use('/', routes);

//dynamic port listening
const port = process.env.PORT || 4000;       
app.listen(port, () => console.log(`Listening on port ${port}`));

// Our Views
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use('/css', express.static('assets/stylesheets'));
app.use('/js', express.static('assets/javascripts'));
app.use('/images', express.static('assets/images'));