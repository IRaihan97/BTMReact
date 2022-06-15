import React from 'react'
import AwesomeSlider from 'react-awesome-slider'
import 'react-awesome-slider/dist/styles.css';
import './slideshow.css'
import Mandeep from '../../../assets/experts/mandeepbanner.png'
import Phillip from '../../../assets/experts/phillipbanner.png'


const Slideshow = () => {
    return (
    <div className='slider__holder'>
        <AwesomeSlider>
            <div className='testimonial__slides'>
                <a href='https://youtu.be/B8Qi0zCwnTg'>
                    <img src={Mandeep} width="100%" height="100%"/>
                </a>
            </div>
            <div className='testimonial__slides'>
                <a href='https://youtu.be/kvqfa1wolj0'>
                    <img src={Phillip} width="100%" height="100%"/>
                </a>
            </div>
        </AwesomeSlider>
    </div>
  )
}

export default Slideshow