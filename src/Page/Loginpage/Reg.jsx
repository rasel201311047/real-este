import React, { useContext, useState } from 'react';
import logo from '../../assets/imageslide/logo.svg'
import { AuthContex } from '../../Provider/AuthProviders';
import { useNavigate } from 'react-router-dom';
const Reg = () => {
    const navigate =useNavigate();
    const {user,createUser,logOut}=useContext(AuthContex);
    const handleSubmit=event=>{
        const formData = new FormData(event.target);
        const name=formData.get("name");
        const email = formData.get("email");
        const password = formData.get("password");
        const cpassword=formData.get("cpassword");
        if (password!==cpassword){
            alert("confirm passwor Worng");
        }
        else{
            createUser(email,password)
            .then(result=>{
              const reguser=result.user;
              console.log(reguser);
            })
            .catch(error=>{
              console.log('error: ',error.message);
            })

            navigate('/login');
        }


    }
  
    return (
        <div>
             <div className="text-center mt-4">
             <div>
             <img src={logo}alt="" style={{ width: "10rem" }} className="" />
             </div>
             <div className="mt-3 fs-5">
             <p>Sign up to your Propy account</p>
             </div>
             </div>

             <div className='col-12 col-md-7 col-lg-4 mx-auto'>
             <form className="d-flex flex-column" onSubmit={handleSubmit}>
             <label htmlFor="name">Name</label>
              <input style={{ outline: "none" }} className="my-2 px-2 fw-bold text-muted" type="text" id="name"name="name"placeholder="Enter Your Name" />
              <label htmlFor="email">Email</label>
              <input style={{ outline: "none" }} className="my-2 px-2 fw-bold text-muted" type="email" id="email"name="email"placeholder="Enter Your Email" />
              <label htmlFor="password">Password</label>
              <input style={{ outline: "none" }} className="my-2 px-2 fw-bold text-muted" type="password" id="password" name="password" placeholder="Enter Your Password"  />
              <label htmlFor="cpassword">Confirm Password</label>
              <input style={{ outline: "none" }} className="my-2 px-2 fw-bold text-muted" type="password" id="cpassword" name="cpassword" placeholder="Enter Confirm Password"  />

              <input style={{ outline: "none" }} className="btn btn-primary my-2  p-1" type="submit" name="submit" value="Sign up"/>
              </form>
             </div>
            
        </div>
    );
};

export default Reg;