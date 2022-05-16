import React from 'react';
import Home from './component/Home';
import {BrowserRouter as Router , Route,Routes} from 'react-router-dom';
import Nav from './component/Nav';
import Search from './component/Search';
import MovieDetails from './component/MovieDetails';






function App(){
    return(
      <>
        <Router>
       
            <Nav />

            <Routes>  
                <Route path='/Home' element= {<Home />}></Route>
                <Route path='/Search' element={<Search />}></Route>
                <Route path='/MovieDetails/:id' element={<MovieDetails/>}></Route>
  
            </Routes>

        </Router>

      </>
    )
}
export default App;