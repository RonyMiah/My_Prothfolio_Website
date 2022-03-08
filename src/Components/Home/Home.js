import React from 'react';
import About from '../AboutMe/About';
import Project from '../Project/Project';
import Navber from './Navber/Navber';
import Profile from './Profile';

const Home = () => {
    return (
        <div>
            <Navber></Navber>
            <Profile></Profile>
            <About></About>
            <Project></Project>
        </div>
    );
};

export default Home;