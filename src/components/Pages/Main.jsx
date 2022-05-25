import { Home, AboutUs, Services, Experts, Students, ContactUs, BTMProjects} from '../../containers';
import React from 'react';

const Main = () => {
    return(
        <div>
            <Home/>
            <AboutUs />
            <Services />
            <Experts />
            <Students />
            <ContactUs />
            <BTMProjects />
        </div>        
    )
}

export default Main;