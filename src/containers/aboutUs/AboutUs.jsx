import React from 'react'
import './aboutUs.css'
import {Header, ContentHolder} from '../util/index';
import bgImg from '../../assets/about/aboutUsHeader.png'
import bridgeImg from '../../assets/about/bridge.png'
import eyeImg from '../../assets/about/eye.png'
import { Element } from 'react-scroll'


const paddingTop = 250;
const paddingBot = 250;
const title = <div><span style={{color: "white"}}>Brunel</span><span style={{color: "rgb(0, 28, 153)"}}>Talent</span><span style={{color: "white"}}>MarketPlace</span></div>


const AboutUs = () => {
  return (
    <React.Fragment>
    <Element id='about-section' name='about-section'>
      <Header bgImg={bgImg} title={title} />
      <div className="BTM__about" id="BTM__about">
        <div className="BTM__about_BG"/>
        <ContentHolder bgImg={bridgeImg} title={<h1>Our Mission</h1>} content={<div style={{color: "white", fontSize: 30}}><p>To bridge the gap between industry and academia through innovative IT & Data Science services. Unlike most of our competition, we are not a profit-driven organisation. Rather, we are a marketplace, that aims to foster symbiotic relations between our customers and the university. We are distinguishable by our bank of both talented students as well as staff-leading specialists.</p></div>} topP={paddingTop} bottomP={paddingBot}/>
        <ContentHolder bgImg={eyeImg} title={<h1>Our Vision</h1>} content={<div style={{color: "white", fontSize: 30}}><p>To become a recognisable and viable IT consultancy known for its Research & Development services for West London businesses. We aspire to give 2% of the computer department’s student cohort the opportunity to participate in BTM projects. We aim to expand this model to other university departments, such as design, business management, and mechanical engineering.  </p></div>} topP={paddingTop} bottomP={paddingBot}/>
      </div>
    </Element>
  </React.Fragment>
  )
}

export default AboutUs