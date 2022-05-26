import React from 'react'
import './aboutUs.css'
import {Header} from '../util/index';
import bgImg from '../../assets/aboutUsHeader.png'

import { Element } from 'react-scroll'

const title = <div><span style={{color: "white"}}>Brunel</span><span style={{color: "rgb(0, 28, 153)"}}>Talent</span><span style={{color: "white"}}>MarketPlace</span></div>

const AboutUs = () => {
  return (
    <React.Fragment>
    <Element id='about-section' name='about-section'>
      <Header bgImg={bgImg} title={title} />
      <div className="BTM__about" id="BTM__about">
        <div className="BTM__about_BG"/>
      </div>
    </Element>
  </React.Fragment>
  )
}

export default AboutUs