var moviesModels = require('../models/movies.js');

function listMovies(req, res){
  var callback = function(err, movies){
    if(err){
      return res.status(500).send(err);
    }
    res.render('movies.hbs', {movies: movies});
  }

  if (req.query.search) {
    moviesModels.searchByTitle(req.query.search, callback);
  }else{
    moviesModels.getAllMovies(callback);
  }
}

module.exports = {
  listMovies: listMovies
}
