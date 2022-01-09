import React, { useEffect, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import moviesActions, {fetchTopRatedMovies} from '../store/actions';
import './MovieLibrary.css';
import { getMovies } from '../store/selectors';
import MovieCard from './MovieCard';

export default function MovieLibrary() {
  const moviesToShow = [];
  const movies = useSelector(getMovies);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(moviesActions.fetchAllMovies())
  }, []);

  if(movies.length) {
    for (let i = 0; i < movies.length; i += 8) {
      let sliceMovies = movies.slice(i, i + 8);
      moviesToShow.push(sliceMovies);
    };
  };

  const handleSelectMovie = movie => setSelectedMovie(movie);
  
  return(
    <div>
      { moviesToShow.length && moviesToShow.map((movieSet, index) => {
        return (
          <div className="movie-library-grid" key={index}>
            {
              movieSet.map(movie =>
                <MovieCard key={movie.id} movie={movie} isSelected={selectedMovie===movie} onSelect={handleSelectMovie}/>
              )
            }
          </div>
        )}
      )}
    </div>
  )
};
