import { Footer, Blog, Possibility, Features, WhatBTM, Header} from '../../containers';
import { Brand, CTA, Navbar} from '../../components';
import React from 'react';

const Home = () => {
    return(
        <div>
            <Header/>
            <Brand/>
            <WhatBTM/>
            <Features/>
            <Possibility/>
            <CTA/>
            <Blog/>
            <Footer/>
        </div>        
    )
}

export default Home;