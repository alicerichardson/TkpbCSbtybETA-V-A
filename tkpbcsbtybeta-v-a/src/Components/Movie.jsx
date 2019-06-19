import React from 'react';
import './css/movie.css';
import movie from '../movieimg.png';

const Movie = () => {
    return (
        <div class="movie">
            <h1>Title</h1>
            <div class="row">
                <div class="col">
                    <img src={movie}></img>
                    <h6>Rating</h6>
                    <h6>Runtime</h6>
                </div>
                <div class="col">
                    <ul class="showtimes">
                        <li><a>Showtime One</a></li>
                        <li><a>Showtime Two</a></li>
                        <li><a>Showtime Three</a></li>
                    </ul>
                </div>
                <div class="col">
                    <a>More Info</a>
                </div>
            </div>
        </div>
    );
}
export default Movie;