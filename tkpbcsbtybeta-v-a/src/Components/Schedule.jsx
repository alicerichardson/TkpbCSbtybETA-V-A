import React from 'react';
import Movie from './Movie';

const Schedule = () => {

    const movie = [
        {name: 'Movie One', rating: 'Rating One', runtime: 'Runtime One'},
        {name: 'Movie Two', rating: 'Rating Two', runtime: 'Runtime Two'}
    ]

    return (
        <div>
            <Movie movie={movie[0]}/>
            <Movie movie={movie[1]}/>
        </div>
    );
}
export default Schedule;