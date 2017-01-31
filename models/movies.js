var sqlite3 = require('sqlite3').verbose();
var databaseFile = process.env.DATABASE_FILE;
var db = new sqlite3.Database(databaseFile);

db.on('trace', function(stmt){
  console.log(stmt);
})

function getAllMovies(callback) {
  db.all("SELECT title FROM movies", callback);
}

function searchByTitle(searchString, callback){
  var query = 'SELECT title FROM movies WHERE instr(title, ?) > 0;';
  console.log(query);
  db.all(query, searchString, callback);
}

module.exports = {
  getAllMovies: getAllMovies,
  searchByTitle: searchByTitle
};
