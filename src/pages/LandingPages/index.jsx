import React from "react";
import Navbar from "../../components/Navbar";
import "./styles.css";
import HeroSection from "../../components/HeroSection";
import OurService from "../../components/OurService";
import WhyUs from "../../components/WhyUs";
import Testimoni from "../../components/Testimoni";
import CtaBanner from "../../components/CtaBanner";
import Faq from "../../components/Faq";
import Footer from "../../components/Footer";

const LandingPages = () =>{
    return(
        <div>
            <Navbar/>
            <HeroSection/>
            <OurService/>
            <WhyUs/>
            <Testimoni/>
            <CtaBanner/>
            <Faq/>
            <Footer/>
        </div>
    )
}

export default LandingPages;