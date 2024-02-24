import React from 'react';
import { Link } from 'react-router-dom';
import im1 from '../../assets/sea.png'
import Navber from './Navber'
const Body = () => {
    const element=[{
        
        headcontaint:'24/7 Real Estate Closings',
        containparagrap:'We leverage AI and blockchain technology for smooth and secure transactions',
        listofstart:["Get Started","I'M AN AGENT","I'M AN AGENT","I'M A SELLER","I'M A  Buyer"],
    }]
    
    return (
        <div className='w-100 container rounded-3 mt-4' style={{backgroundImage:`url(${im1})`,backgroundRepeat:'no-repeat',backgroundSize:'cover',fontFamily:'Roboto'}}>
            <Navber></Navber>
           <div  className='d-md-flex flex-column flex-md-row align-items-center pb-2'>
            <div className='my-5 col-md-6 p-3 d-flex justify-content-center'>
                <div className='col-sm-8'>
                <h1 className='mb-3 fs-1 fw-bold'>{element[0].headcontaint}</h1>
                <p className='fs-5 '>{element[0].containparagrap}</p>
                </div>

            </div>
            <div style={{background:`linear-gradient(145deg, #ffffff7e, #d0d0d0)`,boxShadow:'8px 8px 16px #c4c4c4,-8px -8px 16px #ffffff'}} className='d-flex flex-column fw-bold my-5 col-md-6 rounded-3 p-5'>
                <h2>{element[0].listofstart[0]}</h2>
                <button className='btn btn-dark text-white btn-outline-secondary btn-block mb-3 fw-bold'>{element[0].listofstart[1]}</button>
                <button className='btn btn-dark text-white btn-outline-secondary btn-block mb-3 fw-bold'>{element[0].listofstart[2]}</button>
                <button className='btn btn-dark text-white btn-outline-secondary btn-block mb-3 fw-bold'>{element[0].listofstart[3]}</button>
                <Link className='text-decoration-none text-dark'>{element[0].listofstart[4]} </Link>
            </div>

            
           </div>

        </div>
    );
};

export default Body;
