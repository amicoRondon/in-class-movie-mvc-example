var express = require('express')
var app = express()
var indexControllers = require('./controllers/index.js');
var moviesControllers = require('./controllers/movies.js');

var exphbs = require('express-handlebars');
app.engine('.hbs', exphbs({defaultLayout: 'single', extname: '.hbs'}));
app.set('view engine', '.hbs');


// Router
app.get('/', indexControllers.sayHello);
app.get('/movies', moviesControllers.listMovies);

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
