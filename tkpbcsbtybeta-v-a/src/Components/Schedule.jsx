import React, {useState,useEffect} from 'react';
import Movie from './Movie';
//import axios from 'axios';

const Schedule = () => {

    const movies = [
        {name: 'Movie One', rating: 'sdf', runtime: 'test'},
        {name: 'Movie One', rating: 'sdf', runtime: 'test'}
    ]

    // const [movies, setMovies] = useState([])
    // useEffect(() => {
    //     let getData = async() => {
    //     let response = await axios.get('http://localhost:3000/movies')
    //     let movies = await response.data
    //     setMovies(movies)
    // }
    // getData()
    // },[])

    return (
        <div>
            <Movie movie={movies[0]}/>
            <Movie movie={movies[1]}/>
        </div>
    );
}
export default Schedule;