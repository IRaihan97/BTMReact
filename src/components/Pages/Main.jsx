import { Home, AboutUs, Services, Experts, Students, ContactUs, BTMProjects, Footer} from '../../containers';
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
            {/* <BTMProjects /> */}
            <Footer />
        </div>        
    )
}

export default Main;