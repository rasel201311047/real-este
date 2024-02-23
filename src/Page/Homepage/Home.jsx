import React from 'react';
import Navber from './Navber';
import Footer from './Footer';
import Feture from './Feture';
import Properties from './Properties';
import Clientfrom from './Clientfrom';

const Home = () => {
    return (
        <div>
            <Navber></Navber>
            <Feture></Feture>
            <Properties></Properties>
            
            <Footer></Footer>
        </div>
    );
};

export default Home;