import { Header, AboutUs, Services, Experts, Students, ContactUs} from '../../containers';
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
        </div>        
    )
}

export default Home;