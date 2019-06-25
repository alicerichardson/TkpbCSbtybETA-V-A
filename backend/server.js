var mongoose = require('mongoose');
var express = require('express');
var cors = require('cors');

const API_PORT = 3001;
const router = express.Router();
const Movie = require('./movie');

let db = mongoose.connection;

mongoose.connect('mongodb://localhost:27017/theater',{useNewUrlParser: true}, error => {
	error ? console.log('Connection failed: ${error}') :
	console.log('Successfully connected to MongoDB');
});
var Int32 = require('mongoose-int32');
var movieSchema = new mongoose.Schema( 
    {
      _id:        { type: String, required: true }, 
      name: 	  { type: String, required: true },
      rating:     { type: String, required: true },
      runtime:    { type: String, required: true },
      tickets:    { type: Int32, required: true },
      showtimes:  { type: Array, "default": [] }
    }
);

var Movie = mongoose.model('Movie', movieSchema);

Movie.find({name: 'Super Happy Movie'},function(error,movie) {
	console.log(movie);
});

Movie.updateOne({"name":"Super Happy Movie", "rating":"PG13", "tickets":40}, (error, result) => {if (error) { console.log('Update failed: '+error);} else console.log('Movie updated');});

var query = Movie.findOne({'rating': 'PG13'});

var result = []
query.select('name rating runtime tickets showtimes');
query.exec(function (err,movie) {
	if (err) 
		return handleError(err);
	else {
		console.log('%s %s %s.', movie.name, movie.rating, movie.runtime, movie.showtimes, movie.tickets);
		result = [movie.name, movie.rating, movie.runtime, movie.showtimes, movie.tickets];
	}
});

const express = require('express');
let app = express();

app.get('/', (req,res) => {   
    res.send('Mongoose finds: '+result);  
});

const server = app.listen(3001, () => {  
    const SERVERHOST = server.address().address;      
    const SERVERPORT = server.address().port;  
    console.log('App listening at http://${SERVERHOST}:${SERVERPORT}');
});
