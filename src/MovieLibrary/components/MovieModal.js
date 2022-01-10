import React from 'react';
import './MovieModal.css'
import {  Dialog, Slide } from "@mui/material";
import { getSelectedMovie } from '../store/selectors';
import { useSelector } from 'react-redux';
import { baseUrlImg } from '../utils';

const MovieModal = ({open, setOpen}) => {

    const movieSelected = useSelector(getSelectedMovie);
    console.log(movieSelected)
    const Transition = React.forwardRef(function Transition(props, ref) {
        return <Slide direction="right" ref={ref} {...props} />;
    });

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Dialog
            fullScreen
            open={open}
            TransitionComponent={Transition}
            className="modal-container"
        >
            <div onClick={handleClose}>
                x 
            </div>
            <div className='container-movie-detail'>
                <div className='image-movie' style={{backgroundImage: `url('${baseUrlImg}${movieSelected[0].poster_path}')`}}></div>
                <div className='detail-movie'>
                    <h2 className='font-title'>
                        {movieSelected[0].title}
                    </h2>
                    <hr />
                    <p className='font-text'>{movieSelected[0].overview}</p>
                </div>
            </div>
        </Dialog>
    )
}

export default MovieModal;