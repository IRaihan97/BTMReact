import React from 'react'
import './students.css'
import { Element } from 'react-scroll'
import { StudentCard, Header, ContentHolder } from '../util'
import IslamRaihan from '../../assets/students/IslamRaihan.png'
import ElainaTesfai from '../../assets/students/ElainaTesfai.png'
import headerImg from '../../assets/students/header.png'

const row1 =  <>
                <StudentCard 
                  name={<h3>Elaina Tesfai</h3>} 
                  description={<p>I am a dependable, quick-thinking and responsible individual that thoroughly enjoys challenging myself and pushing the boundaries of what I can achieve. Currently, I am, also, a first year undergraduate Computer Science student.</p> } 
                  skills={<p>Highly profecient writing ability<br/>Excellent communicational skiills<br/>Incentive collaborator<br/>Self-starter<br/>Python<br/>Java</p>}
                  studentPhoto={ElainaTesfai}
                  profile={"INSERT GITHUB LINK HERE"}
                  lin={"INSERT LINKEDIN LINK HERE"}
                />
                
                
              </>

const row2 =  <>
                <StudentCard 
                  name={<h3>Islam Raihan</h3>} 
                  description={<p>I am an enthusiastic individual who is fascinated by technology and its constant advancements. I am currently going through my final year on Computer Science Software Engeering course.</p> } 
                  skills={<p>API Development<br/>Web Development<br/>Software Engineering<br/>Java<br/>C#</p>}
                  studentPhoto={IslamRaihan}
                />
              </>

const Students = () => {
  return (
    <React.Fragment>
      <Element id='students-section' name='students-section'>
      {/* <Header bgImg={headerImg} title={<h1 style={{color:"white"}}>Students</h1>} /> */}
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

      <Element id='students-contact-section' name='students-contact-section'>
        <div className="BTM__students__contactus" id="BTM__students__contactus">
          <h2 style={{color: "coral", fontSize: 30}}>How to apply</h2>
            <p style={{color: "white", fontSize: 20}}>You can apply to part of our talented student pool by simply sending us an email with your Brunel account. Before applying, you need to be sure you have read the Jobshop page regarding limits on how many hours you can work and how to maintain a healthy work-study balance (https://intra.brunel.ac.uk/s/PDC/job-shop/Pages/Working-hours.aspx). We pay by the hour and the rate depends on the job at hand. Thus, our pool of students will need to register with the Jobshop. I encourage you to start the registration process before you apply, as it may take some time for your paperwork to go through. For registration to the Jobshop, follow this link: https://intra.brunel.ac.uk/s/PDC/job-shop/Pages/Join-our-ready-to-work-pool-of-student-candidates.aspx</p>
        </div>
      </Element>
    </React.Fragment>
  )
}

export default Students