import React, { useEffect, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import moviesActions from '../store/actions';
import './MovieLibrary.css';
import { getMovies } from '../store/selectors';
import MovieCard from './MovieCard';
import InfiniteScroll from 'react-infinite-scroll-component';
import Spinner from './Spinner';

export default function MovieLibrary({sortingType}) {
  console.log(sortingType)
  let movies = useSelector(getMovies);
  const moviesToShow = [];
  const [page, setPage] = useState(3);

  const dispatch = useDispatch();

  useEffect(() => {
    if(movies.length === 0){ 
      [1, 2, 3].forEach((item) => dispatch(moviesActions.fetchAllMovies(item)))
    } else { 
      dispatch(moviesActions.fetchAllMovies(page))
    }
  }, [page]);
  
  useEffect(() => {
    orderMoviesBySortingType()
  }, [sortingType, movies])

  const orderMoviesBySortingType = () => {
    if(sortingType === ''){
      return movies
    } else if (sortingType === 'name_asc' || sortingType === 'name_desc') {
      const listSortingMovies = movies.sort(function (a, b) {
        if (a.title.toLowerCase() > b.title.toLowerCase()) {
          return 1;
        }
        if (a.title.toLowerCase() < b.title.toLowerCase()) {
          return -1;
        }
        return 0;
      }
    )
    return movies = sortingType === 'name_asc' ? listSortingMovies : listSortingMovies.reverse()
    } else {
      return movies = movies.sort((a, b) => b.vote_average - a.vote_average )
  }
}
  
  if(movies.length) {
    for (let i = 0; i < movies.length; i += 8) {
      let sliceMovies = movies.slice(i, i + 8);
      moviesToShow.push(sliceMovies);
    };
  };
  
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
