import React from 'react'
import Link from 'react-scroll/modules/components/Link'

const DropdownMenu = ({submenus, dropdown}) => {
  return (
    <ul className={`dropdown ${dropdown ? "show" : ""}`}>
        {submenus.map((submenu, index) => (
            <li key={index} className="navbar__items">
                <Link 
                    className='dropdownlink'
                    activeClass='active'
                    to={submenu.scrollTo}
                    spy={true}
                    smooth={true}
                    duration={500}>
                    <p>{submenu.title}</p>
                </Link>
            </li>
        ))}
  </ul>
  )
}

export default DropdownMenu