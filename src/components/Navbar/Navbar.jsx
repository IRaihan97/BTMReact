import React, {useState} from 'react';
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri';
import './navbar.css';
import logo from '../../assets/logo.png';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="BTM__navbar">
      <div className="BTM__navbar-link">
        <div className="BTM__navbar-link_logo">
          <img src={logo} alt="logo" width="100" height="100"/>
        </div>
        <div className="BTM__navbar-link_container">
          <p><a href="#home">Home</a></p>
          <p><a href="#wBTM">What IS BTM</a></p>
          <p><a href="#possiblity">Our Talents</a></p>
          <p><a href="#features">Our Exprets</a></p>
          <p><a href="#blog">Our Services</a></p>
        </div>
      </div>
      <div className="BTM__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="BTM__navbar-menu_container scale-up-center">
          <div className="BTM__navbar-menu_container-link">
            <p><a href="#home">Home</a></p>
            <p><a href="#wBTM">What IS BTM</a></p>
            <p><a href="#possiblity">Our Talents</a></p>
            <p><a href="#features">Our Exprets</a></p>
            <p><a href="#blog">Our Services</a></p>
          </div>
          
        </div>
        )}
      </div>

    </div>
  )
}

export default Navbar





// import React from 'react'
// import {
//     Nav,
//     NavLink,
//     Bars,
//     NavMenu,
//     NavBtn,
//     NavBtnLink
//   } from './NavbarElements';

// const Navbar = () => {
//   return (
//       <>
//         <Nav>
//             <NavLink to="/">
//                 <h1>LOGO</h1>
//             </NavLink>
//             <Bars/>
//             <NavMenu>
//                 <NavLink to="/page1" activeStyle>
//                     Our Services
//                 </NavLink>
//                 <NavLink to="/page2" activeStyle>
//                     Our Talents
//                 </NavLink>
//                 <NavLink to="/page3" activeStyle>
//                     Our Experts
//                 </NavLink>
//                 <NavLink to="/page4" activeStyle>
//                     Contact Us
//                 </NavLink>
//             </NavMenu>
            
//         </Nav>
//       </>
//   )
// }

// export default Navbar;