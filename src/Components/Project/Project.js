import { Button } from "react-bootstrap";
import React from "react";
import { Card } from "react-bootstrap";
import "./Project.css";
import Flip from "react-reveal/Flip";
import Slide from "react-reveal/Slide";
import Roll from "react-reveal/Roll";

const Project = () => {
  return (
    <div>
      <h1 className="mx-auto fw-bolder my-3">My Project</h1>
      <div className="Horizontal-ver">
        <hr className="fw-bolder  w-25 mx-auto "></hr>
      </div>

      <div className=" mt-4 " style={{ padding: "30px" }}>
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-12 ">
            <Card
              className="ps-2"
              style={{
                width: "18rem",
                height: "420px",
                boxShadow: "0 10px 10px -5px",
              }}
            >
              <div className="inner">
                <Flip right>
                  <Card.Img
                    variant="top"
                    className="w-100 "
                    src=" https://i.ibb.co/H2ZxK5S/remx-1.png"
                  />
                </Flip>
              </div>
              <Card.Body>
                <Slide left>
                  <Card.Title>
                    {" "}
                    <h4 className="fw-bolder my-3">
                      Apartment Booking <br /> <a href="#">Remax-Apt</a>
                    </h4>
                  </Card.Title>
                  <Card.Text>
                    Apartment Selling. This project developed by React,Firebase,
                    Bootstrap, React Router, Node js, Express Js, MongoDb etc.
                  </Card.Text>
                </Slide>
                <Roll right>
                  <Button
                    className="fw-bolder my-3"
                    variant=""
                    style={{ backgroundColor: "#8cff32", color: "black" }}
                  >
                    Project Details
                  </Button>
                </Roll>
              </Card.Body>
            </Card>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-12">
            <Card
              style={{
                width: "18rem",
                height: "420px",
                boxShadow: "5px 5px 10px",
              }}
            >
              <div className="inner">
                <Flip right>
                  <Card.Img
                    variant="top"
                    className="w-100 "
                    src=" https://i.ibb.co/sVNDJ6B/1.png"
                  />
                </Flip>
              </div>
              <Card.Body>
                <Slide left>
                  <Card.Title>
                    {" "}
                    <h4 className="fw-bolder my-3">
                      MackBook- Website
                      <br /> <a href="#">Apple Product</a>{" "}
                    </h4>
                  </Card.Title>
                  <Card.Text>
                    Apartment Selling. This project developed by React,Firebase,
                    Bootstrap, React Router, Node js, Express Js, MongoDb etc.
                  </Card.Text>
                </Slide>
                <Roll right>
                  <Button
                    className="fw-bolder my-3"
                    variant=""
                    style={{ backgroundColor: "#8cff32", color: "black" }}
                  >
                    Project Details
                  </Button>
                </Roll>
              </Card.Body>
            </Card>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-12">
            <Card
              style={{
                width: "18rem",
                height: "420px",
                boxShadow: "5px 5px 10px",
              }}
            >
              <div className="inner">
                <Flip left>
                  <Card.Img
                    variant="top"
                    className="w-100 "
                    src=" https://i.ibb.co/qsywzKH/tavel-3.png"
                  />
                </Flip>
              </div>
              <Card.Body>
                <Slide left>
                  <Card.Title>
                    {" "}
                    <h4 className="fw-bolder my-3">
                      Travel - Tourism <br /> <a href="#">PH-Travel</a>
                    </h4>
                  </Card.Title>
                  <Card.Text>
                    Apartment Selling. This project developed by React,Firebase,
                    Bootstrap, React Router, Node js, Express Js, MongoDb etc.
                  </Card.Text>
                </Slide>
                <Roll left>
                  <Button
                    className="fw-bolder my-3"
                    variant=""
                    style={{ backgroundColor: "#8cff32", color: "black" }}
                  >
                    Project Details
                  </Button>
                </Roll>
              </Card.Body>
            </Card>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-12">
            <Card
              style={{
                width: "18rem",
                height: "420px",
                boxShadow: "5px 5px 10px",
              }}
            >
              <div className="inner">
                <Flip left>
                  <Card.Img
                    variant="top"
                    className="w-100 "
                    src=" https://i.ibb.co/cwPrQbj/dhaka-shop.png"
                  />
                </Flip>
              </div>
              <Card.Body>
                <Slide right>
                  <Card.Title>
                    {" "}
                    <h4 className="fw-bolder my-3">
                      Team - Project <br /> <a href="#">Dhaka Shop</a>
                    </h4>
                  </Card.Title>
                  <Card.Text>
                    Apartment Selling. This project developed by React,Firebase,
                    Bootstrap, React Router, Node js, Express Js, MongoDb etc.
                  </Card.Text>
                </Slide>
                <Roll right>
                  <Button
                    className="fw-bolder my-3"
                    variant=""
                    style={{ backgroundColor: "#8cff32", color: "black" }}
                  >
                    Project Details
                  </Button>
                </Roll>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
