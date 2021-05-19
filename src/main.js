const express = require('express')
const path = require('path')
const morgan = require('morgan')
const app = express()
const port = 3000
    //HTTP LOgger
app.use(morgan('combined'))
    //Template engine
var handlebars = require('express-handlebars');
app.engine('hbs', handlebars({
    extname:'.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resource/views'));
app.get('/', (req, res) => {
    res.render('home');
})
app.get('/news', (req, res) => {
    res.render('news');
})
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})