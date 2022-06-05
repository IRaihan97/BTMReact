import React from 'react'
import AwesomeSlider from 'react-awesome-slider'
import 'react-awesome-slider/dist/styles.css';
import './slideshow.css'
import Mandeep from '../../../assets/experts/mandeep.mp4'
import Phillip from '../../../assets/experts/phillip.mp4'


const Slideshow = () => {
  return (
    <div className='slider__holder'>
        <AwesomeSlider bullets={false}>
            <div className='testimonial__slides'>
                <video src={Mandeep} width="100%" height="100%"/>
            </div>
            <div className='testimonial__slides'>
                <video src={Phillip} width="100%" height="100%"/>
            </div>
        </AwesomeSlider>
    </div>
  )
}

export default Slideshow