import React from 'react'
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink
  } from './NavbarElements';

const Navbar = () => {
  return (
      <>
        <Nav>
            <NavLink to="/">
                <h1>LOGO</h1>
            </NavLink>
            <Bars/>
            <NavMenu>
                <NavLink to="/page1" activeStyle>
                    Our Services
                </NavLink>
                <NavLink to="/page2" activeStyle>
                    Our Talents
                </NavLink>
                <NavLink to="/page3" activeStyle>
                    Our Experts
                </NavLink>
                <NavLink to="/page4" activeStyle>
                    Contact Us
                </NavLink>
            </NavMenu>
            
        </Nav>
      </>
  )
}

export default Navbar;