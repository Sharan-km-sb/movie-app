import React from "react";
import './Search.css';
import {useState} from "react";
import axios from 'axios';
import MoviesList from "../../component/MovieList";
import api from "../../constant/index";
import Nav from "../../component/Nav";
import bgi from "../../Assets/bgsearch.jpg"

function Search (){
    
    const [searchTerm,setSearcTerm] = useState('');
    const [searchedmovies,setSearchedMovies] = useState([]);
    const APIkey = `d6839191e269dda942246111abe8bfda`;
   

     const BaseUrl = (api.BaseUrl)
  
    async function handleonSubmit(e){
        e.preventDefault();
        const searchAPI = `${BaseUrl}/search/multi?api_key=${APIkey}&language=en-US&query=${searchTerm}&`;
         
        const response = await axios.get(searchAPI);
        setSearchedMovies(response.data.results)
      }
  


    return(<>    
      <Nav />
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
      <div className="movie-list"
      
     >{
      (searchedmovies==null)
      ? <h1>noob</h1>
      :searchedmovies.map((movie) => <MoviesList {...movie} key={movie.id}  />)}</div>
    
  
    </div></>);
    }
export default Search;