import React from "react";
import Card from "react-bootstrap/Card";
import { MdOutlineReceiptLong,MdFlag,MdOutlinePayments} from "react-icons/md";
import { Link } from "react-router-dom";
const Feture = () => {
  const element=[
    {
      id:1,
      icon:<MdOutlinePayments/>,
      headCon:'Transaction Platfrom',
      subcon:'Exchange properties 24/7 around the globe',
      doWhat:'LEARN MORE',
      path:'/',
    },
    {
      id:2,
      icon:<MdOutlineReceiptLong/>,
      headCon:'Get Started Today',
      subcon:'Complete a quick form and let’s get started.',
      doWhat:'BEGIN NOW',
      path:'/',
    },
    {
      id:3,
      icon:<MdFlag/>,
      headCon:'Transaction Platfrom',
      subcon:'Complete a quick form and let’s get started.',
      doWhat:'BEGIN NOW',
      path:'/',
    },
  ]
  return (
    <div style={{fontFamily:'Roboto'}}>
      <div className="text-center mt-5">
        <h1>The Future of Homebuying is Now</h1>
        <p>Streamline your transaction from payment to closing</p>
      </div>

      <div className="d-flex gap-2 justify-content-center flex-wrap">
        {
          element.map(e=>(
            <Link key={e.id} className="text-decoration-none  border border-secondary rounded-2 " style={{boxShadow:' 41px 41px 82px #aaaaaa, -41px -41px 82px #ffffff'}} to={e.path}>
            <Card className="border-0 h-100" style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title style={{height:'3rem'}} className="fs-1 text-primary ">{e.icon}</Card.Title>
              <Card.Subtitle style={{height:'4rem'}} className="my-2 fs-3 fw-bold">
               {e.headCon}
              </Card.Subtitle>
              <Card.Text style={{height:'4rem'}} className="text-muted ">
                {e.subcon}
              </Card.Text>
              <div className="text-muted">{e.doWhat}</div>
            </Card.Body>
          </Card>
            </Link>
          ))
        }
      </div>
      <div className="text-center d-flex justify-content-center my-3">
        <div className="w-50 px-2 py-2 rounded-4 bg-secondary text-black">Over $4 billion in transactions processed with Propy partners across the USA</div>
      </div>
    </div>
  );
};

export default Feture;
