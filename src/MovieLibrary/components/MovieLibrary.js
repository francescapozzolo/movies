import React, { useEffect, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import moviesActions from '../store/actions';
import './MovieLibrary.css';
import { getMovies, getCurrentPage, getTotalPages } from '../store/selectors';
import MovieCard from './MovieCard';
import InfiniteScroll from 'react-infinite-scroll-component';
import Spinner from './Spinner';

export default function MovieLibrary({sortingType}) {
  let movies = useSelector(getMovies);
  let totalPages = useSelector(getTotalPages);
  const moviesToShow = [];
  const [page, setPage] = useState(3);
  const [hasMorePages, setHasMorePages] = useState(true)
  const dispatch = useDispatch();

  useEffect(() => {
    if(movies.length === 0){ 
      [1, 2, 3].forEach((numberPage) => dispatch(moviesActions.fetchAllMovies(numberPage)))
    } else {
      dispatch(moviesActions.fetchAllMovies(page))
    }
    setHasMorePages(page < totalPages)
  }, [page]);
  
  for (let i = 0; i < movies.length; i += 8) {
    let sliceMovies = movies.slice(i, i + 8);
    moviesToShow.push(sliceMovies);
  };

  const loadMoreMovies = () => {
    setPage((prevPage) => prevPage += 1)
  }; 

  return(
    <InfiniteScroll
      dataLength={moviesToShow.length}
      hasMore={()=> hasMorePages()}
      next={loadMoreMovies}
      loader={<Spinner />}
      endMessage={
        <p style={{ textAlign: 'center' }}>
          <b>Yay! You have seen it all</b>
        </p>
      }
    >
      { moviesToShow.length && moviesToShow?.map((movieSet, index) => {
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
