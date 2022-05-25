import React from 'react'
import './aboutUs.css'
import {Header} from '../util/index';
import bgImg from '../../assets/aboutUsHeader.png'

import { Element } from 'react-scroll'

const AboutUs = () => {
  return (
    <React.Fragment>
    <Element id='about-section' name='about-section'>
      <Header bgImg={bgImg} title="BrunelTalentMarketPlace" />
      <div className="BTM__about" id="BTM__about">
        <div className="BTM__about_BG"/>
      </div>
      
    </Element>
  </React.Fragment>
  )
}

export default AboutUs