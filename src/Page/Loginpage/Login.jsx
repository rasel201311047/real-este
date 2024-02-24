import React, { useContext } from "react";
import { Link, useNavigate} from "react-router-dom";

import logo from "../../assets/imageslide/logo.svg";
import { FcGoogle } from "react-icons/fc";
import { AuthContex } from "../../Provider/AuthProviders";
import {  GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, signInWithPopup } from "firebase/auth";
import app from "../../Firebase/firebase.init";

const Login = () => {
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const handleGoogleSignin = () => {
   
    signInWithPopup(auth, provider)
      .then((result) => {
        const GoogleUser = result.user;
        
      })
      .catch((error) => {
        console.log("error", error.message);
      });
  };
  const {user,signInUser,logOut}=useContext(AuthContex);
  const handleSubmit = (event) => {
    event.preventDefault();
  
    const formData = new FormData(event.target);
    const email = formData.get("email");
    const password = formData.get("password");
  
    signInUser(email,password)
    .then(result=>{
      const loginUse=result.user;
       console.log(loginUse);
    })
    .catch(error=>{
      console.log('Error : ',error.message);
    })
        
  };
  
  
  return (
    <>
      <div className="text-center mt-4">
        <div>
          <img src={logo} alt="" style={{ width: "10rem" }} className="" />
        </div>
        <div className="mt-3 fs-5">
          <p>Sign in to your Propy account</p>
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <div className=" row col-12 col-md-4">
          <div className="d-flex flex-column rounded-3  p-5 text-start box-component">
            <form className="d-flex flex-column" onSubmit={handleSubmit}>
              <label htmlFor="email">Email</label>
              <input style={{ outline: "none" }} className="my-2" type="email"
                id="email"
                name="email"
                placeholder="Username"
              />
              <label htmlFor="password">Password</label>
              <input
                style={{ outline: "none" }}
                className="my-2"
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                autoComplete="current-password"
              />
              <Link to={"/"} className="my-2">
                Forgotten password
              </Link>
              <input
                style={{ outline: "none" }}
                className="btn btn-primary my-2  p-1"
                type="submit"
                name="submit"
                value="Sign in"
              />
            </form>

            <button
              onClick={handleGoogleSignin}
              className="btn btn-white btn-outline-dark btn-block "
            >
              <span className="ms-2 float-start ">
                <FcGoogle />{" "}
              </span>
              Google
            </button>
            <Link
              style={{}}
              className="text-center text-primary text-decoration-none mt-3"
            >
              Create Account
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
