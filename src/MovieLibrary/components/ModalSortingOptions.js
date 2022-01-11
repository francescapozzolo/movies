import React, { useState } from 'react';
import './ModalSortingOptions.css'
import {  Dialog, DialogContent, FormControlLabel, IconButton, Radio, RadioGroup, Rating, Toolbar } from "@mui/material";
import { getMovies } from '../store/selectors';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import TMDBImage from './TMDBImage';

const ModalSortingOptions = ({open, setOpen}) => {
    let movies = useSelector(getMovies);
    const [sortingType, setSortingType] = useState('');

    const handleClose = () => {
        setOpen(false);
    };

    const handleChange = (event) => {
        setSortingType(event.target.value)
    }

    const orderMoviesBySortingType = () => {
        let listSortingMoviesByType
        switch(sortingType){
            case 'rating':
                listSortingMoviesByType = movies.sort((a, b) => b.vote_average - a.vote_average)
            break;
            case 'name_asc':
                listSortingMoviesByType = orderMoviesByTitleAscOrDesd('name_asc')
            break;
            case 'name_desc':
                listSortingMoviesByType = orderMoviesByTitleAscOrDesd('name_desc')
            break;
            default:
                return 
        }
        return listSortingMoviesByType
    }
      
    const orderMoviesByTitleAscOrDesd = (type) => {
        const listSortingMovies = movies.sort(function (a, b) {
            if (a.title.toLowerCase() > b.title.toLowerCase()) {
                return 1;
            }
            if (a.title.toLowerCase() < b.title.toLowerCase()) {
                return -1;
            }
            return 0;
            })
        return type === 'name_asc' ? listSortingMovies : listSortingMovies.reverse()
    }
    
    return (
        <Dialog
            fullScreen
            open={open}
        >
            <Toolbar onClick={handleClose}>
                <IconButton
                edge="start"
                color="inherit"
                aria-label="close"
                >
                    <FontAwesomeIcon icon={faTimes} color="#C21D17" />
                </IconButton>
                <img src='./logo.png' width="120px" alt="logo" />
            </Toolbar>
            
            <DialogContent className="modal-container">
                <RadioGroup className='sorting-options' row aria-label="orderType" name="row-radio-buttons-group" onChange={() => handleChange(event)}>
                    <FormControlLabel value="name_asc" control={<Radio />} label="A - Z" />
                    <FormControlLabel value="name_desc" control={<Radio />} label="Z - A" />
                    <FormControlLabel value="rating" control={<Radio />} label="Rating" />
                </RadioGroup>
                <div className='movie-list'>
                    {(sortingType ? orderMoviesBySortingType() : movies).map(movie => {
                        return (
                            <div className="container-movie" key={movie.id}>
                                <div className="img" style={{backgroundImage: `url(${TMDBImage(movie.poster_path)})`}}></div>
                                <div className="details">
                                    <h2 className='font-text'>{movie.title}</h2>
                                    <p className='average'>{movie.vote_average}    <Rating className="rating" name="read-only" value={movie.vote_average * 0.5} readOnly precision={0.1} size="small"/></p>
                                    <p>{movie.overview}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </DialogContent>
        </Dialog>
    )
}

export default ModalSortingOptions;