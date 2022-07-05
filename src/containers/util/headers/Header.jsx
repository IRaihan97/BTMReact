import React from 'react'
import './header.css'
import { AnimationOnScroll } from 'react-animation-on-scroll';
import "animate.css/animate.min.css";

const Header = ({bgImg, title}) => {
  return (
    <AnimationOnScroll 
          animateIn='animate__fadeInDown'
          animateOnce='true'
        >
    <div className="BTM__topHead" id="BTM__topHead">
      <div className="BTM__topHead_BG" style={{ backgroundImage: `url(${bgImg})`}}>
        <div className="topHead__overlay">
          <div className="topHead__content">
            <div><h1>{title}</h1></div>
          </div>
        </div>
      </div>
    </div>
    </AnimationOnScroll>
  )
}

export default Header