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
import Kate from '../../assets/experts/Kate_Hone.png'
import Tim from '../../assets/experts/Timothy_Cribbin.png'
import NoPic from '../../assets/experts/No_Picture.png'

const row1 =  <>
                <StudentCard 
                  role={<h3>Director</h3>}
                  name={<h3>Alan Serrano Rico</h3>} 
                  description={<p>Dr Alan Serrano-Rico is an experienced researcher, whose research lies in the domain of information systems and organisational strategy. More specifically he has an interest in incorporating his research and applying them into real-life challenges organisations may face when adopting ICT in complex environments. Some examples of the collaborations with industry includes that of the BMW Group in UK.</p> } 
                  skills={<p>•	Information Systems<br/>•	Business Organisational Strategy<br/>•	Data Communication Systems<br/>•	Social Network Analysis (SNA)<br/>•	Business Process & Simulation</p>}
                  studentPhoto={Alan}
                  profile={"/"}
                  lin={"/"}
                  expert="true"
                />
              </>

const row2 =  <>
                <StudentCard 
                  role={<h4>AI Expert</h4>}
                  name={<h3>Alina Miron</h3>} 
                  description={<p>-	COULD NOT FIND ANYTHING YET…</p> } 
                  skills={<p>•	Multimodal Systems<br/>•	Machine Learning<br/>•	Data Analysis<br/>•	Artificial Intelligence<br/>•	Software Development</p>}
                  studentPhoto={Alina}
                  profile={"/"}
                  lin={"/"}
                  expert="true"
                />
                <StudentCard 
                  role={<h4>AI Expert</h4>}
                  name={<h3>Stephen Swift</h3>} 
                  description={<p>Dr Stephen Swift is a researcher, whose interests spans across multi-variate time series analysis, heuristic search, data clustering and evolutionary computation. He has applied his research to various real-world areas including Engineering, Bioinformatics and Health Care. In terms of industry, he also spent 4 years working as a Web Designer, Programmer, and Technical Architect at several companies such as Bull Information Systems Ltd.</p> } 
                  skills={<p>•	Multi-variate Time Series Analysis<br/>•	Heuristic Search<br/>•	Data Clustering<br/>•	Evolutionary Computation<br/>•	Artificial Intelligence</p>}
                  studentPhoto={Steph}
                  profile={"/"}
                  lin={"/"}
                  expert="true"
                />
              </>

const row3 = <>
                <StudentCard 
                  role={<h4>AI Expert</h4>}
                  name={<h3>Alaa Marshaan</h3>} 
                  description={<p>Dr Alaa Marshaan is a skilled researcher, who primarily focuses his research on intelligent data analysis, information management and improving operational business information systems. Furthermore, he has garnered 10+ years’ experience working in various IT positions at corporations such as the UK branch of the BMW Group.</p> } 
                  skills={<p>•	Social Network Analysis (SNA)<br/>•	Machine Learning<br/>•	Intelligent Data Analysis<br/>•	Information Systems (Business Informatics)<br/>•	Internet of Things (IoT)</p>}
                  studentPhoto={Alaa}
                  profile={"/"}
                  lin={"/"}
                  expert="true"
                />
                <StudentCard 
                  role={<h4>AI Expert</h4>}
                  name={<h3>Mahir Arzoky</h3>} 
                  description={<p>Dr Mahir Arzoky is a researcher, whose interest corresponds with artificial intelligence, intelligent data analysis, heuristic search, search-based software engineering, and data clustering & database refactoring. On top of this, he is also a core member of FIAR-NET, where he frequently promotes the collaborations between industry and academic research in software engineering through a series of national and internal workshops.</p> } 
                  skills={<p>•	Artificial Intelligence<br/>•	Intelligent Data Analysis<br/>•	Heuristic Search<br/>•	Search-Based Software Engineering<br/>•	Data Clustering & Database Refactoring</p>}
<<<<<<< HEAD
                  studentPhoto={Alaa}
                  profile={"/"}
                  lin={"/"}
                  expert="true"
=======
                  studentPhoto={NoPic}
>>>>>>> 6cc0d4796dfa95ae9253f3c22f0576253f617b34
                />
              </>

const row4 =  <>
                <StudentCard 
                  role={<h4>Software Engineering Expert</h4>}
                  name={<h3>Guiseppe Destefanis</h3>} 
                  description={<p>Dr Giuseppe Destefanis is a researcher, whose focal areas revolve around mining software repositories, empirical software engineering, agile methodologies, software metrics & patterns, and blockchain & cryptocurrencies. Furthermore, He has 15+ years’ experience, working as a consultant and research affiliate several different companies, such as UCL Centre for Blockchain Technologies (CBT).</p> } 
                  skills={<p>•	Mining Software Repositories<br/>•	Empirical Software Engineering<br/>•	Agile Methodologies<br/>•	Software Metrics & Patterns<br/>•	Blockchain & Cryptocurrencies</p>}
                  studentPhoto={Giuseppe}
                  profile={"/"}
                  lin={"/"}
                  expert="true"
                />
                <StudentCard 
                  role={<h4>Software Engineering Expert</h4>}
                  name={<h3>Rumyana Neykova</h3>} 
                  description={<p>Over the course of her career, Dr Rumyana Neykova has become an accomplished researcher. Her body of work builds on the foundations of cryptocurrency theory and type systems. Furthermore, she has accumulated years of industrial experience working as a software developer in companies and corporations such as Microsoft.</p> } 
                  skills={<p>•	Type Systems<br/>•	Distributed Systems<br/>•	Concurrency<br/>•	Verification<br/>•	Software Development</p>}
                  studentPhoto={Rumy}
                  profile={"/"}
                  lin={"/"}
                  expert="true"
                />
              </>

