import React, {useState} from 'react';
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri';
import './navbar.css';
import logo from '../../assets/logo.png';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="BTM__navbar">
      <div className="BTM__navbar-link_logo">
        <img src={logo} alt="logo" width="100" height="100"/>
      </div>
      <div className="BTM__navbar-link">
        
        <div className="BTM__navbar-link_container">
          <Link 
          activeClass='active'
          to="header-section"
          spy={true}
          smooth={true}
          duration={500}>
            <p>Home</p>
          </Link>
          <Link 
          activeClass='active'
          to="about-section"
          spy={true}
          smooth={true}
          duration={500}>
            <p>About Us</p>
          </Link>
          <Link 
          activeClass='active'
          to="services-section"
          spy={true}
          smooth={true}
          duration={500}>
            <p>Services</p>
          </Link>
          <Link 
          activeClass='active'
          to="experts-section"
          spy={true}
          smooth={true}
          duration={500}>
            <p>Experts</p>
          </Link>
          <Link 
          activeClass='active'
          to="students-section"
          spy={true}
          smooth={true}
          duration={500}>
            <p>Students</p>
          </Link>
          <Link 
          activeClass='active'
          to="contact-section"
          spy={true}
          smooth={true}
          duration={500}>
            <p>Contact Us</p>
          </Link>
          {/* <Link to="/WhatIs"><p>What IS BTM</p></Link>
          <Link to="/Talents"><p>Our Talents</p></Link>
          <Link to="/Experts"><p>Our Experts</p></Link>
          <Link to="/OurServices"><p>Our Services</p></Link> */}
        </div>
      </div>
      <div className="BTM__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="BTM__navbar-menu_container scale-up-center">
          <div className="BTM__navbar-menu_container-link">
            <Link to="/"><p>Home</p></Link>
            <Link to="/WhatIs"><p>What IS BTM</p></Link>
            <Link to="/Talents"><p>Our Talents</p></Link>
            <Link to="/Experts"><p>Our Experts</p></Link>
            <div><Link to="/OurServices"><p>Our Services</p></Link></div>
            
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