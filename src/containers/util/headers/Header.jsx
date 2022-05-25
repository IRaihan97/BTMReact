import React from 'react'
import './header.css'

const Header = ({bgImg, title}) => {
  return (
    <div className="BTM__topHead" id="BTM__topHead">
      <div className="BTM__topHead_BG" style={{ backgroundImage: `url(${bgImg})`}}>
        <div className="topHead__overlay">
          <div className="topHead__content">
            <h1>{title}</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header