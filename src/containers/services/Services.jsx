import React from 'react'
import './services.css'
import { Element } from 'react-scroll'
import { ServiceCard } from '../util'

const Services = () => {
  return (
  <React.Fragment>
    <Element id='services-section' name='services-section'>
      <div className="BTM__services" id="BTM__services">
        <div className="BTM__services_BG"/>        
          <div className="services__overlay">
            <div className="services__content">
              <ServiceCard title={<h3>Social Media Analytics</h3>} content={<p>Our experts use their industrial experience and academic rigour to find meaning in data gathered from social channels to support business decisions.</p>}/>         
              <ServiceCard title={<h3>Algorithm Testing</h3>} content={<p>We use scientific methods to evaluate algorithms' validity or to compare the efficiency of a group of algorithms addressing a specific problem.</p>}/>
              <ServiceCard title={<h3>Adhoc Projects</h3>} content={<p>Providing either completely or sectionalised development on ADHOC projects following a standard data analysis life cycle:<br/>1. business understanding;<br/> 2. data understanding;<br/>3. data preparation;<br/>4. exploratory analysis and modelling;<br/>5. validation<br/>6. visualisation and presentation.</p>}/>
            </div>
        </div>
      </div>
    </Element>
  </React.Fragment>
  )
}

export default Services