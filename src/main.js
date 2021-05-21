const express = require('express');
const path = require('path');
const morgan = require('morgan');
const app = express();
const port = 3000;
const routes = require('./routes');
//add static files
app.use(express.static(path.join(__dirname, 'public')));
app.use(
    express.urlencoded({
        extended: true,
    }),
);

app.use(express.json());
//HTTP LOgger
app.use(morgan('combined'));
//Template engine
var handlebars = require('express-handlebars');
const { query } = require('express');
app.engine(
    'hbs',
    handlebars({
        extname: '.hbs',
    }),
);

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resource/views'));
//route init
routes(app);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
