import { Header, AboutUs, Services, Experts, Students, ContactUs, BTMProjects} from '../../containers';
import React from 'react';

const Home = () => {
    return(
        <div>
            <Header/>
            <AboutUs />
            <Services />
            <Experts />
            <Students />
            <ContactUs />
            <BTMProjects />
        </div>        
    )
}

export default Home;