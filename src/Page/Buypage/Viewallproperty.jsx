import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import { MdBed,MdOutlineBathtub } from "react-icons/md";
import Footer from "../Homepage/Footer";
import Navber from "../Homepage/Navber";

const Viewallproperty = () => {

    const [propertyData, setPropertyData]=useState([]);
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch('../../../public/data.json');
          const data = await response.json();
          const slicedData = data.property;
          setPropertyData(slicedData);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData();
    }, []);


    return (
        <div>
            <Navber></Navber>

            <div className="container mt-3">
            <div className="d-flex gap-3 justify-content-center flex-wrap mt-4">
        {
          
          propertyData.map(e=>(
            <Link to={`/proparty/${e.id}`} key={e.id} className="text-decoration-none">
            <Card  style={{ width: "18rem" }} className="proborder  rounded-3">
            <Card.Img variant="top" style={{height:"10rem"}} src={e.image}/>
            <Card.Body className="text-start">
              <Card.Title style={{height:"2rem"}} className=" fw-bold fs-3">$ {e.price}</Card.Title>
              <Card.Text style={{height:"3rem"}} className="text-muted">
                {e.address}
              </Card.Text>
              <div style={{height:"2rem"}} className="fs-5 text-muted">
                <span><MdBed/></span>  <span> {e.beds} bd</span> <span className="my-2"><MdOutlineBathtub/></span> <span>{e.baths} ba</span>
              </div>
              <div className="mt-2">
              <Link  to={`/proparty/${e.id}`} type="button" className="btn btn-outline-primary testbnt">View Listing</Link>
              </div>
            </Card.Body>
          </Card> 
            </Link>
          ))
        }
      </div>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default Viewallproperty;