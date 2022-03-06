import React from "react";
import { Typewriter, useTypewriter, Cursor } from "react-simple-typewriter";
import "./Profile.css";

const Profile = () => {
  return (
    <div>
      <div className="profile-container py-3 pt-4 " style={{backgroundColor:"#1C1333"}}>
        <div className="container ">
          <div className="row flex-column-reverse flex-lg-row">
            <div className="col-md-7">
              <div className="profile-parent">
                <div className="profile-details">
                  <div className="colZ">
                    <div className="cloZ-icon">
                      <a
                        href="https://www.facebook.com/khairojJaman"
                        target="_top"
                      >
                        <i className="fa-brands  fa-facebook ms-2 text-light fs-3"></i>
                      </a>
                      <a href="https://www.instagram.com/rony.2121">
                        <i className="fa-brands fa-instagram-square ms-2 text-light fs-3"></i>
                      </a>
                      <a href="https://www.linkedin.com/in/ronymiah/">
                        <i className="fa-brands fa-linkedin ms-2 text-light fs-3"></i>
                      </a>
                      <a href="https://www.youtube.com/channel/UCJJnoGXaRAFH8RvoPCHBUSQ">
                        <i className="fa-brands fa-youtube-square ms-2 text-light fs-3"></i>
                      </a>
                      <a href="https://github.com/RonyMiah">
                        <i className="fa-brands fa-github-square ms-2 text-light fs-3"></i>
                      </a>
                    </div>
                  </div>
                  <div className="profile-details-name  mt-2">
                    <span className="primary-text text-light">
                      {" "}
                      Hello I'm{" "}
                      <span className="highlighted-text fw-bolder fs-4"> Rony Miah</span>
                    </span>
                  </div>
                  <div className="profile-details-role">
                    <span className="primary-text">
                      {" "}
                      <h1 className="text-Design fs-1 fw-bolder" style={{ margin: "auto 0", fontWeight: "normal" }}>
                        {" "}
                        <span style={{ color: "#8cff32", fontWeight: "bold" }}>
                          {/* Style will be inherited from the parent element */}
                          <Typewriter
                          
                            words={[
                              "Front End Developer 👌",
                              "React Developer 🧩",
                              "MERN Stake Developer ✔",
                              "Junior Developer ✌",
                              " Responsive Designer! 👍",
                              "YouTuber 😎",
                            ]}
                            loop={Infinity}
                            cursor
                            cursorStyle="_"
                            typeSpeed={100}
                            deleteSpeed={50}
                            delaySpeed={1000}
                          />
                        </span>
                      </h1>
                    </span>
                    <span className="text-light fs-5 ">
                      Building Front-end React Application Project & Responsive
                      Design .
                    </span>
                    <div className="profile-options mt-4">
                      <button
                        className="btn btn rounded button-yellow"
                        style={{ backgroundColor: "#FFA500" }}
                      >
                        {" "}
                        <b>Hire Me</b>
                      </button>
                      <a href="Resume.pdf" download="Rony Resume.pdf">
                        <button style={{backgroundColor:"#8cff32"}} className="btn btn rounded ms-4 button-black fw-bolder">
                          Get Resume
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-5 ">
              <div className="profile-picture">
                <div className="profile-picture-background">
                  
                </div>
              </div>
            </div>
            
          </div>
          
        </div>
        
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  <path fill="#1c1333" fill-opacity="1" d="M0,160L288,32L576,192L864,128L1152,224L1440,64L1440,0L1152,0L864,0L576,0L288,0L0,0Z"></path>
</svg>
      
    </div>
  );
};

export default Profile;
