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
              <ServiceCard title="Social Media Analytics" content="Our experts use their industrial experience and academic rigour to find meaning in data gathered from social channels to support business decisions."/>         
              <ServiceCard title="Algorithm Testing" content="We use scientific methods to evaluate algorithms' validity or to compare the efficiency of a group of algorithms addressing a specific problem."/>
              <ServiceCard title="Adhoc Projects" content="Providing either completely or sectionalised development on ADHOC projects following a standard data analysis life cycle: 1. business understanding; 2. data understanding; 3. data preparation; 4. exploratory analysis and modelling; 5. validation, and 6. visualisation and presentation."/>
            </div>
        </div>
      </div>
    </Element>
  </React.Fragment>
  )
}

export default Services