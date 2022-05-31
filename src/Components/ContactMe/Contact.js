import React, { useRef } from "react";
import { Flip } from "react-reveal";
import emailjs from "@emailjs/browser";
import Fade from 'react-reveal/Fade';
import "./Contact.css"
import ScrollToTop from "react-scroll-to-top";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "email-id007",
        "template_62ytnfd",
        form.current,
        "user_YI9QFdJFluEby1kXk8Uw6"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Massage Send SuccessFully");
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div id="contact">
        <Fade bottom>
      <h2
        className="mx-auto  text-font mx-auto mt-5"
        style={{ color: "#1c1333" }}
      >
        CONTACT ME
      </h2>
      <h6 className="mx-auto text-style">Lets Keep In Touch</h6>

      <div className="Horizontal-ver mb-5">
        <hr className="fw-bolder  w-25 mx-auto "></hr>
      </div>
      </Fade>
      <ScrollToTop smooth top="1000 " color="#2c0d5b" />
      <div className="container">
        <div
          className="row rounded py-4 my-4"
          style={{ backgroundColor: "#1C1333" }}
        >
           <Fade right>
          <h1 className="text-start text-white ms-3">Get In Touch 📧</h1>
          </Fade>
          <div className="col-sm-12 col-md-6">
            <div className="cloZ-icon text-start mt-3 ms-3">
              <Flip left>
                <a href="https://www.facebook.com/khairojJaman" target="_top">
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
              </Flip>
            </div>
            <div className="ms-3">
            <Fade bottom>
              <h3
                className="text-start text-white   "
                style={{ marginTop: "60px",  }}
              >
                {" "}
                Send Your Email Here!
              </h3>

              <img
                className="w-100 rounded mb-4"
                src="https://i.ibb.co/h21Vzp4/mailz-d13d5e32.jpg"
                alt="No Internet"
              ></img>
              </Fade>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 ">
            <div
              className="p-3  rounded"
              style={{ backgroundColor: "#e9e9eb" }}
            >
              <form ref={form} onSubmit={sendEmail} className="Form-control">
                <label  for="name" className="fw-bolder my-2 text-left d-block ">
                  Name
                </label>
                <input
                  placeholder="Enter Your Name"
                  type="text"
                  name="name"
                  id="name"
                  className="form-control p-2 rounded"
                  style={{ backgroundColor: "#dbdcde" }}
                  required
                ></input>
                <label for="email" className=" my-2 fw-bolder text-left d-block ">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  placeholder="Enter Your Email"
                  type="email"
                  className="form-control p-2 rounded"
                  style={{ backgroundColor: "#dbdcde" }}
                  required
                ></input>
                <label  for="message" className="my-2 fw-bolder text-left d-block ">
                  Massage
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Type Massage"
                  className="form-control p-2 rounded"
                  style={{ backgroundColor: "#dbdcde", }}
                  required
                ></textarea>
                <button
                  type="submit"
                  className="form-control  btn btn-primary mt-2"
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
