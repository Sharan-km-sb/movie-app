import React from "react";
import './Search.css';
import {useState} from "react";
import axios from 'axios';
import MoviesList from "../../component/MovieList";
import api from "../../constant/index";
import Nav from "../../component/Nav";
import bgimg from "../../Assets/Homebackground.jpg"

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
        console.log(response.data.results);
      }
    
      async function fetchtrendingmovie(){
        const response =await axios.get(`
        https://api.themoviedb.org/3/movie/popular?api_key=d6839191e269dda942246111abe8bfda&language=en-US&page=1`);
        setSearchedMovies(response.data.results);
      }
     
     fetchtrendingmovie();

    return(<>    
      <Nav />
    <div></div><div className="search-page"
         style={{
            backgroundSize:"cover",
            backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0.8)),url("${bgimg}")`,
            backgroundPosition:"center",
            objectFit:"contain"}}
    >
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
      <div className="movie-list">

        {
      searchedmovies.length > 0
      ? searchedmovies.map((movie) => <MoviesList {...movie} key={movie.id}  />)
      : <h1 id="search-heading">Not found</h1>}</div>
    
   
    </div></>);
    }
export default Search;