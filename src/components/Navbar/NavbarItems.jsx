import React from 'react'
import { Link } from 'react-scroll';
import DropdownMenu from './DropdownMenu';
import { useState, useEffect, useRef } from "react";



const NavbarItems = ({items}) => {
  const [dropdown, setDropdown] = useState(false);
  let ref = useRef();
  useEffect(() => {
    const handler = (event) => {
     if (dropdown && ref.current && !ref.current.contains(event.target)) {
      setDropdown(false);
     }
    };
    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);
    return () => {
     // Cleanup the event listener
     document.removeEventListener("mousedown", handler);
     document.removeEventListener("touchstart", handler);
    };
   }, [dropdown]);


  return (
      <li className="navbar__items" ref={ref}>
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