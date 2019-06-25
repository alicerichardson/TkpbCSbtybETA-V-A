import React from 'react';
import './css/movie.css';
import { Link, BrowserRouter as Router } from 'react-router-dom';

const Movie = ({movie}) => {
    return (
        <div class="movie">
            <h1>{movie.name}</h1>
            <ul class="info">
                <li>{movie.rating}</li>
                <li>{movie.runtime}</li>
            </ul>
            <div>
                <ul>
                    {movie.showtimes.map((value, index) => {return <Link to={{pathname:"/purchase", 
                            state:{time: value, name: movie.name, rating: movie.rating, 
                            runtime: movie.runtime, showtimes: movie.showtimes} }}>
                                <li class="showtimes" key={index}>{value}</li></Link>} ) }
                </ul>
            </div>
        </div>
    );
}
export default Movie;