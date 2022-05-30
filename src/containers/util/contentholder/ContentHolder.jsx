import React from 'react'
import './contentholder.css'

const ContentHolder = ({bgImg, title, content}) => {
  return (
    <div className="BTM__contentHolder" id="BTM__contentHolder">
      <div className="BTM__contentHolder_BG" style={{ backgroundImage: `url(${bgImg})`}}>
        <div className="contentHolder__overlay">
          <div className="contentHolder__content">
            <div className='holder_title'>{title}</div>
            <div className='holder_content'>{content}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContentHolder;