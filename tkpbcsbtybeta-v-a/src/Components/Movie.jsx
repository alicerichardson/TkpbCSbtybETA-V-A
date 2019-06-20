import React from 'react';
import './css/movie.css';
import movieImg from '../movieimg.png';

const Movie = ({movie}) => {

    //const movie = 'test';

    return (
        <div class="movie">
            <h1>{movie.name}</h1>
            <div class="row">
                <div class="col left">
                    {/* <img src={movieImg}></img> */}
                    <h6>{movie.rating}</h6>
                    <h6>{movie.runtime}</h6>
                    <h6 class="info">More Info</h6>
                </div>
                <div class="col right">
                    <ul class="showtimes">
                        <li><a>12:00PM</a></li>
                        <li><a>3:00PM</a></li>
                        <li><a>5:00PM</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
export default Movie;