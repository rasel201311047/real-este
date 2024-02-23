import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const Clientfrom = () => {
    return (
        <div>
            <div className='text-center mt-4'>
                <h1>From our Clients</h1>
                <p>Hear about Propy from the clients we work with</p>
            </div>

            <div className='bg-primary'>
                
            <Carousel className='bg-primary'>
      <Carousel.Item interval={1000}>
      
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
       
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
            </div>
            
        </div>
    );
};

export default Clientfrom;