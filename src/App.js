import React from 'react';
import { Navbar} from './components';
import './App.css';
import './index.css';
import { Main } from './components/Pages';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';



class App extends React.Component {
 
  render(){
    return(
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
