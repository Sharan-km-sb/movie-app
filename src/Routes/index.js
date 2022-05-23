import React from "react";
import {BrowserRouter as Router, Routes , Route} from 'react-router-dom';
import Home from "../container/Home"
import Search from "../container/search-page";
import MovieDetails from "../container/MovieDetails";
import LoginPage from "../container/loginPage";
import HeroPage from "../container/HeroPage";
import PasswordReset from "../container/PasswordReset";
import Pagenotfound from "../container/PageNotfound";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublickRoute";
import signup from "../container/signup/index";






const AppRoutes = () =>{
    return(
        <>
            <Router>
                <Routes>
                    <Route path='/' element={<PublicRoute Component={HeroPage}></PublicRoute>}></Route>
                    <Route path='/signup' element={<PublicRoute Component={signup}></PublicRoute>}></Route>
                    <Route path='/LoginPage' element={<PublicRoute Component={LoginPage}></PublicRoute>}></Route>
                    <Route path='/PasswordReset' element={<PublicRoute Component={PasswordReset}></PublicRoute>}></Route>
                    <Route path='/Home' element={<PrivateRoute Component={Home}></PrivateRoute>}></Route>
                    <Route path='/Search' element={<PrivateRoute  Component={Search}></PrivateRoute>}></Route>
                    <Route path='/MovieDetails/:id' element={<PrivateRoute Component={MovieDetails}></PrivateRoute>}></Route>

                    <Route path='/:pagename' element={<Pagenotfound/>}></Route>
                </Routes>

            </Router>
        </>)
}

export default AppRoutes;