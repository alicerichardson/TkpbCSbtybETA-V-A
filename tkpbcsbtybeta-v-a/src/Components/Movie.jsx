import React from 'react';
import './css/movie.css';
import movieImg from '../movieimg.png';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';

const Movie = ({movie}) => {
    return (
        <div class="movie">
            <h1>{movie.name}</h1>
            <div class="row">
                <div class="col left">
                    <img src={movieImg}></img>
                    <h6>{movie.rating}</h6>
                    <h6>{movie.runtime}</h6>
                    <h6 class="info">More Info</h6>
                </div>
                <div class="col center">
                    <ul>
                        {movie.showtimes.map((value, index) => {return <li class="showtimes" key={index}>{value}</li>})}
                    </ul>
                </div>
                <div class="col right">
                    <Link to="/purchase"><button class ="purchase">Purchase</button></Link>
                </div>
            </div>
        </div>
    );
}
export default Movie;