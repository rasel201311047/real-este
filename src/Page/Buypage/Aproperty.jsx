import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FaCity,FaBed,FaBath,FaRegAddressCard,FaParking } from "react-icons/fa";
import Navber from '../Homepage/Navber';
import Footer from '../Homepage/Footer';
const Aproperty = () => {
    const { id } = useParams();
    const [propertyData, setPropertyData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('../../../public/data.json');
                const data = await response.json();

               
                const selectedProperty = data.property.find(property => property.id === id);

               
                if (selectedProperty) {
                    setPropertyData(selectedProperty);
                } else {
                    console.error(`Property with id ${id} not found`);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [id]);

    if (!propertyData) {

        return <p>Loading...</p>;
    }
    const elem = propertyData.construction;
    return (
        <div>
            <Navber></Navber>

            <div className='container rounded-4 mt-5' style={{background:'#ffff',boxShadow:' 25px 25px 50px #bababa,-25px -25px 50px #ffffff'}}>
            <div className='fw-bold pt-4'>
                <h3><FaRegAddressCard/> {propertyData.address}</h3>
                <h4><FaCity/> {propertyData.city}</h4>
                <p>{propertyData.area}</p>
            </div> 
            <hr/>
            <div  className=' d-flex flex-column flex-md-row  '>
                <div className='col-12 col-md-6  my-4'>
                    <img   src={propertyData.image} className='w-100 rounded-4' alt="" />
                    <p className='fs-3 fw-bold ps-4 pt-3'>$ {propertyData.price}</p>
                </div>
                <div className=' ps-5 my-5 '  >
                    <div>
                        <h1 className='fw-bold'>Proparty Information</h1>
                        <ul className='list-unstyled fs-3 fw-bold'>
                            <li>Type of Property: {propertyData.type}</li>
                            <li>FloorSpace: {propertyData.floorspace}</li>
                            <li><FaBed/>  {propertyData.beds}</li>
                            <li><FaBath/>  {propertyData.baths}</li>
                            <li><FaParking/> {propertyData.parking}</li>

                        </ul>
                    </div>

                </div>
            </div>
            </div>
            <Footer></Footer>
           
        </div>
    );
};

export default Aproperty;
