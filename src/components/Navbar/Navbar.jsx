import React, {useState} from 'react';
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri';
import './navbar.css';
import logo from '../../assets/logo.png';
import { menuItems } from './menuItems';
import NavbarItems from './NavbarItems';

const Navbar = () => {
  return (
    <div className="BTM__navbar">
      <div className="BTM__navbar-link_logo">
        <img src={logo} alt="logo" width="100" height="100"/>
      </div>
      <div className="BTM__navbar-link">
        <div className="BTM__navbar-link_container">
          <ul className='navbar__links'>
            {menuItems.map((menu, index)=>{
              return <NavbarItems items={menu} key={index}/>
            })}
          </ul>
        </div>
      </div>

    </div>
  )
}

export default Navbar
