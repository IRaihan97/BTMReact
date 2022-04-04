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
                    Page 1
                </NavLink>
                <NavLink to="/page2" activeStyle>
                    Page 2
                </NavLink>
                <NavLink to="/page3" activeStyle>
                    Page 3
                </NavLink>
            </NavMenu>
            
        </Nav>
      </>
  )
}

export default Navbar