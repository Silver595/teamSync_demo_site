import React from "react";
import Navbar from "../componets/Navbar.jsx"; // Corrected the folder name from 'componets' to 'components'
import HeroSection from "../componets/HeroSection.jsx";
import Features from "../componets/Features.jsx";
import ScoutSection from "./ScoutSection.jsx";
import FaqSection from "./FaqSection.jsx";
import Footer from "./Footer.jsx";

const Home = () => {
    return (
        <>
            <Navbar />
            <HeroSection />
            <Features />
            <ScoutSection/>
            <FaqSection/>
            <Footer/>
        </>
    );
};

export default Home;
