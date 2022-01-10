import React, { useEffect, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import moviesActions from '../store/actions';
import './MovieLibrary.css';
import { getMovies } from '../store/selectors';
import MovieCard from './MovieCard';
import InfiniteScroll from 'react-infinite-scroll-component';
import Spinner from './Spinner';

export default function MovieLibrary() {
  const moviesToShow = [];
  const movies = useSelector(getMovies);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [page, setPage] = useState(1);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(moviesActions.fetchAllMovies(page))
  }, [page]);

  if(movies.length) {
    for (let i = 0; i < movies.length; i += 8) {
      let sliceMovies = movies.slice(i, i + 8);
      moviesToShow.push(sliceMovies);
    };
  };

  const handleSelectMovie = movie => setSelectedMovie(movie);
  
  const loadMoreMovies = () => {
    setPage(prevPage => prevPage + 1)
  }; 

  return(
    <InfiniteScroll
      dataLength={moviesToShow.length}
      hasMore={true}
      next={() => loadMoreMovies()}
      loader={<Spinner />}
      endMessage={
        <p style={{ textAlign: 'center' }}>
          <b>Yay! You have seen it all</b>
        </p>
      }
    >
      { moviesToShow.length && moviesToShow.map((movieSet, index) => {
        return (
          <div className="movie-library-grid" key={index}>
            {
              movieSet.map(movie =>
                <MovieCard key={movie.id} movie={movie} />
              )
            }
          </div>
        )}
      )}
    </InfiniteScroll>
  )
};
