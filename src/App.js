import React, {  useEffect, useState } from 'react';
import './App.css';
import MoviesList  from './component/MoviesList';
import axios from 'axios';

const APIkey = 'd6839191e269dda942246111abe8bfda'






function App(){
  
  const [movies, setMovies] = useState([]);
  const [searchTerm,setSearcTerm] = useState('');

async function getmovies (){
    const popularmovies = `https://api.themoviedb.org/3/movie/popular?api_key=${APIkey}&language=en-US`;
    
     const res = await axios.get(popularmovies);
     console.log(res.data.results);
     setMovies(res.data.results)
    
  }
 useEffect(()=>{
   getmovies();
  },[])



 async function handleonSubmit(e){
   e.preventDefault();
   const searchAPI = `https://api.themoviedb.org/3/search/multi?api_key=${APIkey}&language=en-US&query=${searchTerm}&`;
    
   const response = await axios.get(searchAPI);
   setMovies(response.data.results)
 }
 
  return(
<>
<header>
<div className='search '>
      <form >
        <input 
        type='search' 
        placeholder='search any movies '
        className='search '
        value={searchTerm}
        onChange={(e) => setSearcTerm(e.target.value)} >
          
        </input>
        <button className='submit' onClick={handleonSubmit}>search</button>
      </form>
    </div> 

</header>
    
      <div id="card">
        {movies.map((movie) => <MoviesList {...movie} key={movie.id}  />)}
   </div>
      
  
</>
    
  );
}

export default App;