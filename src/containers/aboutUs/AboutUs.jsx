import React from 'react'
import './aboutUs.css'
import {Header, Slideshow} from '../util/index';
import bgImg from '../../assets/about/aboutUsHeader.png'
import { Element } from 'react-scroll'
import { AnimationOnScroll } from 'react-animation-on-scroll';
import 'animate.css/animate.min.css'

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
          <Element id='why-section' name='why-section'>
            <div className='BTM__whychooseus'>
              <h1>Why choose Us</h1>
              <div className='BTM__whychooseus_content'>
                <AnimationOnScroll animateIn='animate__fadeInDown'animateOnce='true'>
                  <h2>Our Initiative</h2>
                </AnimationOnScroll>
                <AnimationOnScroll animateIn='animate__fadeIn' delay={500} animateOnce='true'>
                  <p>We are not a profit-driven organisation. Instead, we aim to foster better relations between our customers, lead scientists, and talented students</p>
                </AnimationOnScroll>
              </div>
              <div className='BTM__whychooseus_content'>
              <AnimationOnScroll animateIn='animate__fadeInDown' animateOnce='true'>
                <h2>Our Talent</h2>
              </AnimationOnScroll>
              <AnimationOnScroll animateIn='animate__fadeIn' animateOnce='true' delay={500}>
                <p>Our talented students are hand-picked based on their grades and, more importantly, on their soft skills demonstrated throughout the year in labs, classes, teamwork, and other face-to-face interactions.</p>
              </AnimationOnScroll>
              </div>
              <div className='BTM__whychooseus_content'>
              <AnimationOnScroll animateIn='animate__fadeInDown' animateOnce='true'>
                <h2>Our Company Culture</h2>
              </AnimationOnScroll> 
              <AnimationOnScroll animateIn='animate__fadeIn' animateOnce='true' delay={500}>
                <p>Our staff base is our talented students who work side to side with our world-leading specialists to deliver on time and with utmost quality.</p>
              </AnimationOnScroll>
              </div>
              <div className='BTM__whychooseus_content'>
              <AnimationOnScroll animateIn='animate__fadeInDown' animateOnce='true'>
                <h2>Our Scope</h2>
              </AnimationOnScroll>
              <AnimationOnScroll animateIn='animate__fadeIn' delay={500} animateOnce='true'>
                <p>Our services do not stop in basic consultancy, we are used to tackling innovative and challenging projects in R&D. </p>
              </AnimationOnScroll>
              </div>
              <div className='BTM__whychooseus_content'>
              <AnimationOnScroll animateIn='animate__fadeInDown' animateOnce='true'>
                <h2>Our Competiveness</h2>
              </AnimationOnScroll>
              <AnimationOnScroll animateIn='animate__fadeIn' delay={500} animateOnce='true'>
                <p>Because of our initiative, we can beat our competition with viable prices, and offer a quality of work with a scientific edge.</p>
              </AnimationOnScroll>
              </div>
            </div>
          </Element>
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