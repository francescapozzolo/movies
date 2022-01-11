import React, {useState} from 'react';
import './HomePage.css';
import MovieLibrary from '../components/MovieLibrary';
import { getSelectedMovie } from '../store/selectors';
import { useSelector } from 'react-redux';
import TMDBImage from '../components/TMDBImage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import ModalSortingOptions from '../components/ModalSortingOptions';

export default function HomePage() {
    const [open, setOpen] = useState(false)
    const movieSelected = useSelector(getSelectedMovie);

    const handleClickOpen = () => {
        setOpen(true)
    }

    return(
        <div className='main-container'>
            <header className="header">
                <div className='nav-bar'>

                    <div className='container-avatar-title'>
                        <div id="avatar"><FontAwesomeIcon className="icon-avatar" icon={faUserCircle} size="7x"/></div>
                        <img src="./logo.png" width="200px"/>
                    </div>
                    
                    <div className='container-options'>
                        <h3 className="font-title" onClick={() => handleClickOpen()}>Filter options</h3>
                    </div>

                </div>
                
                {movieSelected.length && 
                    <div className='img-preview-movie' style={{backgroundImage: `url(${TMDBImage(movieSelected[0].poster_path)})` }}></div>
                }
            </header>

            <MovieLibrary />
            
            {open && <ModalSortingOptions open={open}  setOpen={setOpen}/>}
        </div>
    );
};