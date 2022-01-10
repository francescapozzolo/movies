import React, {useState} from 'react';
import './HomePage.css';
import MovieLibrary from '../components/MovieLibrary';
import { getSelectedMovie } from '../store/selectors';
import { useSelector } from 'react-redux';
import { baseUrlImg } from '../utils';

export default function HomePage() {

    const [sortingType, setSortingType] = useState('');
    const movieSelected = useSelector(getSelectedMovie);

    const handleSortingChange = event => {
        setSortingType(event.target.value)
    }

    return(
        <div className='main-container'>
            <header className="header">
                <div className='nav-bar'>

                    <div className='container-avatar-title'>
                        <div id="avatar"></div>
                        <img src="./logo.png" width="200px"/>
                    </div>
                    
                    <div className='container-options'>
                        <input type="text" placeholder="Search a movie"/>
                        <select value={sortingType} onChange={()=>handleSortingChange(event)}>
                            <option value=""></option>
                            <option value="name_asc">A to Z</option>
                            <option value="name_desc">Z to A</option>
                            <option value="rating">Rating</option>
                        </select>
                    </div>

                </div>
                
                {movieSelected.length && 
                    <div className='img-preview-movie' style={{backgroundImage: `url('${baseUrlImg}${movieSelected[0]?.poster_path}')` }}></div>
                }
            </header>

            <MovieLibrary sortingType={sortingType}/>

        </div>
    );
};