import React, { useState } from "react";
import axios from "axios";
import MoviesList from "./MoviesList";
import './Search.css';

function Search (){
    
    const [searchTerm,setSearcTerm] = useState('');
    const [searchedmovies,setSearchedMovies] = useState([]);
    const APIkey = 'd6839191e269dda942246111abe8bfda';
   


  
    async function handleonSubmit(e){
        e.preventDefault();
        const searchAPI = `https://api.themoviedb.org/3/search/multi?api_key=${APIkey}&language=en-US&query=${searchTerm}&`;
         
        const response = await axios.get(searchAPI);
        setSearchedMovies(response.data.results)
      }
  


    return(<>
    <div className="search-page">
    <div className="search">
      <form onSubmit={handleonSubmit}>
      <input 
        type='search' 
        placeholder='search any movies '
        className='search-bar '
        value={searchTerm}
        onChange={(e) => setSearcTerm(e.target.value)} ></input>
        
      </form>
      </div>
      <div className="movie-list">{searchedmovies.map((movie) => <MoviesList {...movie} key={movie.id}  />)}</div>
      
  
    </div></>);

}

export default Search;