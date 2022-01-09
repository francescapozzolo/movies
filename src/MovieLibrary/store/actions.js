import { baseUrl, api_key } from "../utils";


const moviesActions = {
    fetchAllMovies: () => {
        return (dispatch, getState) => {
            try{
                fetch(`${baseUrl}now_playing?api_key=${api_key}&language=en-US&page=1`)
                  .then(response => response.json())
                  .then(data => dispatch({
                    type: 'LOAD_MOVIES',
                    payload: data.results
                }))
            }catch(error){
                console.log(error)
            }
        }
    },  
}

export default moviesActions
