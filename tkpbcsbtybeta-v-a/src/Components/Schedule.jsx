import React, {useState,useEffect} from 'react';
import Movie from './Movie';
import axios from 'axios';

const Schedule = () => {

    
    const [movies, setMovies] = useState([])
    useEffect(() => {
        let getData = async() => {
        let response = await axios.get('http://localhost:3000/movies')
        let movies = await response.data
        setMovies(movies)
    }
    getData()
    },[])
    
    return (
        <div>
            {movies.map(movie => <Movie key={movie.name} movie={movie}/>)}
        </div>
    );
}

export default Schedule;