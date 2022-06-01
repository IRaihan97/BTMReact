import React from 'react'
import './contactUs.css'
import { Element } from 'react-scroll'

const ContactUs = () => {
  return (
    <React.Fragment>
      <Element id='contact-section' name='contact-section'>
        <div className="BTM__contact" id="BTM__contact">
          <div className="BTM__contact_BG">
            <div className="contact__overlay">
              <div className='contact__msg'>
                <h1> Contact Us</h1>
                <p> We offer a multitude of services withing our domain
If you would like to know more, submit an enquiry through the form</p>
              </div>
              <div className='contact__form'>
                  FORM PLACEHOLDER
              </div>
            </div>
          </div>
        </div>
      </Element>
    </React.Fragment>
  )
}

export default ContactUs