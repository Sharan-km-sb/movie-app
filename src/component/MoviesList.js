import React from 'react';
import './MoviesList.css';
import { Link } from 'react-router-dom';


const IMG_API = `https://image.tmdb.org/t/p/w500/`;





const MoviesList = ({
   id,
    title,
    vote_average,
    overview,
    poster_path, 
    release_data,
  
}) => {
   
    
    return(
      <>
           <div id="MoviesList">
          <div class="wrapper">
            <section id="section1">
            <Link to={`/MovieDetails/${id}`}>
         
              <div class="item">
                <img src={`${IMG_API}${poster_path}`} alt={title}></img>
              </div></Link>
              <h3>{title}</h3>


            </section>


          </div>

        </div>
        
        </>
             
        
)}
export default MoviesList;