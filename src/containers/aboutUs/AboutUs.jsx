import React from 'react'
import './aboutUs.css'
import {Header, ContentHolder, Slideshow} from '../util/index';
import bgImg from '../../assets/about/aboutUsHeader.png'
import bridgeImg from '../../assets/about/bridge.png'
import eyeImg from '../../assets/about/eye.png'
import { Element } from 'react-scroll'
import { AnimationOnScroll } from 'react-animation-on-scroll';
import 'animate.css/animate.min.css'


const paddingTop = 250;
const paddingBot = 250;
const title = <div><span style={{color: "white"}}>Brunel</span><span style={{color: "rgb(0, 28, 153)", textDecoration:"bold"}}>Talent</span><span style={{color: "white"}}>MarketPlace</span></div>


const AboutUs = () => {
  return (
    <React.Fragment>
    <Element id='about-section' name='about-section'>
      <Header bgImg={bgImg} title={<h1 style={{color:"white"}}>About Us</h1>} />
      <div className="BTM__about" id="BTM__about">
        <div className="BTM__about_BG"/>
        {/* Change section into single vision and mission section */}
        {/* Add Testimonials in this section */}
        {/* Create a BTM email from jeremy */}
        
        
        <AnimationOnScroll 
          animateIn='animate__fadeIn'
          animateOnce='true'>
          <div className='BTM__statements'>
            <div className='BTM__statements_overlay'>
            <AnimationOnScroll 
                animateIn='animate__zoomIn'
                animateOnce='true'>

              <Element id='mission-section' name='mission-section'>
                <div className='BTM__statement_content'>
                  <h1>Our Mission</h1>
                  <p>To foster symbiotic relationships between industry and academia through innovative IT & Data Science services delivered by talented students and supported by our leading experts.</p>
                </div>
              </Element>
              <Element id='vision-section' name='vision-section'>
                <div className='BTM__statement_content'>
                  <h1>Our Vision</h1>
                  <p>To become a recognisable and viable IT consultancy known for its Research & Development services for West London businesses. We aspire to give 2% of the computer department’s student cohort the opportunity to participate in BTM projects. We aim to expand this model to other university departments, such as design, business management, and mechanical engineering.  </p>
                </div>
              </Element>
            </AnimationOnScroll>
            </div>
          </div>
          <div className='BTM__whychooseus'>
            <h1>Why choose Us</h1>
            <Element id='our-initiative' name='our-initiative'>
              <div className='BTM__whychooseus_content'>
                <h2>Our Initiative</h2>
                <p>We are not a profit-driven organisation, rather we are a marketplace. That aims to foster symbiotic relations between our customers and the university</p>
              </div>
            </Element>
            <Element id='our-talent' name='our-talent'>
              <div className='BTM__whychooseus_content'>
                <h2>Our Talent</h2>
                <p>We are distinguished by our talent, which consists of staff-leading specialists as well as our talented students. that are determined to embark on their professional journeys.</p>
              </div>
            </Element>
            <Element id='our-company-culture' name='our-company-culture'>
              <div className='BTM__whychooseus_content'>
                <h2>Our Company Culture</h2>
                <p>Our talent pool is differentiated into our talented students working alongside our staff-leading specialists in conjunction.</p>
              </div>
            </Element>
            <Element id='our-perserverence' name='our-perseverence'>
              <div className='BTM__whychooseus_content'>
                <h2>Our Perseverence</h2>
                <p>Adopting the agile strategy, our student talent is resilient and will continue to preserve relentlessly until our tech solution accurately meets the customers' standards.</p>
              </div>
            </Element>
            <Element id='our-competiveness' name='our-competiveness'>
              <div className='BTM__whychooseus_content'>
                <h2>Our Competiveness</h2>
                <p>Due to our pioneering company culture,  we are able to garner diverse ideas conceived by our student talent but strengthened and founded on the knowledge and skills of our staff-leading specialists.</p>
              </div>
            </Element>
          </div>
        </AnimationOnScroll>

        <Element id='testimonial-section' name='testimonial-section'>
          <div className="BTM__testimonials">
            <h2 style={{color: "white", fontSize: 30, margin: 20}}>Watch Our Testimonials</h2>
            <Slideshow/>
          </div>
        </Element>
        {/* <ContentHolder bgImg={bridgeImg} title={<h1>Our Mission</h1>} content={<div style={{color: "white", fontSize: 30}}><p>To bridge the gap between industry and academia through innovative IT & Data Science services. Unlike most of our competition, we are not a profit-driven organisation. Rather, we are a marketplace, that aims to foster symbiotic relations between our customers and the university. We are distinguishable by our bank of both talented students as well as staff-leading specialists.</p></div>} topP={paddingTop} bottomP={paddingBot}/>
        <ContentHolder bgImg={eyeImg} title={<h1>Our Vision</h1>} content={<div style={{color: "white", fontSize: 30}}><p>To become a recognisable and viable IT consultancy known for its Research & Development services for West London businesses. We aspire to give 2% of the computer department’s student cohort the opportunity to participate in BTM projects. We aim to expand this model to other university departments, such as design, business management, and mechanical engineering.  </p></div>} topP={paddingTop} bottomP={paddingBot}/> */}
      </div>
    </Element>
  </React.Fragment>
  )
}

export default AboutUs