const row5 = <>
              <StudentCard 
                  role={<h4>Data Analysis Expert</h4>}
                  name={<h3>Alan Seranno-Rico</h3>} 
                  description={<p>Dr Alan Serrano-Rico is an experienced researcher, whose research lies in the domain of information systems and organisational strategy. More specifically he has an interest in incorporating his research and applying them into real-life challenges organisations may face when adopting ICT in complex environments. Some examples of the collaborations with industry includes that of the BMW Group in UK.</p> } 
                  skills={<p>•	Information Systems<br/>•	Business Organisational Strategy<br/>•	Data Communication Systems<br/>•	Social Network Analysis (SNA)<br/>•	Business Process & Simulation</p>}
                  studentPhoto={Alan}
                  profile={"/"}
                  lin={"/"}
                  expert="true"
                />
              <StudentCard 
                  role={<h4>Research and Development Expert</h4>}
                  name={<h3>David Bell</h3>} 
                  description={<p>Dr David Bell is a multi-displinary researcher, who has applied novel digital service solutions in a range of varying domains (including a range of health settings). Furthermore, he has worked for several small to large software development companies. Including that of an investing banking firm, to which he became the technology director.</p> } 
                  skills={<p>•	Service Design<br/>•	Emotion AI<br/>•	Cyber Security<br/>•	Semantic Technologies<br/>•	Medical Technologies (MedTech)</p>}
                  studentPhoto={David}
                  profile={"/"}
                  lin={"/"}
                  expert="true"
                />
             </>

const row6 = <>
              <StudentCard 
                  role={<h4>User Experience Expert</h4>}
                  name={<h3>Kate Hone</h3>} 
                  description={<p>Dr Kate Hone is a highly experienced academic leader with a research background in the field of digital user experience (UX). Her research has focused on the human factor implications of using speech and emotion within system design. In addition to this, she has, also, incorporated this research into several projects that she has partaken in such as the Millennium Homes project as well as many others. Furthermore, she is the head of the Computer Science department at Brunel University.</p> } 
                  skills={<p>•	Spoken Dialogue Systems<br/>•	Affective Computing<br/>•	Health Informatics<br/>•	Intelligent Data Analysis<br/>•	Applied Ergonomics</p>}
                  studentPhoto={Kate}
                  profile={"/"}
                  lin={"/"}
                  expert="true"
                />
              <StudentCard 
                  role={<h4>User Interface Expert</h4>}
                  name={<h3>Timothy Cribbin</h3>} 
                  description={<p>Dr Timothy Cribbin is a researcher, whose primary expertise and interests lies in the realm of visual text analytics. Over the course of his career, he has worked on several funded projects. To which, he has consolidated using his research. Some include the likes of researching new methods and applications of visual text analytics in multiple diverse areas.</p> } 
                  skills={<p>•	Information Visualisation & Retrieval<br/>•	Text Mining<br/>•	Interaction Design/ HCI<br/>•	Digital Libraries<br/>•	Social Media Analytics (SNA)</p>}
                  studentPhoto={Tim}
                  profile={"/"}
                  lin={"/"}
                  expert="true"
                />
             </>

const Experts = () => {
  return (
    <React.Fragment>
      <Element id='experts-section' name='experts-section'>
        <Header bgImg={headerImg} title={<h1 style={{color:"white"}}>Our Talents</h1>} />
        <div className="BTM__experts" id="BTM__experts">
          <div className="BTM__experts_BG"/>
          <div className="experts__content">
            <h2 style={{color: "white", fontSize: 40}}>Executive Team</h2>
            <div className="experts__cards">
              {row1}
            </div>
            <h2 style={{color: "white", fontSize: 40}}>Data Analysis and AI Experts</h2>
            <div className="experts__cards">
              {row2}
            </div>
            <div className="experts__cards">
              {row3}
            </div>
            <h2 style={{color: "white", fontSize: 40}}>Software Development Experts</h2>
            <div className="experts__cards">
              {row4}
            </div>
<<<<<<< HEAD
            {/* <div className="experts__cards">
              {row5}
            </div> */}
            <h2 style={{color: "white", fontSize: 40}}>Applied R&D Experts</h2>
            <div className="experts__cards">
              {row5}
            </div>
            <h2 style={{color: "white", fontSize: 40}}>UX & UI Experts</h2>
=======
            <h2 style={{color: "white", fontSize: 30}}>Applied R&D Experts</h2>
            <div className="experts__cards">
              {row5}
            </div>
            <h2 style={{color: "white", fontSize: 30}}>UI & UI Experts</h2>
>>>>>>> 6cc0d4796dfa95ae9253f3c22f0576253f617b34
            <div className="experts__cards">
              {row6}
            </div>
          </div>
        </div>
      </Element>
      
    </React.Fragment>
  )
}

export default Experts