import { Home, AboutUs, Services, Experts, Students, ContactUs} from '../../containers';
import React from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import "animate.css/animate.min.css";



const Main = () => {
    return(
        <div>
            <AnimationOnScroll 
                animateIn='animate__fadeIn'
                animateOnce='true'>
                <Home/>
            </AnimationOnScroll>

            <AnimationOnScroll 
                animateIn='animate__fadeIn'
                animateOnce='true'>
                <AboutUs />
            </AnimationOnScroll>            
            
            <AnimationOnScroll 
                animateIn='animate__fadeIn'
                animateOnce='true'>
                <Services />
            </AnimationOnScroll>
            
            <AnimationOnScroll 
                animateIn='animate__fadeIn'
                animateOnce='true'>
                <Experts />
            </AnimationOnScroll>
            
            <AnimationOnScroll 
                animateIn='animate__fadeIn'
                animateOnce='true'>
                <Students />
            </AnimationOnScroll>

            <AnimationOnScroll 
                animateIn='animate__fadeIn'
                animateOnce='true'>
                <ContactUs />
            </AnimationOnScroll>
            {/* <BTMProjects /> */}
            {/* <Footer /> */}
        </div>        
    )
}

export default Main;