import React from 'react';
import { Header} from './containers';
import { Brand, CTA, Navbar} from './components';
import './App.css';
import './index.css';
import { Experts, Home, OurServices, Talents, WhatIs } from './components/Pages';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

const App = () => {
  return (
      <div className="App">
        <Router>
          <div className="gradient__bg">
            <Navbar/>
            <Header/>
          </div>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/WhatIs" element={<WhatIs/>}/>
            <Route path="/Talents" element={<Talents/>}/>
            <Route path="/Experts" element={<Experts/>}/>
            <Route path="/OurServices" element={<OurServices/>}/>
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
