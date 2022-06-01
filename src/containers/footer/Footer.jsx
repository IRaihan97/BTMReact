import React from 'react';
import './footer.css';
import { Element } from 'react-scroll'
import logo from '../../assets/footer/logo.png'

const Footer = () => {
  return (
    <React.Fragment>
      <Element id='footer-section' name='footer-section'>
        <div className="BTM__footer" id="BTM__footer">
          <div className="BTM__footer_content">
            <img src={logo} alt="this is car image"/>
            <div className='sections__container'>
              <div className='footer__sections'>
                <h4>Section Title</h4>
                <a>Link 1</a>
                <a>Link 2</a>
                <a>Link 3</a>
                <a>Link 4</a>
              </div>
              <div className='footer__sections'>
                <h4>Section Title</h4>
                <a>Link 1</a>
                <a>Link 2</a>
                <a>Link 3</a>
                <a>Link 4</a>
              </div>
              <div className='footer__sections'>
                <h4>Section Title</h4>
                <a>Link 1</a>
                <a>Link 2</a>
                <a>Link 3</a>
                <a>Link 4</a>
              </div>
              <div className='footer__sections'>
                <h4>Section Title</h4>
                <a>Link 1</a>
                <a>Link 2</a>
                <a>Link 3</a>
                <a>Link 4</a>
              </div>
            </div>
          </div>
          <br></br>
          <p>© 2022 BTM Brunel Talent Market Place</p>
        </div>
      </Element>
    </React.Fragment>
  )
}

export default Footer