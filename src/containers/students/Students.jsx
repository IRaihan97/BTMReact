import React from 'react'
import './students.css'
import { Element } from 'react-scroll'
import { StudentCard } from '../util'
import IslamRaihan from '../../assets/IslamRaihan.png'

const Students = () => {
  return (
    <React.Fragment>
      <Element id='students-section' name='students-section'>
        <div className="BTM__students" id="BTM__students">
          <div className="BTM__students_BG"/>
            <div className="students__overlay">
              <div className="students__content">
                <StudentCard title={<h3>Islam Raihan</h3>} content={<p>Testing Content For Student</p> } studentPhoto={IslamRaihan}></StudentCard>
              </div>
          </div>
        </div>
      </Element>
    </React.Fragment>
  )
}

export default Students