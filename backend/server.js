var mongoose = require('mongoose');
var express = require('express');
var cors = require('cors');
const bodyParser = require('body-parser');
let app = express();
var Int32 = require('mongoose-int32');

mongoose.connect('mongodb://localhost:27017/theater',{useNewUrlParser: true}, error => {
	error ? console.log('Connection failed: ${error}') :
	console.log('Successfully connected to MongoDB');
});

var router = express.Router();
router.use(bodyParser.json());
app.use(cors({
	origin: "http://localhost:3001"
}
));
app.use('/movie', router);
app.use('/users', router);

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
module.exports = mongoose.model('Movie', movieSchema);

var querySingleMovie = Movie.findOne({'rating': 'R'});
var queryAllMovies = Movie.find();

var allMovies;
queryAllMovies.exec(function (err,movies) {
	if (err) 
		return handleError(err);
	else {
		allMovies = movies;
	}
});

var oneMovie; 
querySingleMovie.select('name rating runtime tickets showtimes');
querySingleMovie.exec(function (err,movie) {
	if (err) 
		return handleError(err);
	else {
		oneMovie = movie;
	}
});

app.get('/movie', (req, res) => {
	var query = Movie.find({}).then(movies =>{
			if(!movies) {res.json({message:'No movies'});
			return;
		} else {
			res.json({movies});
			return;
		}
	});
});

//users
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
module.exports = mongoose.model('User', userSchema);

app.get('/users', (req, res) => {
	var query = User.find({}).then(users => {
		if(!users){ 
			res.json({message: 'No users'});
			return;
		} else { res.json({users}); return; }
	});
});

app.get('/users/:username', (req, res) => {
	var query = User.find({'username':req.params.username}).then(user => {
		if(!user){ 
			res.json('User not found'); 
			return;
		} else {
			res.json({user}); 
			return;
		}
	})
})

app.post('/users/addUser', (req, res) => {
	console.log('post: ' + req.body)
	User.create(req.body, (err, result) => {
		if (err) 
			console.log(err.message);
		else
			console.log('successfully added new user')
	})
})

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
	}
})

var allUsers;
queryAllUsers.exec(function (err, users) {
	if(err){
		return handleError(err)
	} else{
		allUsers = users;
	}
})


const server = app.listen(3000, () => {  
    const SERVERHOST = server.address().address;      
    const SERVERPORT = server.address().port;  
    console.log('App listening at http://${SERVERHOST}:${SERVERPORT}');
});
