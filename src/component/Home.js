import axios from "axios";
import React from "react";
import MoviesList from "./MoviesList";
import { useState, useEffect} from "react";
import './Homescreen.css';




const APIkey = 'd6839191e269dda942246111abe8bfda';
const BASE_URL = `https://api.themoviedb.org/3`;


function Home () {
       
     const[movies,setMovies]=useState([]);

     useEffect(() =>{
       async function getmoviedata(){
         const moviesAPI = `${BASE_URL}/trending/all/day?api_key=${APIkey}`;
         const res = await axios.get(moviesAPI);
         console.log(res.data.results);
         setMovies(res.data.results);
       }
       getmoviedata();
     },[])

    
  
        
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