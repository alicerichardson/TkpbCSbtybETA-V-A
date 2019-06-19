import React from 'react';
import './css/movie.css';
import movie from '../movieimg.png';

const Movie = () => {
    return (
        <div class="movie">
            <h1>Title</h1>
            <div class="row">
                <div class="col left">
                    <img src={movie}></img>
                    <h6>PG13</h6>
                    <h6>2HR 18MIN</h6>
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