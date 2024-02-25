import React from "react";
import im1 from "../../assets/woman.png";
import Card from "react-bootstrap/Card";
import Footer from "../Homepage/Footer";
import Navber from "../Homepage/Navber";

const Agencypage = () => {
  const element = [
    {
      id: 0,
      image: "https://propy.com/browse/wp-content/uploads/te-icon-4.png",
      hc: "Everything in One Place",
      sh: "",
      sp: "All parties can view your completed documents in one platform, even after your transaction closes. ",
    },
    {
      id: 1,
      image: "https://propy.com/browse/wp-content/uploads/te-icon-3.png",
      hc: "Expertise",
      sh: "Direct instant communication with the closing team ",
      sp: "Enjoy the peace of mind that comes with timely updates and proactive communication, ensuring you are always informed about the progress of the transaction.",
    },
    {
      id: 2,
      image: "https://propy.com/browse/wp-content/uploads/te-icon-6.png",
      hc: "No More Delays ",
      sh: "We are online 24/7 ",
      sp: "Say goodbye to unnecessary waiting periods, and hello to accelerated turnaround times that enable you to close deals with confidence.",
    },
    {
      id: 3,
      image: "https://propy.com/browse/wp-content/uploads/te-icon-2.png",
      hc: "Blockchain Transparency ",
      sh: "",
      sp: "We close your transaction with all the usual steps (i.e. recording the deed with the local county), plus add an extra layer of security by recording the transaction on blockchain.",
    },
    {
      id: 4,
      image: "https://propy.com/browse/wp-content/uploads/te-icon-5.png",
      hc: "AI-Driven Efficiency",
      sh: "Our advanced AI algorithms streamline the entire process, ensuring faster and more accurate document processing",
      sp: "AI enables proactive issue detection, minimizing the risk of errors and providing you with real-time insights, allowing you to make informed decisions swiftly. ",
    },
    {
      id: 5,
      image: "https://propy.com/browse/wp-content/uploads/te-icon-1.png",
      hc: "Local Knowledge",
      sh: "",
      sp: "With in-depth knowledge of the local real estate landscape, we navigate the intricacies of each transaction with a personalized touch. ",
    },
  ];
  return (
    <div>
    <div>
        <Navber></Navber>
    </div>
      <div style={{ backgroundColor: "#f7f7f7" }}>
        {/* ---------- */}
        <div style={{ backgroundColor: "#f7f7f7" }}>
          <div className="d-flex flex-column flex-md-row align-items-center">
            <div className="w-50 mx-auto">
              <p className="fs-3 fw-bold">Welcome to Propy Title Agency</p>
              <h1 className="fs-1 pb-4 fw-bold">
                Best Closers+ AI + 24/7 support= Your Clients Impressed
              </h1>
              <div className="d-flex gap-3 w-100 ">
                <div className="col-sm-4">
                  <button type="button" class="btn btn-primary w-100">
                    BOOK A CALL
                  </button>
                </div>
                <div className="col-sm-4">
                  <button type="button" class="btn btn-outline-primary w-100">
                    GET A QUOTE{" "}
                  </button>
                </div>
              </div>
            </div>
            <div className="">
              <img className="w-100" src={im1} alt="" />
            </div>
          </div>
        </div>
        {/* ---------- */}
        <div className="container">
          <div className=" text-center mt-5">
            <h1 className="fs-1 fw-bold">Why Choose Us?</h1>
            <p className="fs-4">Streamlined and Efficient Closing Process </p>
          </div>

          <div className="d-flex gap-2 justify-content-center  row-cols-lg-4 flex-wrap">
            {element.map((e) => (
              <div key={e.id} className="text-decoration-none   rounded-2 ">
                <Card className="border-0 h-100 " style={{ width: "18rem" }}>
                  <Card.Body>
                    <img src={e.image} alt="" />
                    <Card.Subtitle
                      style={{ height: "4rem" }}
                      className="my-2 fs-3 fw-bold"
                    >
                      {e.hc}
                    </Card.Subtitle>
                    <Card.Text
                      style={{ height: "4rem" }}
                      className="text-muted "
                    >
                      {e.sh}
                    </Card.Text>
                    <div className="text-muted">{e.sp}</div>
                  </Card.Body>
                </Card>
              </div>
            ))}
          </div>
          <div className="text-center mt-5 mb-4">
            <div>
              <button
                type="button"
                class="btn btn-outline-primary  text-center"
              >
                GET A QUOTE -it's free
              </button>
            </div>
          </div>
        </div>

        {/* ---------- */}
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Agencypage;
