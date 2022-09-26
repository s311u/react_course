/* import './App.css'; */
import React from 'react';

import Navbar from './components/Navbar.js';
import Header from './components/Header.js';
import Home from './components/Home.js';
import About from './components/About.js';
import ContactUs from './components/ContactUs.js';
import NotFound from './components/NotFound.js';
import Footer from './components/Footer.js' ;
import { Routes , Route } from 'react-router-dom' ;
function App(){
  return (
    <>
      <Navbar/>
      <Header/>
      <div className = 'container' >
        <Routes>
          <Route path = "/" element = {<Home/>}/>
          <Route path = "/about" element = {<About/>}/>
          <Route path = "/contactus" element = {<ContactUs/>}/>
          <Route path = "*" element = {<NotFound/>}/>
        </Routes>
      </div>
      <Footer/>
    </>
  )}
export default App;