import React from 'react';
import Navber from './Navber';
import Footer from './Footer';
import Feture from './Feture';
import Properties from './Properties';
import Clientfrom from './Clientfrom';
import Body from './Body';

const Home = () => {
    return (
        <>
        <div className='root'>
            <Body></Body>
            <Feture></Feture>
            <Properties></Properties>
            <Clientfrom></Clientfrom>
        </div>
        <Footer></Footer>
        </>

    );
};

export default Home;