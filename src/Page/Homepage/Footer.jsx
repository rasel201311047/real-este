import React from 'react';
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const Footer = () => {
  const logo="https://propy.com/home/static/media/propy-dark-mode.fda4e0a9ca8220f121ebc048bf78d5f8.svg";
  console.log(logo);
  return (
    <div className="bg-dark mt-5 " >
      <div className="d-flex flex-column flex-md-row ps-5 ps-md-0 justify-content-around flex-wrap  py-4">
        <div className="d-flex flex-column gap-3  pt-3">
          <div><img style={{width:'8rem'}} className='' src={'https://propy.com/home/static/media/propy-dark-mode.fda4e0a9ca8220f121ebc048bf78d5f8.svg'}alt="" /></div>
          <p className='text-white'>© 2023 Rib, Inc. All rights reserved</p>
        </div>
        <div className="">
          <ul className="list-unstyled text-start pt-3 ">
            <li><Link className="text-light text-decoration-none">Help Center</Link></li>
            <li><Link className="text-light text-decoration-none">About</Link></li>
            <li><Link className="text-light text-decoration-none">I'm an Agent</Link></li>
            <li><Link className="text-light text-decoration-none">I'm a Seller</Link></li>
            <li><Link className="text-light text-decoration-none">I'm a Seller</Link></li>
          </ul>
        </div>
        <div className="list-unstyled text-start pt-3">
          <li><Link className="text-light text-decoration-none">About Us</Link></li>
          <li><Link className="text-light text-decoration-none">Course</Link></li>
          <li><Link className="text-light text-decoration-none">Resources</Link></li>
          <li><Link className="text-light text-decoration-none">About Propy</Link></li>
          <li><Link className="text-light text-decoration-none">Privacy Policy</Link></li>
        </div>
      </div>
    </div>
  );
};

export default Footer;
