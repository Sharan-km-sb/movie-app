import React from 'react';
import './MoviesList.css';

const IMG_API = `https://image.tmdb.org/t/p/w500/`;





const MoviesList = ({
    title,
    vote_average,
    overview,
    poster_path, 
    release_data,
    heading
}) => {
   
    
    return(
     <>
        <div id="MoviesList">
          <div class="wrapper">
          <section id="section1">
        
            <div class="item">
            <img src={`${IMG_API}${poster_path}`} alt={title}></img>
          </div>
          <h3>{title}</h3>
          <div className='over'>
            <h3>OVERVIEW</h3>
            <p>{overview}</p>
          </div>
          </section>

          
        </div>
        
        </div></>
             
        
)}
export default MoviesList;