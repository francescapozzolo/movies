import React from 'react';
import './MovieModal.css'
import {  Dialog, Slide } from "@mui/material";

const MovieModal = ({open, setOpen}) => {

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
                <div className='image-movie'></div>
                <div className='detail-movie'>
                    <h2 className='font-title'>
                        The Addams Family 2
                    </h2>
                    <hr />
                    <p className='font-text'>The Addams get tangled up in more wacky adventures and find themselves involved in hilarious run-ins with all sorts of unsuspecting characters.</p>
                </div>
            </div>
            {/* <AppBar sx={{ position: 'relative' }}>
                <Toolbar>
                    <IconButton
                        edge="start"
                        color="inherit"
                        onClick={handleClose}
                        aria-label="close"
                    >
                    x
                    </IconButton>
                </Toolbar>
            </AppBar> */}
        </Dialog>
    )
}

export default MovieModal;