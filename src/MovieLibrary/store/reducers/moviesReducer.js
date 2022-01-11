import {LOAD_MOVIES, LOAD_MOVIE_BY_ID} from '../../../actionTypes'

const initialState = {
  movies: [],
  selectedMovie: {},
  currentPage: 0,
  totalPages: 0
}

export default function (state = initialState, action) {
  const {type, payload} = action
  switch (type) {

    case LOAD_MOVIES:
      return   {
        ...state,
        movies: [...state.movies, ...payload.results],
        currentPage: payload.page,
        totalPages: payload.total_pages
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
