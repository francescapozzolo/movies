import React from 'react'

const TMDB_IMAGE_BASE_PATH = 'https://image.tmdb.org/t/p/w500'

const TMDBImage = (poster_path) => {
  if(poster_path){
    return `${TMDB_IMAGE_BASE_PATH}${poster_path}`
  } else {
    return './logo.png'
  }
}

export default TMDBImage