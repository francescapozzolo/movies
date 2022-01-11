import React, { useEffect, useState } from 'react';
import './ModalSortingOptions.css'
import {  Dialog, FormControlLabel, Radio, RadioGroup, Slide } from "@mui/material";
import { getMovies, getSelectedMovie } from '../store/selectors';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons';

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
            <div className="modal-container">
                <div className="header-modal" onClick={() => handleClose()}>
                    <FontAwesomeIcon icon={faArrowCircleLeft} size='2x'/>
                    <img src="./logo.png" width="200px"/>
                </div>

                <div className='sorting-options'></div>
                    <RadioGroup row aria-label="orderType" name="row-radio-buttons-group" onChange={() => handleChange(event)}>
                        <FormControlLabel value="name_asc" control={<Radio />} label="A - Z" />
                        <FormControlLabel value="name_desc" control={<Radio />} label="Z - A" />
                        <FormControlLabel value="rating" control={<Radio />} label="Rating" />
                   
                    </RadioGroup>
                <div className='movie-list'>
                    {orderMoviesBySortingType()?.map(movie => {
                        return (
                            <div key={movie.id}>
                                <h2>{movie.title}</h2>
                            </div>
                        )
                    })}
                </div>
            </div>

      
        </Dialog>
    )
}

export default ModalSortingOptions;