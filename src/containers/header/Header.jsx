import React from 'react';
import './header.css';
import { Element } from 'react-scroll'
import {Link} from 'react-scroll'

const Header = () => {
  return (
    <React.Fragment>
      <Element id='header-section' name='header-section'>
        <div className="BTM__header" id="BTM__header">
          <div className="BTM__header_BG">
            <div className="header__overlay">
              <div className="header__content">
                <p>Fostering symbiotic 
                    relationships between
                    industry and academia 
                    through innovative IT & Data
                    Science services delivered by our
                    leading experts and 
                    talented students. </p>
                <Link
                activeClass='active'
                to="about-section"
                spy={true}
                smooth={true}
                duration={500}>
                  <button>Click Here for More</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Element>
    </React.Fragment>
    
  )
}

export default Header