require('../movies_db_resources/db');
const express = require('express');
const router = express.Router()
const movieCrudOperations = require('../movieCrudOperations/movieCrudOperations');
router.use(express.json())


//! for adding movie array data
router.get('/addAllMovies',movieCrudOperations.addAllMovies)

//  post movie  ---------> pending
router.post('/addMovie',movieCrudOperations.addMovie)

//  get movies  ---------> 
router.get('/listMovies',movieCrudOperations.listMovies)

//  get lang ---------> 
router.get('/sortByLangMovies/',movieCrudOperations.filterByLangMovies)
//  get filter ---------> 
router.get('/sortByRatingMovies/',movieCrudOperations.sortByRatingMovies)




// delete   --------->  
router.delete('/deleteMovie/:movieName',movieCrudOperations.deleteMovie)

// patch  movie --------->  
router.patch('/updateMovie/:movieName',movieCrudOperations.updateMovie)



// pegination
router.get('/movies',movieCrudOperations.pagination)




module.exports = router;

