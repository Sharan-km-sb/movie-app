
import React from 'react';
import './Home.css';
import api from '../../constant/index';
import {useEffect,useState} from 'react';
import axios from 'axios';
import MoviesList from '../../component/MovieList/index';


  



function Home () {
    const popular = (api.popularmovies);
     const[movies,setMovies]=useState([]);
    
     useEffect(() =>{
       async function getmoviedata(){
        
         const res = await axios.get(popular);
     
         setMovies(res.data.results);
       }
       getmoviedata();
     },[popular])

    
  
        
    return(
     
 
        <><div className="home">
            <div className="movie-list1">
        {movies.map((movie) => <MoviesList {...movie} key={movie.id}  />)}
        </div>
        </div>
      
          
        </>     
    );
  }
  

export default Home;