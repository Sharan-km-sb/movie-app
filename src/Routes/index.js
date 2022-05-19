import React from "react";
import {BrowserRouter as Router, Routes , Route} from 'react-router-dom';
import Home from "../container/Home"
import Search from "../container/search-page";
import MovieDetails from "../container/MovieDetails";
import LoginPage from "../container/loginPage";
import HeroPage from "../container/HeroPage";
import Signup from "../container/signup/index";





const AppRoutes = () =>{
    return(
        <>
         <Router>
       <Routes> 
           <Route path='/' element = {<HeroPage/>}></Route>
           <Route path='/signup' element = {<Signup/>}></Route>
           <Route path='/LoginPage' element = {<LoginPage/>}></Route>
           <Route path='/Home' element= {<Home />}></Route>
           <Route path='/Search' element={<Search />}></Route>
           <Route path='/MovieDetails/:id' element={<MovieDetails/>}></Route>

       </Routes>

   </Router>
        </>)
}

export default AppRoutes;