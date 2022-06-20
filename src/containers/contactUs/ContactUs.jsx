import React from 'react'
import './contactUs.css'
import { Element } from 'react-scroll'
import {ContactForm} from '../util/index'

const ContactUs = () => {
  return (
    <React.Fragment>
      <Element id='contact-section' name='contact-section'>
        <div className="BTM__contact" id="BTM__contact">
          <div className="BTM__contact_BG">
            <div className="contact__overlay">
              <div className='contact__msg'>
                <h1> Contact Us</h1>
                <p> We offer a multitude of services within our domain. <br/>
                    If you would like to know more and get a quotation, please send us an email at: <br/><a style={{color: "#81AFDD"}} href="mailto:alan.edwin.serrano-rico@brunel.ac.uk?subject=BTM Query"> alan.edwin.serrano-rico@brunel.ac.uk</a></p>
              </div>
              <div className='contact__form'>
                <h1 style={{margin: "10px", fontSize: "40px"}}> Our Campus Location</h1>
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2481.9682476991866!2d-0.474937984027514!3d51.53214221671455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48766e0a6fcc751f%3A0x43eae5c365df7a7a!2sBrunel%20University%20London!5e0!3m2!1sen!2suk!4v1655718106408!5m2!1sen!2suk" 
                  width="600" 
                  height="450" 
                  style={{border:0, borderRadius: "10px"}} 
                  allowfullscreen="" 
                  loading="lazy" 
                  referrerpolicy="no-referrer-when-downgrade">
                  </iframe>
                  {/* <ContactForm/> */}
                  {/* Email*, Full name*, COmpany, JobTitle, Phone number, Message* 
                  Send Email to BTM Email */}
              </div>
            </div>
          </div>
        </div>
      </Element> 
      {/* ADD EMAIL (ALAN's), change message */}
    </React.Fragment>
  )
}

export default ContactUs