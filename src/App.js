import React from 'react';
import { Brand, CTA, Navbar, NewNav} from './components';
import './App.css';
import './index.css';
import { Experts, Main, OurServices, Talents, WhatIs } from './components/Pages';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { useEffect } from "react";


const App = () => {

  

  return (
      <div className="App">
        <Router>
          <div className="gradient__bg">
            <Navbar/>
          </div>
          <Routes>
            <Route path="/" element={<Main/>}/>
          </Routes>
        </Router> 
      </div>
  )
}

export default App

// import logo from './logo.svg';
// import './App.css';
// import Navbar from './components/Navbar';
// import {BrowserRouter as Router} from 'react-router-dom';
// import Home from './components/Pages/Home';

// function App() {
//   return (
//     <Router>
//       <Navbar/>
//       <Home></Home>
//     </Router>
//   );
// }

// export default App;
