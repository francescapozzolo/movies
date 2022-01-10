import { baseUrl, api_key } from "../utils";


const moviesActions = {
    fetchAllMovies: (page) => {
        return (dispatch, getState) => {
            try{
                fetch(`${baseUrl}now_playing?api_key=${api_key}&language=en-US&page=${page}`)
                .then(response => response.json())
                .then(data => {
                    dispatch({
                    type: 'LOAD_MOVIES',
                    payload: (data)
                    })
                })
            }catch(error){
                console.log(error)
            }
        }
    },
    searchMovieById: (id) => {
        return (dispatch, getState) => {
            dispatch({
                type: 'LOAD_MOVIE_BY_ID',
                payload: id
            })
        }
    }  
}

export default moviesActions
