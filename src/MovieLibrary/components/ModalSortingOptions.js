import React from 'react';
import './MovieModal.css'
import {  Dialog, Slide } from "@mui/material";
import { getSelectedMovie } from '../store/selectors';
import { useSelector } from 'react-redux';
import TMDBImage from './TMDBImage';

const ModalSortingOptions = ({open, setOpen}) => {

    const movieSelected = useSelector(getSelectedMovie);


    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Dialog
            fullScreen
            open={open}
            className="modal-container"
        >
      
        </Dialog>
    )
}

export default ModalSortingOptions;