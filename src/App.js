import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router} from 'react-router-dom';
import Home from './components/Pages/Home';

function App() {
  return (
    <Router>
      <Navbar/>
      <Home></Home>
    </Router>
  );
}

export default App;
