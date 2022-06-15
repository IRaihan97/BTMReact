import React from 'react'
import './contentholder.css'
import { AnimationOnScroll } from 'react-animation-on-scroll'
import 'animate.css/animate.min.css'

const ContentHolder = ({bgImg, title, content, topP, bottomP}) => {
  return (
    
      <div className="BTM__contentHolder" id="BTM__contentHolder">
        <AnimationOnScroll 
      animateIn='animate__fadeIn'
      animateOnce='true'>
        <div className="BTM__contentHolder_BG" style={{ backgroundImage: `url(${bgImg})`}}>
          <div className="contentHolder__overlay">
            <div className="contentHolder__content" style={{paddingTop: topP, paddingBottom: bottomP}}>
              <div className='holder_title'>{title}</div>
              <div className='holder_content'>{content}</div>
            </div>
          </div>
        </div>
        </AnimationOnScroll>
      </div>
    
  )
}

export default ContentHolder;