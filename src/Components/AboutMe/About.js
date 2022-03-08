import React from "react";
import "./About.css";
import Roll from "react-reveal/Roll";

const About = () => {
  return (
    <div>
      <h2
        className="mx-auto  text-font mx-auto"
        style={{ marginTop: "-80px", color: "#1c1333" }}
      >
        ABOUT ME
      </h2>
      <h6 className="mx-auto text-style">Why Choose Me?</h6>
      <div className="Horizontal-ver">
        <hr className="fw-bolder  w-25 mx-auto "></hr>
      </div>

      <div className="">
        <div className="container my-5 rounded box p-2">
          <div className="row">
            <div className="col-md-5">
             
            <Roll left> <img
                className="w-100 rounded"
                src="https://i.ibb.co/Lh8xV2J/Untitled-design-2.jpg"
                alt="No Internet"
              />
             </Roll>
            </div>
            <div className="col-md-5">
            <Roll right>
              <p className="text-start p-3 ">
                <span
                  style={{ marginTop: "-80px", color: "#1c1333" }}
                  className="fs-3"
                >
                  {" "}
                  Hello,
                </span>{" "}
                My Name is Rony Miah. I am a Front-end Developer. I have
                Experience React Last One and Half Years. Make a Full
                Responsive Website using Html, Css, Bootstrap, Node Js, Express
                js , React, MongoDB, and using Authentication Firebase, Context
                Api, and Some knowledge redux. I want to work in an organization
                where I will learn something new and work with you. Learn
                something new to become a full-stack developer.
              </p>
              <h4 className="text-start ps-3">Here are a Few Highlights:</h4>
              </Roll>
              <Roll left>
              <p className="text-start p-3 " >
                <li>Front-end Development</li>
                <li>MongoDB</li>
                <li>NodeJs</li>
                <li>React</li>
                <li>Firebase</li>
              </p>
              </Roll>
              
              
            </div>
                   
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
