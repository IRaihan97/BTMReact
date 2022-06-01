import React from 'react'
import './students.css'
import { Element } from 'react-scroll'
import { StudentCard, Header, ContentHolder } from '../util'
import IslamRaihan from '../../assets/students/IslamRaihan.png'
import headerImg from '../../assets/students/header.png'

const row1 =  <>
                <StudentCard 
                  title={<h3>Islam Raihan</h3>} 
                  description={<p>I am an enthusiastic individual who is fascinated by technology and its constant advancements. I am currently going through my final year on Computer Science Software Engeering course.</p> } 
                  skills={<p>API Development<br/>Web Development<br/>Software Engineering<br/>Java<br/>C#</p>}
                  studentPhoto={IslamRaihan}
                />
                <StudentCard 
                  title={<h3>Islam Raihan</h3>} 
                  description={<p>I am an enthusiastic individual who is fascinated by technology and its constant advancements. I am currently going through my final year on Computer Science Software Engeering course.</p> } 
                  skills={<p>API Development<br/>Web Development<br/>Software Engineering<br/>Java<br/>C#</p>}
                  studentPhoto={IslamRaihan}
                />
                
                
              </>

const Students = () => {
  return (
    <React.Fragment>
      <Element id='students-section' name='students-section'>
      <Header bgImg={headerImg} title={<h1 style={{color:"white"}}>Students</h1>} />
        <div className="BTM__students" id="BTM__students">
          <h2 style={{color: "white", fontSize: 30}}>Meet Our Students</h2>
          <div className="BTM__students_BG"/>
          <div className="students__overlay">
            <div className="students__content">
              <div className="students__cards">
                {row1}
              </div>
            </div>
          </div>
        </div>
      </Element>
    </React.Fragment>
  )
}

export default Students