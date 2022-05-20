import React from 'react'
import './aboutUs.css'

import { Element } from 'react-scroll'

const AboutUs = () => {
  return (
    <React.Fragment>
    <Element id='about-section' name='about-section'>
      <div className="BTM__about" id="BTM__about">
        <div className="BTM__about_BG"/>
      </div>
      ABOUT
    </Element>
  </React.Fragment>
  )
}

export default AboutUs