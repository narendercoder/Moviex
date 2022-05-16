import React from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Header from './components/Header/Header';
import "./App.css"
import SimpleBottomNavigation from './components/MainNav';
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
       <Route path="/Moviex" element={<Trending/>} />
       <Route path="/movies" element={<Movies/>} />
       <Route path="/series" element={<Series/>} />
       <Route path="/search" element={<Search/>} />
       <Route path="*" element={<Trending/>} />
     </Routes>
    </Container>
    </div>
    <SimpleBottomNavigation/>
    </BrowserRouter>
  )
}

export default App;
