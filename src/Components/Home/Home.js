import React from "react";
import About from "../AboutMe/About";
import Contact from "../ContactMe/Contact";
import Footer from "../Footer/Footer";
import Project from "../Project/Project";
import Skills from "../Skills/Skills";
import Navber from "./Navber/Navber";
import Profile from "./Profile";

const Home = () => {
  return (
    <div>
      <Navber></Navber>
      <Profile></Profile>
      <About></About>
      <Project></Project>
      <Skills></Skills>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
};

export default Home;
