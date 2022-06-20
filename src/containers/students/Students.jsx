import React from 'react'
import './students.css'
import { Element } from 'react-scroll'
import { StudentCard, Header, ContentHolder } from '../util'
import IslamRaihan from '../../assets/students/IslamRaihan.png'
import ElainaTesfai from '../../assets/students/ElainaTesfai.png'
import headerImg from '../../assets/students/header.png'

const row1 =  <>
                <StudentCard 
                  title={<h3>Islam Raihan</h3>} 
                  description={<p>I am an enthusiastic individual who is fascinated by technology and its constant advancements. I am currently going through my final year on Computer Science Software Engeering course.</p> } 
                  skills={<p>API Development<br/>Web Development<br/>Software Engineering<br/>Java<br/>C#</p>}
                  studentPhoto={IslamRaihan}
<<<<<<< HEAD
                  profile={"https://github.com/IRaihan97"}
                  lin={"https://www.linkedin.com/in/islam-raihan-714784195"}
=======
                />
                <StudentCard 
                  title={<h3>Elaina Tesfai</h3>} 
                  description={<p>I am a dependable, quick-thinking and responsible individual that thoroughly enjoys challenging myself and pushing the boundaries of what I can achieve. Currently, I am, also, a first year undergraduate Computer Science student.</p> } 
                  skills={<p>Highly profecient writing ability<br/>Excellent communicational skiills<br/>Incentive collaborator<br/>Self-starter<br/>Python<br/>Java</p>}
                  studentPhoto={ElainaTesfai}
                />
                
                
              </>

const row2 =  <>
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
>>>>>>> 6cc0d4796dfa95ae9253f3c22f0576253f617b34
                />
                
                
              </>

const Students = () => {
  return (
    <React.Fragment>
      <Element id='students-section' name='students-section'>
      <Header bgImg={headerImg} title={<h1 style={{color:"white"}}>Students</h1>} />
        <div className="BTM__students" id="BTM__students">
          <h2 style={{color: "white", fontSize: 30}}>Our Current Students</h2>
          <div className="students__content">
            <div className="students__cards">
              {row1}
            </div>
          </div>
          <h2 style={{color: "white", fontSize: 30}}>Graduated Students</h2>
          <div className="students__content">
            <div className="students__cards">
              {row2}
            </div>
          </div>
        </div>
      </Element>
    </React.Fragment>
  )
}

export default Students