var mongoose = require('mongoose');
var express = require('express');
let app = express();
var Int32 = require('mongoose-int32');

mongoose.connect('mongodb://localhost:27017/theater',{useNewUrlParser: true}, error => {
	error ? console.log('Connection failed: ${error}') :
	console.log('Successfully connected to MongoDB');
});

//movie
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

Movie.updateOne({"name":"Super Happy Movie", "rating":"PG13", "tickets":40}, (error, result) => {if (error) { console.log('Update failed: '+error);} else console.log('Movie updated');});

var querySingleMovie = Movie.findOne({'rating': 'R'});
var queryAllMovies = Movie.find();

var allMovies;
queryAllMovies.exec(function (err,movies) {
	if (err) 
		return handleError(err);
	else {
		allMovies = movies;
		//console.log('%s %s %s.', allMovies[0].name, allMovies[0].rating, allMovies[0].runtime, allMovies[0].showtimes, allMovies[0].tickets);
		console.log('%s %s', allMovies.length, allMovies[0].name);
	}
});

var oneMovie; 
querySingleMovie.select('name rating runtime tickets showtimes');
querySingleMovie.exec(function (err,movie) {
	if (err) 
		return handleError(err);
	else {
		console.log('%s %s %s.', movie.name, movie.rating, movie.runtime, movie.showtimes, movie.tickets);
		oneMovie = movie;
	}
});

app.get('/', (req, res) => {
	res.send(allMovies);
})

app.get('/movie', (req, res) => {
	res.send('Single Movie: ' + oneMovie.name);
});

//user
var userSchema = new mongoose.Schema( 
    {
      username:		{ type: String, required: true },
      password:     { type: String, required: true },
      firstname:    { type: String, required: true },
      lastname:     { type: String, required: true },
	  email:  		{ type: String, required: true },
	  birthday: 	{ type: String, required: true },
	  elsEmployee:  { type: Boolean, required: true }
    }
);

var User = mongoose.model('User', userSchema);

var querySingleUser = User.findOne({'username': 'alice'});
var queryAllUsers = User.find();

var oneUser;
querySingleUser.select('username password firstname lastname email birthday elsEmployee')
querySingleUser.exec(function (err, user) {
	if(err){
		return handleError(err);
	}
	else{
		oneUser = user;
		console.log('%s %s', oneUser.username, oneUser.elsEmployee)
	}
})

var allUsers;
queryAllUsers.exec(function (err, users) {
	if(err){
		return handleError(err)
	} else{
		allUsers = users;
		console.log('%s %s', allUsers.length, allUsers[0].email)
	}
})

var router = express.Router();
app.use('/movies', router);
app.use('/users', router);

const server = app.listen(3001, () => {  
    const SERVERHOST = server.address().address;      
    const SERVERPORT = server.address().port;  
    console.log('App listening at http://${SERVERHOST}:${SERVERPORT}');
});
