var express = require('express')
var app = express()
var indexControllers = require('./controllers/index.js');

// Router
app.get('/', indexControllers.sayHello);

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
