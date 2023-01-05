// Take help from IMDB and create entire Movie store api in express + mongoose
// The objective is to support all 4 CRUD operation, but specifically multiple types of get operations
// Endpoints name decide yourself
// For get requests on list of movies, we need to have multiple filtering criteria supported
// filter by title
// filter by rating
// search a movie by name. eg. if we make query like /movies?q=dho, All movies that have Dho should returned: Dhoom, Dhoni: Untold Story etc.
// sortBy queryParam, which will sort by a field.
// pagination support

const express = require('express');
const router = require('./routes/movies');
const app = express();

app.use('/',router)


app.listen(3500,()=>console.log("server runnig on port 3500"))