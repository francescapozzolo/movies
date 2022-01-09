import React from "react";
import "./MovieCard.css";

const MovieCard = ({movie, isSelected, onSelect, handleOver}) => {
    const handleClick = () => onSelect(movie);
    const { title, vote_average, poster_path } = movie;
    const className = `movie-card ${isSelected ? 'selected' : ''}`;


    return(
        <div className={className} onClick={() => console.log(title)}  style={ {backgroundImage: `url('https://image.tmdb.org/t/p/w500/${poster_path}')`}}>
            <div className="coating">
                <h2 className="font-title" >
                    {title}({vote_average})
                </h2>
            </div>
        </div>
    );
};

export default MovieCard;