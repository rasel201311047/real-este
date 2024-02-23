import React from 'react';
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
const Footer = () => {
    return (
<div className="bg-dark mt-5">
    <div className="d-md-flex justify-content-around flex-wrap">

<div className="d-flex pt-3">
<div className='fs-2 fw-semibold'>Avada</div>
<div className='fs-2 fw-bold text-success'>Pasd</div>
</div>
<div className="">
  <ul className="list-unstyled text-start pt-3 ">
    <li><Link className="text-light text-decoration-none">Help Center</Link></li>
    <li><Link className="text-light text-decoration-none">Avada Studio</Link></li>
    <li><Link className="text-light text-decoration-none">Prebuilt Websites</Link></li>
    <li><Link className="text-light text-decoration-none">Reviews</Link></li>
    <li><Link className="text-light text-decoration-none">Submit A Ticket</Link></li>
  </ul>
</div>
<div className=" list-unstyled text-start pt-3">
<li><Link className="text-light text-decoration-none">About Us</Link></li>
    <li><Link className="text-light text-decoration-none">Careers</Link></li>
    <li><Link className="text-light text-decoration-none">Support Policy</Link></li>
    <li><Link className="text-light text-decoration-none">Terms And Conditions</Link></li>
    <li><Link className="text-light text-decoration-none">Privacy Policy</Link></li>
</div>
</div>
    </div>
    );
};

export default Footer;