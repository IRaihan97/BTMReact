import React from 'react';
import './header.css';
import { Element } from 'react-scroll'

const Header = () => {
  return (
    <React.Fragment>
      <Element id='header-section' name='header-section'>
        <div className="BTM__header" id="BTM__header">
          <div className="BTM__header_BG"/>
        </div>
      </Element>
    </React.Fragment>
    
  )
}

export default Header