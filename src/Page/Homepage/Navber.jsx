import React from 'react';
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
const Navber = () => {
    return (
        <>
    <Navbar expand="lg" className="">
      <Container fluid className="ms-4 me-4 ">
        <Navbar.Brand href="#" className=" d-flex align-items-center justify-content-center gap-2">
          <div className="fs-2 fw-semibold">Avada</div>
          <div className="fs-2 fw-bold text-success">:</div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 ms-auto "
            style={{ maxHeight: "100px" }}
            navbarScroll
          >


            <NavDropdown title="Avada For " id="basic-nav-dropdown" className="px-2">
              <NavDropdown.Item href="#action/3.1">
                <div style={{backgroundColor:'#ffe77b'}}  className="d-flex  justify-content-between rounded-3 p-2 align-content-center">
                  <div>
                    <h3>Beginners</h3>
                    <p>Create your own site with ease</p>
                  </div>
                  <div className="">
                     <img src="" className="" alt="" />
                  </div>
                </div>
                </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
              <div style={{backgroundColor:'#b7f598'}}  className="d-flex justify-content-between rounded-3 p-2 align-content-center">
                  <div>
                    <h3>Marketers</h3>
                    <p>Grow your business fast</p>
                  </div>
                  <div className="">
                     <img src='' className="" alt="" />
                  </div>
                </div>
                </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
              <div style={{backgroundColor:'#7ed5f0'}}  className="d-flex  justify-content-between rounded-3 p-2 align-content-center">
                  <div>
                    <h3>Professionals</h3>
                    <p>Optimize your project workflow</p>
                  </div>
                  <div className="">
                     <img src="" className="" alt="" />
                  </div>
                </div>
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" style={{color:"#212529bf"}} className="px-2 " disabled>
              Hosting
            </Nav.Link>
            <Nav.Link href="#" style={{color:"#212529bf"}} className="px-2" disabled>
              Customization
            </Nav.Link>
            <NavDropdown style={{color:"#212529bf"}} title="Resources " className="px-2" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <Button variant="outline-dark">
              My Avada
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </>

    );
};

export default Navber;