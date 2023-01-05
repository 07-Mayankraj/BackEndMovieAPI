const mongoose = require("mongoose");



// movie schema is not constuctor funtion make 
const movieSchema = mongoose.Schema({
    name: { type: String, required: true },
    language: { type: String, required: true },
    genre: { type: String, required: true },
    poster: { type: String, required: true },
    year: { type: Number, required: true },
    rating: { type: Number, required: true },
    description: String 
});

const MovieModel= mongoose.model('movies',movieSchema);
module.exports = MovieModel