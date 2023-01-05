const MovieModel = require('../movies_db_resources/movieSchema');
const moviesData = require('../movies_db_resources/moviesData');


require('../movies_db_resources/db')


exports.addAllMovies = async (req, res) => {
      MovieModel.insertMany(moviesData)
      res.send(`<h1>${moviesData.length} Movies inserted</h1>`)
}


exports.listMovies = async (req, res) => {
      try {
            const movies = await MovieModel.find();
            console.log(movies);
            console.log('Total movies shown :  ' + movies.length);
            res.end()
      } catch (error) {
            console.log('Error while showing the movies');
      }
};
exports.pagination = async (req, res) => {
      let page = req.query.page
      let dataLimit = req.query.limit
      try {
            const movies =  await MovieModel.find().skip((page-1)*dataLimit).limit(dataLimit);
            console.log(movies);
            console.log('Total movies shown :  ' + movies.length);
            res.end()
      } catch (error) {
            console.log('Error while showing the movies');
      }
};


exports.filterByLangMovies = async (req, res) => {
      let lang = req.query.language;
      
      
      try {
            const movies = await MovieModel.find({language : lang});
            console.log(movies);
            console.log('Total movies shown :  ' + movies.length);
            res.end()
      } catch (error) {
            console.log('Error while showing the movies');
      }
};

exports.sortByRatingMovies = async (req, res) => {
      let acd = parseInt(req.query.ACD);
      console.log(typeof(acd),acd);
      if(acd != -1 && acd != 1) acd = 1
      try {
            const movies = await MovieModel.find({}).sort({'rating':acd});
            console.log(movies);
            console.log('Total movies shown :  ' + movies.length);
            res.end()
      } catch (error) {
            console.log('Error while showing the movies');
      }
};

exports.addMovie = async (req, res) => {
      try {
            let movie = new MovieModel(req.body)
            await movie.save();
            console.log(`${req.body.name} added in movies colleciton `);
            res.send(`<h1>${req.body.name} added in movies colleciton </h1>`)
      } catch (error) {
            console.log('Error while adding movie');
      }
}

exports.deleteMovie = async (req, res) => {
      let movieName = req.params.movieName;
      console.log(movieName)
      try {
            
            await MovieModel.deleteOne({name:movieName})
            console.log(`${movieName} been deleted `);
            res.send(`<h1>${movieName} deleted </h1>`)
      } catch (error) {
            console.log('Error while deleting the movie');
            res.status(400).send('Error while deleting the movie')
      }
}

exports.updateMovie = async (req, res) => {
      let movieName = req.params.movieName;
      let newdata = req.body;
      try {
            
            await MovieModel.updateOne({name:movieName},newdata)
            console.log(`${movieName} has been updated  `);
            res.send(`<h1>${movieName} has been updated</h1>`)
      } catch (error) {
            console.log('Error while updating the movie');
            res.status(400).send('Error while updating the movie')
      }
}

