import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { MdBed,MdOutlineBathtub } from "react-icons/md";
import '../../components/allcss.css'
import { AuthContex } from "../../Provider/AuthProviders";
const Properties = () => {
  const {loginUser}=useContext(AuthContex);
  console.log(loginUser);
  const [propertyData, setPropertyData]=useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('../../../public/data.json');
        const data = await response.json();
        const slicedData = data.property.slice(0, 8);
        setPropertyData(slicedData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div style={{fontFamily:'Roboto'}}>
      <div className="text-center mt-5">
        <h1>Featured Listings</h1>
        <p>A curated collection of our favorite properties</p>
      </div>

      <div className="d-flex gap-3 justify-content-center flex-wrap">
        {
          
          propertyData.map(e=>(
            <Link to={`/`} key={e.id} className="text-decoration-none">
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
              <Link type="button" className="btn btn-outline-primary testbnt">View Listing</Link>
              </div>
            </Card.Body>
          </Card> 
            </Link>
          ))
        }
      </div>

      <div className="mt-5">
        <Link to={`/proparty`} className="text-uppercase btn btn-primary rounded-5 ">
          VIEW MORE LISTING
        </Link>
      </div>
    </div>
  );
};

export default Properties;
