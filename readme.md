## Design 
![design](https://user-images.githubusercontent.com/87657007/210721817-56ae896e-654e-4062-81d6-82b7e0a7b443.png)


## npm pakages
``` node ,express, mongoose, mongoDB,nodemon. ```

### api 
    ->show all : http://localhost:3500/listMovies
    ->pegination : http://localhost:3500/movies?page=1&limit=5 ;
    ->sort by rating : http://localhost:3500/sortByRatingMovies?ACD=-1
    ->filter by lang : http://localhost:3500/sortByLangMovies?language=English
    ->delete : http://localhost:3500/deleteMovie/Severence
### index.js

    ->The code is a simple express app that listens on port 3500.
    ->It has one route, /, which is the root of all routes in this application.
    ->The code starts by requiring the express module and then creating an instance of it called app.
    ->The next line uses Express's use() method to tell Express to listen for requests on port 3500 and pass them off to the router defined below.
    ->The code is a simple Express application that listens on port 3500.
    


## movies/routes

    ->The code starts with a require for the express library.
    ->Then it defines an object called router, which is used to define routes in Express.
    ->The first route defined is '/addAllMovies', which takes a movieCrudOperations function as its parameter and calls that function when the user visits this URL.
    ->The next route defined is '/listMovies'.
    ->This route also takes a movieCrudOperations function as its parameter and calls that function when the user visits this URL.
    ->The last two routes are 'patch' and 'delete'.
    ->These take no parameters because they don't need any input from users to complete their tasks.
    ->The code is a basic example of how to create an Express application.
    ->The code also shows the use of the router and routes, which are used to map URLs to functions in your application.
    ->The code above is a simple example of how to add movies using a CRUD operations function.

 ## movieSchema
    ->The code starts by requiring the mongoose library.
    ->The code then creates a movie schema, which is a collection of fields that are required for all movies.
    ->Next, it creates an instance of MovieModel using the movie schema and exports it to be used in other modules or scripts.
    ->The code is not supposed to be a constructor function for MovieModel.


 ## movieCrudOperations
    ->The code starts by importing the MovieModel class and moviesData.
    ->It then creates a new instance of the MovieModel class with req.body as an argument, which is passed in from the request object.
    ->The code then calls save() on movie to insert it into the database and logs that it was added to movies collection.
    ->The code starts by importing the Movie model and movies data classes.
    ->It then creates a new instance of the Movie model with req.body as an argument, which is passed in from the request object.
    ->The code then calls save() on movie to insert it into the database and logs that it was added to movies collection
    ->The code will show the movies inserted in the database.
    ->The code will show the total number of movies shown
