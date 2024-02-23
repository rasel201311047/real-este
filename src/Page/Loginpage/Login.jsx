import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/imageslide/logo.svg";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  return (
    <>
    <div>
      <div> 
        <img src={logo} alt="" style={{width:"10rem"}} className="" />
      </div>
      <div className="mt-3 fs-5">
        <p>Sign in to your Propy account</p>
      </div>
    </div>
    <div className="d-flex justify-content-center">
    <div className=" row col-12 col-md-5">
    <div className="d-flex flex-column rounded-3  p-5 text-start box-component">
      <label htmlFor="email">Email</label>
      <input style={{outline:'none'}} className="my-2" type="email" id="email" placeholder="Username"/>
      <label htmlFor="password">Password</label>
      <input style={{outline:'none'}} className="my-2" type="password" id="password" placeholder="Password"/>
      <Link to={'/'} className="my-2">Forgotten password</Link>
      <input  style={{outline:'none'}} className="btn btn-primary my-2  p-1" type="submit" value= 'Sign in'/>
      <button className="btn btn-white btn-outline-dark btn-block "><span className="ms-2 float-start "><FcGoogle /> </span>Google</button>
      <Link style={{}} className="text-center text-primary text-decoration-none mt-3">Create Account</Link>
    </div>
    </div>
    </div>


    </>

  );
};

export default Login;
