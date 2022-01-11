import { Rating } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import moviesActions from "../store/actions";
import "./MovieCard.css";
import MovieModal from "./MovieModal";
import TMDBImage from "./TMDBImage";


const MovieCard = ({movie, isSelected}) => {
    const { id, title, vote_average, poster_path } = movie;
    const [open, setOpen] = useState(false);
    const dispatch = useDispatch();

    const handleClickOpen = (id) => {
        dispatch(moviesActions.searchMovieById(id))
        setOpen(true);
    };

    const handleMouseOver = (id) => {
        dispatch(moviesActions.searchMovieById(id))
    }

    return(
        <>
            <div className={`${poster_path === null && 'no-image'} movie-card`} onClick={() => handleClickOpen(id)} onMouseEnter={() => handleMouseOver(id)} style={ {backgroundImage: `url(${TMDBImage(poster_path)})`}}>
                <div className="coating">
                    <h2 className="font-title" >
                        {title}
                    </h2>
                    <div className="score">
                        <p className="font-subtitle">({vote_average})</p>
                        <Rating name="read-only" value={vote_average * 0.5} readOnly precision={0.1} size="small"/>
                    </div>
                </div>
            </div>

            {open && <MovieModal open={open} setOpen={setOpen}/>}
        </>

    );
};

export default MovieCard;