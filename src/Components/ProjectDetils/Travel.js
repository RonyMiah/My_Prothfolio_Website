import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./style.css";
import Fade from "react-reveal/Fade";
// import required modules
import { EffectCoverflow, Pagination } from "swiper";


const Travel = () => {
  return (
    <div>
    <Link to="/home">
      {" "}
      <Button className="text-start d-block  ms-2 mt-5 mb-3">
        <i class="fa-solid fa-arrow-left"> </i> Go Back{" "}
      </Button>
    </Link>

    {/* Github Link Icon Start */}
    <h2
      className="text-center mx-auto  text-font mx-auto "
      style={{ color: "#1c1333" }}
    >
      Github Link <i class="fa-brands fa-github"></i>
    </h2>
    <div className="Horizontal-ver mb-5">
      <hr className="fw-bolder  w-25 mx-auto "></hr>
    </div>
    <Fade left>
      <div className="my-4">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6">
              <a href="https://github.com/RonyMiah/EasyRent-Client-side-team-poject">
                {" "}
                <i class="fa-brands fa-github fs-4 ">Client Side</i>
              </a>
              <a href="https://github.com/RonyMiah/EasyRent-Serverside-teamProject">
                <i class="fa-brands fa-github fs-4 ms-5 ">Server Side</i>
              </a>
            </div>
            <div className="col-sm-12 col-md-6">
              <a href="https://easyrent-85ae2.web.app/">
                <i class="fa-solid fa-bolt-lightning    ">Live Website</i>
              </a>
              <Button className="ms-5">
                {" "}
                <Link
                  className="text-white text-decoration-none  "
                  to="/blogs"
                >
                  Blogs
                </Link>
              </Button>
            </div>
          </div>
        </div>
        <br />
      </div>
    </Fade>

    {/* Github Link Icon End */}

    
{/* Swiper Js Start  */}
    <Swiper
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={"auto"}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      pagination={true}
      modules={[EffectCoverflow, Pagination]}
      className="mySwiper"
    >
      <SwiperSlide>
        <img
          className=""
          src="https://i.ibb.co/0tZCwn7/one.png"
          alt="No Internet"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://i.ibb.co/x8Y8G6b/two.png" alt="No Interne" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://i.ibb.co/bQHscf0/three.png" alt="No Interne" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://i.ibb.co/cT3byv8/four.png" alt="No Interne" />
      </SwiperSlide>
    </Swiper>
  </div>
  );
};

export default Travel;
