import React from 'react';
import './MovieModal.css'
import {  Dialog, DialogContent, IconButton, Slide, Toolbar } from "@mui/material";
import { getSelectedMovie } from '../store/selectors';
import { useSelector } from 'react-redux';
import TMDBImage from './TMDBImage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const MovieModal = ({open, setOpen}) => {

    const movieSelected = useSelector(getSelectedMovie);

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
            // TransitionComponent={Transition}
            className="modal-container"
        >
            <Toolbar>
                <IconButton
                edge="start"
                color="inherit"
                onClick={handleClose}
                aria-label="close"
                >
                    <FontAwesomeIcon icon={faTimes} color='white'/>
                </IconButton>
            </Toolbar>
            <DialogContent>
                    <div className='container-image-movie'>
                        <div className='image-movie' style={{backgroundImage: `url(${TMDBImage(movieSelected[0].poster_path)})`}}></div>
                    </div>
                <div className='container-movie-detail'>
                    <div className='detail-movie'>
                        <h2 className='font-title'>
                            {movieSelected[0].title}
                        </h2>
                        <hr />
                        <p className='font-text'>{movieSelected[0].overview}</p>
                    </div>
                </div> 
            </DialogContent>
    
        </Dialog>
    )
}

export default MovieModal;