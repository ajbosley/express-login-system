const express = require('express');
const mongoose = require('mongoose');
const hbs = require('express-hbs');
const bodyParser = require('body-parser');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 3001;
const user = require('./api/routes/user.route');
const spotify = require('./api/routes/spotify.route');

app.listen(port, function () {
    console.log('Server is running on Port', port);
});

// Connect to the database

mongoose.connect('mongodb://localhost/lifeGraph').then(resp => console.log('Connected to the lifeGraph database'));

// Body Parser middleware
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());
app.use('/user', user);
app.use('/api/spotify', spotify);


app.use(express.static(__dirname + '/front-end/life-graph/build/'));