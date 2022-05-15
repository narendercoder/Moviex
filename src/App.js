
import React from 'react'
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom"
import Header from './component/Header/Header';
import "./App.css"
import SimpleBottomNavigation from './component/MainNav';
import { Container } from '@material-ui/core';
import Trending from './pages/Trending/Trending';
import Search from './pages/Search/Search';
import Movies from './pages/Movies/Movies';
import Series from "./pages/Series/Series";

function App() {
  return (
    <BrowserRouter>
    <Header />
    <div className='app'>
    <Container>
     <Routes>
       <Route path='/'element={<Trending/>} />
       <Route path='/movies' element={<Movies/>} />
       <Route path='/series' element={<Series/>} />
       <Route path='/search' element={<Search/>} />
       <Route path='*' element={<Navigate to="/" />} />
     </Routes>
    </Container>
    </div>
    <SimpleBottomNavigation/>
    </BrowserRouter>
  )
}

export default App;
