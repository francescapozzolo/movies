import React, {useState} from 'react';
import './HomePage.css';
import MovieLibrary from '../components/MovieLibrary';

export default function HomePage() {

    const [sortingType, setSortingType] = useState('');

    const handleSortingChange = event => {
        setSortingType(event.target.value)
      }

    return(
        <div className='main-container'>
            <header className="header">
                <div className='nav-bar'>

                    <div className='container-avatar-title'>
                        <div id="avatar"></div>
                        <h1 className='font-title'>Toonflix</h1>
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

                    <div className='img-preview-movie'>
                        
                    </div>
                </div>
            </header>

            <MovieLibrary />

        </div>
    );
};