import React from "react";
import Navber from "../Homepage/Navber";
import "../../components/allcss.css";
import Footer from "../Homepage/Footer";
import { Link } from "react-router-dom";
const Typeofreg = () => {
    const img="https://propy.com/home/static/media/onboarding-background.8d29f7572e3cfa4152db.webp";
    const typeofUser=['agent','buyer','seller'];
  return (
    <div>
      <div>
        <div className="container">
        <div style={{boxShadow: " 20px 20px 28px #d1d1d1, -20px -20px 28px #ffffff",
            background: "#e3e3e3",}}className=" mt-4  rounded-5">
          <div>
            <Navber></Navber>
          </div>
        </div>

        <div className="d-flex justify-content-center mt-4">
            <div className=" col-lg-8 col-12 position-relative">
                <img src={img} className="w-100 rounded-4" alt="" />
                <div style={{backgroundColor:'rgba(255, 255, 255, 0.626)'}} className="position-absolute top-0 start-0 end-0 bottom-0 d-flex align-items-center justify-content-center">
                 <div style={{background:`linear-gradient(145deg, #ffffff7e, #d0d0d0)`,boxShadow:'8px 8px 16px #c4c4c4,-8px -8px 16px #ffffff'}} className="d-flex p-4 rounded-4 flex-column col-lg-6 col-12">
                    <h2 className="text-center">Get Started</h2>
                    <Link to={`/signup/${typeofUser[1]}`} className='btn btn-dark text-white btn-outline-secondary btn-block mb-3 fw-bold'>I'M A BUYER</Link>
                    <Link to={`/signup/${typeofUser[0]}`} className='btn btn-dark text-white btn-outline-secondary btn-block mb-3 fw-bold'>I'M AN AGENT</Link>
                    <Link to={`/signup/${typeofUser[2]}`} className='btn btn-dark text-white btn-outline-secondary btn-block mb-3 fw-bold'>I'M A SELLER</Link>
                 </div>
                </div>

            </div>


        </div>
        </div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Typeofreg;
