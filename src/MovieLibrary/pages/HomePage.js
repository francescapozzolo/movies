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

    const [sortingType, setSortingType] = useState('');
    const [open, setOpen] = useState(false)
    const movieSelected = useSelector(getSelectedMovie);

    const handleSortingChange = event => {
        setSortingType(event.target.value)
    }

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
                        <h3 onClick={() => handleClickOpen()}>Filter options</h3>
                        {/* <input type="text" placeholder="Search a movie"/>
                        <select value={sortingType} onChange={()=>handleSortingChange(event)}>
                            <option value=""></option>
                            <option value="name_asc">A to Z</option>
                            <option value="name_desc">Z to A</option>
                            <option value="rating">Rating</option>
                        </select> */}
                    </div>

                </div>
                
                {movieSelected.length && 
                    <div className='img-preview-movie' style={{backgroundImage: `url(${TMDBImage(movieSelected[0].poster_path)})` }}></div>
                }
            </header>

            <MovieLibrary sortingType={sortingType} setSortingType={setSortingType}/>
            
            {open && <ModalSortingOptions open={open}  setOpen={setOpen}/>}
        </div>
    );
};