import React from 'react';
import './MovieModal.css'
import {  Dialog, DialogContent, IconButton, Rating, Slide, Toolbar } from "@mui/material";
import { getSelectedMovie } from '../store/selectors';
import { useSelector } from 'react-redux';
import TMDBImage from './TMDBImage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark, faHeart, faHeartbeat, faPlayCircle, faTimes } from '@fortawesome/free-solid-svg-icons';

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

            <DialogContent>
                <div className='container-image-movie'>
                    <div className='image-movie' style={{backgroundImage: `url(${TMDBImage(movieSelected[0].poster_path)})`}}></div>
                </div>
                <div className='container-movie-detail'>
                    <div className='detail-movie'>
                        <h2 className='font-title'>
                            {movieSelected[0].title} | <Rating className="rating" name="read-only" value={movieSelected[0].vote_average * 0.5} readOnly precision={0.1} size="small"/> {movieSelected[0].vote_average}
                        </h2>
                        <hr />
                        <p className='font-text'>{movieSelected[0].overview}</p>
                        <div className='container-actions'>
                            <FontAwesomeIcon icon={faHeart} />
                            <FontAwesomeIcon icon={faBookmark} />
                            <p className='font-title'>PLAY NOW <FontAwesomeIcon icon={faPlayCircle} /></p>
                        </div>
                    </div>
                </div> 
            </DialogContent>
    
        </Dialog>
    )
}

export default MovieModal;