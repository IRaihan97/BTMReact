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
              <ServiceCard title="App Development" content="Testing content for this card that is supposed to hold a service for the website. Thank you very much"/>          </div>
        </div>
      </div>
    </Element>
  </React.Fragment>
  )
}

export default Services