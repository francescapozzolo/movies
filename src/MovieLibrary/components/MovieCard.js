import React, { useState } from "react";
import "./MovieCard.css";
import MovieModal from "./MovieModal";


const MovieCard = ({movie, isSelected, onSelect, handleOver}) => {
    const handleClick = () => onSelect(movie);
    const { id, title, vote_average, poster_path } = movie;
    const className = `movie-card ${isSelected ? 'selected' : ''}`;
    const [open, setOpen] = useState(false);

    const handleClickOpen = (id) => {
        console.log(id)
        setOpen(true);
    };

    return(
        <>
            <div className={className} onClick={() => handleClickOpen(id)}  style={ {backgroundImage: `url('https://image.tmdb.org/t/p/w500/${poster_path}')`}}>
                <div className="coating">
                    <h2 className="font-title" >
                        {title}({vote_average})
                    </h2>
                </div>
            </div>

            {open && <MovieModal open={open} setOpen={setOpen}/>}
        </>

    );
};

export default MovieCard;