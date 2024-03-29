import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../../assets/imageslide/logo.svg";
import { Link } from "react-router-dom";
import { AuthContex } from "../../Provider/AuthProviders";
const Navber = () => {
  const {user,logOut}=useContext(AuthContex);
  const handleSignOut=()=>{
    logOut()
    .then(result=>{
      // alert("sign out successfully");
    })
    .catch(error=>{
      console.log("error : ",error.message);
    })
  }
  return (
    <>
      <Navbar expand="lg" className="">
        <Container fluid className="ms-4 me-4 ">
          <Navbar.Brand href="/" className="  ">
            <img src={logo} className="" style={{ width: "8rem" }} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0 ms-auto "
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <NavDropdown
                title="Buy "
                id="basic-nav-dropdown"
                className="px-2"
              >
                <div className="d-lg-flex px-2  ">
                  <div>
                    <li>
                      <NavDropdown.Item href="/agencypage">
                        Title & Escrow
                      </NavDropdown.Item>
                    </li>
                    <li>
                      <NavDropdown.Item href="#action/3.1">
                        {" "}
                        Browse All Listings
                      </NavDropdown.Item>
                    </li>
                    <li>
                      <NavDropdown.Item href="#action/3.1">
                        {" "}
                        Featured Listings
                      </NavDropdown.Item>
                    </li>
                  </div>

                  <div>
                    <li>
                      <NavDropdown.Item href="#action/3.1">
                        Find an Agent
                      </NavDropdown.Item>
                    </li>
                    <li>
                      <NavDropdown.Item href="#action/3.1">
                        Crypto Certified Agent Course
                      </NavDropdown.Item>
                    </li>
                    <li>
                      <NavDropdown.Item href="#action/3.1">
                        Pricing
                      </NavDropdown.Item>
                    </li>
                  </div>
                </div>
              </NavDropdown>

              <NavDropdown
                style={{ color: "#212529bf" }}
                title="Sell "
                className="px-2"
                id="basic-nav-dropdown"
              >
                <div className="d-lg-flex px-2  ">
                  <div>
                    <li>
                      <NavDropdown.Item href="/agencypage">
                        Title & Escrow
                      </NavDropdown.Item>
                    </li>
                    <li>
                      <NavDropdown.Item href="#action/3.1">
                        {" "}
                        Browse All Listings
                      </NavDropdown.Item>
                    </li>
                    <li>
                      <NavDropdown.Item href="#action/3.1">
                        {" "}
                        Featured Listings
                      </NavDropdown.Item>
                    </li>
                  </div>

                  <div>
                    <li>
                      <NavDropdown.Item href="#action/3.1">
                        Find an Agent
                      </NavDropdown.Item>
                    </li>
                    <li>
                      <NavDropdown.Item href="#action/3.1">
                        Crypto Certified Agent Course
                      </NavDropdown.Item>
                    </li>
                    <li>
                      <NavDropdown.Item href="#action/3.1">
                        Pricing
                      </NavDropdown.Item>
                    </li>
                  </div>
                </div>
              </NavDropdown>

              <NavDropdown
                style={{ color: "#212529bf" }}
                title="Agent "
                className="px-2"
                id="basic-nav-dropdown"
              >
                <div className="d-lg-flex px-2  ">
                  <div>
                    <li>
                      <NavDropdown.Item href="#action/3.1">
                        Title & Escrow
                      </NavDropdown.Item>
                    </li>
                    <li>
                      <NavDropdown.Item href="#action/3.1">
                        {" "}
                        Browse All Listings
                      </NavDropdown.Item>
                    </li>
                    <li>
                      <NavDropdown.Item href="#action/3.1">
                        {" "}
                        Featured Listings
                      </NavDropdown.Item>
                    </li>
                  </div>

                  <div>
                    <li>
                      <NavDropdown.Item href="#action/3.1">
                        Find an Agent
                      </NavDropdown.Item>
                    </li>
                    <li>
                      <NavDropdown.Item href="#action/3.1">
                        Crypto Certified Agent Course
                      </NavDropdown.Item>
                    </li>
                    <li>
                      <NavDropdown.Item href="#action/3.1">
                        Pricing
                      </NavDropdown.Item>
                    </li>
                  </div>
                </div>
              </NavDropdown>
            </Nav>
            <Form className="d-flex">
            {
            user? <>
            <button onClick={handleSignOut} className="btn btn-primary rounded-5 fw-bold " to={"/login"}>GO TO PLATFROM</button>
            </>: <Link className="btn btn-primary rounded-5 fw-bold " to={"/login"}>Sign in</Link>
             }
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navber;
{/* <button className="btn btn-primary rounded-5 fw-bold " to={"/login"}>Sign in</button> */}