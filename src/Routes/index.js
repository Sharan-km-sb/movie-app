import React from "react";
import {BrowserRouter as Router, Routes , Route} from 'react-router-dom';
import Home from "../container/Home"
import Nav from "../component/Nav";
import Search from "../container/search-page";
import MovieDetails from "../container/MovieDetails";



const AppRoutes = () =>{
    return(
        <>
         <Router>
       
       <Nav />

       <Routes>  
           <Route path='/' element= {<Home />}></Route>
           <Route path='/Search' element={<Search />}></Route>
           <Route path='/MovieDetails/:id' element={<MovieDetails/>}></Route>

       </Routes>

   </Router>
        </>)
}

export default AppRoutes;