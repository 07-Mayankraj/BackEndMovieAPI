const mongoose = require("mongoose");
mongoose.set('strictQuery', true); //remove depreciated warnnings

const dbConnection = mongoose.connect("mongodb://127.0.0.1:27017/movies");

module.exports = dbConnection;