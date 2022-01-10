import {LOAD_MOVIES, LOAD_MOVIE_BY_ID} from '../../../actionTypes'
import moviesActions from '../actions'

const initialState = {
  movies: [],
  selectedMovie: {}
}

export default function (state = initialState, action) {
  const {type, payload} = action
  switch (type) {

    case LOAD_MOVIES:
      return   {
        ...state,
        movies: [...state.movies, ...payload.results],
      }
    case LOAD_MOVIE_BY_ID:
      return   {
        ...state,
        selectedMovie: state.movies.filter(movie => movie.id === payload)
      }
    default:
      return state
  }
}
