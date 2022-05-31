import { Button } from "react-bootstrap";
import React from "react";
import { Card } from "react-bootstrap";
import "./Project.css";
import Flip from "react-reveal/Flip";
import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";

const Project = () => {
  return (
    <div id="project">
      <Fade bottom>
        <h2
          className="mx-auto  text-font mx-auto mt-5"
          style={{ color: "#1c1333" }}
        >
          MY PROJECT
        </h2>

        <div className="Horizontal-ver mb-5">
          <hr className="fw-bolder  w-25 mx-auto "></hr>
        </div>
      </Fade>

      <div className=" mt-4 card-width-responsive" style={{ padding: "40px" }}>
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-12 card-responsive">
            <Card
              className="ps-2 mx-auto card-tablet-responsive"
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
                <Fade left>
                  <Card.Title>
                    {" "}
                    <h4 className="  my-2">
                      Apartment Booking
                      <br />{" "}
                      <a
                        className="text-decoration-none"
                        href="https://remx-apt.web.app/"
                      >
                        {" "}
                        Live Site{" "}
                      </a>{" "}
                    </h4>
                  </Card.Title>
                  <Card.Text>
                    Apartment Selling. This project developed by React,Firebase,
                    Bootstrap, React Router, Node js, Express Js, MongoDb etc.
                  </Card.Text>
                </Fade>
                <Fade right>
                 <Link to="/apartment">
                 <Button
                    className="fw-bolder my-3"
                    variant=""
                    style={{ backgroundColor: "#8cff32", color: "black" }}
                  >
                    Project Details
                  </Button>
                 </Link>
                </Fade>
              </Card.Body>
            </Card>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-12 card-responsive">
            <Card
              className="ps-2 mx-auto card-tablet-responsive"
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
                <Fade left>
                  <Card.Title>
                    {" "}
                    <h4 className="  my-2">
                      MackBook- Website
                      <br />{" "}
                      <a
                        className="text-decoration-none"
                        href="https://apple-product-69484.web.app/"
                      >
                        {" "}
                        Live Site{" "}
                      </a>{" "}
                    </h4>
                  </Card.Title>
                  <Card.Text>
                    MackBook- Website . This project developed by
                    React,Firebase, Bootstrap, React Router, Node js, Express
                    Js, MongoDb etc.
                  </Card.Text>
                </Fade>
                <Fade right>
                  <Link to="/mackbook">
                    <Button
                      className="fw-bolder my-3"
                      variant=""
                      style={{ backgroundColor: "#8cff32", color: "black" }}
                    >
                      Project Details
                    </Button>
                  </Link>
                </Fade>
              </Card.Body>
            </Card>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-12 card-responsive">
            <Card
              className="ps-2 mx-auto card-tablet-responsive"
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
                <Fade left>
                  <Card.Title>
                    {" "}
                    <h4 className="  my-2">
                      Travel Agency
                      <br />{" "}
                      <a
                        className="text-decoration-none"
                        href="https://ph-travel-1e00a.web.app/"
                      >
                        {" "}
                        Live Site{" "}
                      </a>{" "}
                    </h4>
                  </Card.Title>
                  <Card.Text>
                    Travel Website. This project developed by React,Firebase,
                    Bootstrap, React Router, Node js, Express Js, MongoDb etc.
                  </Card.Text>
                </Fade>
                <Fade left>
                  <Link to="/travel">
                    <Button
                      className="fw-bolder my-3"
                      variant=""
                      style={{ backgroundColor: "#8cff32", color: "black" }}
                    >
                      Project Details
                    </Button>
                  </Link>
                </Fade>
              </Card.Body>
            </Card>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-12 card-responsive">
            <Card
              className="ps-2 mx-auto card-tablet-responsive"
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
                    <h4 className="  my-2">
                      Team Project
                      <br />{" "}
                      <a
                        className="text-decoration-none"
                        href="https://dhaka-shop-6f079.web.app/"
                      >
                        {" "}
                        Live Site{" "}
                      </a>{" "}
                    </h4>
                  </Card.Title>
                  <Card.Text>
                    Dhaka Shop Website . This project developed by
                    React,Firebase, Bootstrap, React Router, Node js, Express
                    Js, MongoDb etc.
                  </Card.Text>
                </Slide>
                <Fade right>
                  <Link to="/team">
                  <Button
                    className="fw-bolder my-3"
                    variant=""
                    style={{ backgroundColor: "#8cff32", color: "black" }}
                  >
                    Project Details
                  </Button>
                  </Link>
                </Fade>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
