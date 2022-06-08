import React from 'react'
import { Link } from 'react-scroll';
import DropdownMenu from './DropdownMenu';
import { useState } from "react";


const NavbarItems = ({items}) => {
  const [dropdown, setDropdown] = useState(false);
  return (
      <li className="navbar__items">
        {items.submenu ? (
          <>
            <button 
              type='button' 
              aria-haspopup="menu"
              aria-expanded={dropdown ? "true" : "false"}
              onClick={() => setDropdown((prev) => !prev)}
            >
              {items.title}{" "}
            </button>
            <DropdownMenu 
              submenus={items.submenu}
              dropdown={dropdown}
            />
          </>
        ) : (
          <Link 
            activeClass='active'
            to={items.scrollTo}
            spy={true}
            smooth={true}
            duration={500}>
            <p>{items.title}</p>
          </Link>
        )}
      </li>
  )
};

export default NavbarItems;