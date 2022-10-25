import './navbar.css';
import logo from '../../assets/logo.png';
import { menuItems } from './menuItems';
import NavbarItems from './NavbarItems';
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <div className="BTM__navbar">
      <div className="BTM__navbar-link_logo">
      <Link 
            activeClass='active'
            to={'header-section'}
            spy={true}
            smooth={true}
            duration={500}>
        <img src={logo} alt="logo" width="200" height="78"/>
      </Link>
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
