import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { MdBed,MdOutlineBathtub } from "react-icons/md";

const Properties = () => {
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

  console.log(propertyData);
  return (
    <div style={{fontFamily:'Roboto'}}>
      <div className="text-center">
        <h1>Featured Listings</h1>
        <p>A curated collection of our favorite properties</p>
      </div>

      <div className="d-flex gap-3 justify-content-center flex-wrap">
        {
          
          propertyData.map(e=>(
            <Card key={e.id} style={{ width: "18rem" }}>
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
              <Link type="button" className="btn btn-outline-primary">View Listing</Link>
              </div>
            </Card.Body>
          </Card> 
          ))
        }
      </div>

      <div className="mt-5">
        <Link className="text-uppercase text-decoration-none text-light bg-primary py-2 px-4 rounded-5 ">
          VIEW MORE LISTING
        </Link>
      </div>
    </div>
  );
};

export default Properties;
