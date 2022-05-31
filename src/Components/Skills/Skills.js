import React from "react";
import { ProgressBar } from "react-bootstrap";
import Slide from "react-reveal/Slide";
import Fade from 'react-reveal/Fade';

const Skills = () => {
 
  return (
    <div id="skills">
    <Fade bottom>
      <h2
        className="mx-auto  text-font mx-auto mt-5"
        style={{ color: "#1c1333" }}
      >
        SKILLS
      </h2>

      <div className="Horizontal-ver mb-5">
        <hr className="fw-bolder  w-25 mx-auto "></hr>
      </div>
      </Fade>
      <div className="container">
        <div className="row">
       
          <div className="col-sm-12 col-md-6 ps-5 mx-auto">
              <Slide left>
            <label className="fw-bolder my-2 fs-4">HTML</label>
            <ProgressBar now={94} label={`${94}%`} />
            </Slide>
            <Slide left>
            <label className="fw-bolder my-2 fs-4">CSS</label>
            <ProgressBar now={88} label={`${88}%`} />
            </Slide>
            <Slide left>
            <label className="fw-bolder my-2 fs-4">BOOTSTRAP</label>
            <ProgressBar now={90} label={`${90}%`} />
            </Slide>
            <Slide left>
            <label className="fw-bolder my-2 fs-4">JAVASCRIPT</label>
            <ProgressBar now={80} label={`${80}%`} />
            </Slide>
            <Slide left>
            <label className="fw-bolder my-2 fs-4">FIREBASE Authentication</label>
            <ProgressBar now={89} label={`${89}%`} />
            </Slide>
          </div>
         
          
          <Slide left>
          <div className="col-sm-12 col-md-6 ps-5 mx-auto">
            <label className="fw-bolder my-2 fs-4">REACT JS</label>
            <ProgressBar now={85} label={`${85}%`} />
            <label className="fw-bolder my-2 fs-4">NODE JS</label>
            <ProgressBar now={80} label={`${80}%`} />
            <label className="fw-bolder my-2 fs-4">EXPRESS JS</label>
            <ProgressBar now={82} label={`${82}%`} />
            <label className="fw-bolder my-2 fs-4">CONTEXT API</label>
            <ProgressBar now={60} label={`${60}%`} />
            <label className="fw-bolder my-2 fs-4">MONGO-DB</label>
            <ProgressBar now={60} label={`${60}%`} />
          </div>
          </Slide>
          
        </div>
      </div>
    </div>
  );
};

export default Skills;
