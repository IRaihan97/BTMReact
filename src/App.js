import React from 'react';
import { Footer, Blog, Possibility, Features, WhatBTM, Header} from './containers';
import { Brand, CTA, Navbar} from './components';
import './App.css';
import './index.css';

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar/>
        <Header/>
      </div>
      <Brand/>
      <WhatBTM/>
      <Features/>
      <Possibility/>
      <CTA/>
      <Blog/>
      <Footer/>      
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
