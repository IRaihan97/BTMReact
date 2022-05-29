import React from 'react'
import './services.css'
import { Element } from 'react-scroll'
import { ServiceCard } from '../util'

const Services = () => {
  return (
  <React.Fragment>
    <Element id='services-section' name='services-section'>
      <div className="BTM__services" id="BTM__services">
        <div className="BTM__services_BG"/>        
          <div className="services__overlay">

          Data Analysis and AI
          <div className="data__analysis__and__AI">
              <ServiceCard title={<h3>Social Media Analytics</h3>} content={<p>Our experts use their industrial experience and academic rigour to find meaning in data gathered from social channels to support business decisions.</p>}/>         
              <ServiceCard title={<h3>Algorithm Testing</h3>} content={<p>We use scientific methods to evaluate algorithms' validity or to compare the efficiency of a group of algorithms addressing a specific problem.</p>}/>
              <ServiceCard title={<h3>Adhoc Projects</h3>} content={<p>Providing either completely or sectionalised development on ADHOC projects following a standard data analysis life cycle:<br/>1. business understanding;<br/> 2. data understanding;<br/>3. data preparation;<br/>4. exploratory analysis and modelling;<br/>5. validation<br/>6. visualisation and presentation.</p>}/>
            </div>

          Software Development
          <div className="software__development">
            <ServiceCard title={<h4>Mobile Apps</h4>} content={<p>We develop fully functional mobile applications in Android and IOS using agile methodologies, allowing a collaborative environment with our customers.</p>}/>
            <ServiceCard title={<h4>Web Development</h4>} content={<p>Our talented students are well equipped to drive the building and creation of websites, including aspects of web design, web publishing, web programming, and database management.</p>}/>
            <ServiceCard title={<h4>API</h4>} content={<p>We design and deploy application  programming interfaces that enable applications to integrate with each other. Generating a culture of transparency, leading to data-sharing and information flowing.</p>}/>
          </div>

          UI and UX Design
          <div className="UI__and__UX__design">
            <ServiceCard title={<h5>UX Wireframe Prototype</h5>} content={<p>How a user interacts with and experiences a product, system, or service is relevant to most business. It includes a person's perceptions of utility, ease of use, and efficiency. Our talented students and experts will help you to design and develop experiences, products, and services of high quality with digital media at their core. </p>}/>
          </div>

          Proof of Concept
          <div className="proof__of__concept">
           <ServiceCard title={<h6>Software Development</h6>} content={<p>Demonstrating POCs through the deployment of sectionalised software development on software such as: mobile applications, websites, and APIs.</p>}/>
           <ServiceCard title={<h6>Data Analysis and AI</h6>} content={<p>Demonstrate POCs through the deployment of sectionalised software development specifically on artificial intelligences software.</p>}/>
          </div>

          Applied R and D
           <div className="applied__R__and_D">
             <ServiceCard title={<h7>IT Trends Insight Reports</h7>} content={<p>We help organisations to answer R and D questions related to IT that can be found in our international bank of scientific literature sources. Our PG students and experts are well equipped to dig out the information you need and present it in a report for the layperson.</p>}/>
             <ServiceCard title={<h7>Tech Monitor</h7>} content={<p>Our large network of academics places us in a position that we can monitor the upcoming trends on IT in the academic sector. Using our international academic network, we produce reports that provides a deeper understanding to various upcoming trends in the academic world of IT. This will guide our clients to progressive and strategic decisions that will aid their business decisions in the future.</p>}/>
           </div>

        </div>
      </div>
    </Element>
  </React.Fragment>
  )
}

export default Services