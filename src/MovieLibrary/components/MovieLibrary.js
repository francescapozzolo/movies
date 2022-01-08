import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {fetchTopRatedMovies} from '../store/actions'
import './MovieLibrary.css'
import { getMovies } from '../store/selectors'
import MoviesList from './MoviesList'

export default function MovieLibrary() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchTopRatedMovies())
  }, [])
  const movies = useSelector(getMovies)
  return(
      <div className="ML-intro" className="movie-library-grid">
        { movies.length && <MoviesList movies={movies}/> }
      </div>
  )
}
