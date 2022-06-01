import React from 'react'
import './experts.css'
import { Element } from 'react-scroll'
import headerImg from '../../assets/experts/header.png'
import {Header, StudentCard} from '../util/index'
import Alan from '../../assets/experts/Alan_Serrano_Rico.png'
import Giuseppe from '../../assets/experts/Giuseppe_Destefanis.png'
import Rumy from '../../assets/experts/Rumyana_Neykova.png'
import Alina from '../../assets/experts/Alina_Miron.png'
import Steph from '../../assets/experts/Stephen_Swift.png'
import David from '../../assets/experts/David_Bell.png'
import Alaa from '../../assets/experts/Alaa_Marshan.png'

const row1 =  <>
                <StudentCard 
                  title={<h3>Alan Serrano Rico</h3>} 
                  description={<p>I am an enthusiastic individual who is fascinated by technology and its constant advancements. I am currently going through my final year on Computer Science Software Engeering course.</p> } 
                  skills={<p>API Development<br/>Web Development<br/>Software Engineering<br/>Java<br/>C#</p>}
                  studentPhoto={Alan}
                />
              </>

const row2 =  <>
                <StudentCard 
                  title={<h3>Giuseppe Destefanis</h3>} 
                  description={<p>I am an enthusiastic individual who is fascinated by technology and its constant advancements. I am currently going through my final year on Computer Science Software Engeering course.</p> } 
                  skills={<p>API Development<br/>Web Development<br/>Software Engineering<br/>Java<br/>C#</p>}
                  studentPhoto={Giuseppe}
                />
                <StudentCard 
                  title={<h3>Rumyana Neykova</h3>} 
                  description={<p>I am an enthusiastic individual who is fascinated by technology and its constant advancements. I am currently going through my final year on Computer Science Software Engeering course.</p> } 
                  skills={<p>API Development<br/>Web Development<br/>Software Engineering<br/>Java<br/>C#</p>}
                  studentPhoto={Rumy}
                />
                <StudentCard 
                  title={<h3>Alina Miron</h3>} 
                  description={<p>I am an enthusiastic individual who is fascinated by technology and its constant advancements. I am currently going through my final year on Computer Science Software Engeering course.</p> } 
                  skills={<p>API Development<br/>Web Development<br/>Software Engineering<br/>Java<br/>C#</p>}
                  studentPhoto={Alina}
                />
                
              </>

const row3 =  <>
                <StudentCard 
                  title={<h3>Alaa Marshan</h3>} 
                  description={<p>I am an enthusiastic individual who is fascinated by technology and its constant advancements. I am currently going through my final year on Computer Science Software Engeering course.</p> } 
                  skills={<p>API Development<br/>Web Development<br/>Software Engineering<br/>Java<br/>C#</p>}
                  studentPhoto={Alaa}
                />
                <StudentCard 
                  title={<h3>Stephen Swift</h3>} 
                  description={<p>I am an enthusiastic individual who is fascinated by technology and its constant advancements. I am currently going through my final year on Computer Science Software Engeering course.</p> } 
                  skills={<p>API Development<br/>Web Development<br/>Software Engineering<br/>Java<br/>C#</p>}
                  studentPhoto={Steph}
                />
                <StudentCard 
                  title={<h3>David Bell</h3>} 
                  description={<p>I am an enthusiastic individual who is fascinated by technology and its constant advancements. I am currently going through my final year on Computer Science Software Engeering course.</p> } 
                  skills={<p>API Development<br/>Web Development<br/>Software Engineering<br/>Java<br/>C#</p>}
                  studentPhoto={David}
                />
                
              </>

const Experts = () => {
  return (
    <React.Fragment>
      <Element id='experts-section' name='experts-section'>
        <Header bgImg={headerImg} title={<h1 style={{color:"white"}}>Experts</h1>} />
        <div className="BTM__experts" id="BTM__experts">
          <div className="BTM__experts_BG"/>
          <div className="BTM__testimonials">
            SLIDESHOW
          </div>
          <div className="experts__content">
            <div className="experts__cards">
              {row1}
            </div>
            <div className="experts__cards">
              {row2}
            </div>
            <div className="experts__cards">
              {row3}
            </div>
          </div>
        </div>
      </Element>
      
    </React.Fragment>
  )
}

export default Experts