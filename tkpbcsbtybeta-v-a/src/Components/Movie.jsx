import React from 'react';
import './css/movie.css';
import movieImg from '../movieimg.png';
import { Link, BrowserRouter as Router } from 'react-router-dom';

const Movie = ({movie}) => {
    return (
        <div class="movie">
            <h1>{movie.name}</h1>
            <div class=" col leftleft">
                <img src={movieImg}></img>
            </div>
            <div class="row">
                <div class="col left">
                    <h6>{movie.rating}</h6>
                    <h6>{movie.runtime}</h6>
                    <h6 class="info">More Info</h6>
                </div>
                <div class="col center">
                    <ul>
                        {movie.showtimes.map((value, index) => {return <Link to={{pathname:"/purchase", 
                                state:{time: value, name: movie.name, rating: movie.rating, 
                                runtime: movie.runtime, showtimes: movie.showtimes} }}>
                                    <li class="showtimes" key={index}>{value}</li></Link>} ) }
                    </ul>
                </div>
                <div>
                    <Link to={{ pathname:"/purchase", state:{name: movie.name, rating: movie.rating, runtime: movie.runtime} }}><button class ="purchase">Purchase</button></Link>
                </div>
            </div>
        </div>
    );
}
export default Movie;