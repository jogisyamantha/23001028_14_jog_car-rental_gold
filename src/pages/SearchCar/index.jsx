import React from "react";
import "./styles.css"
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import HeroSection from "../../components/HeroSection";
import SearchBar from "../../components/SearchBar";

const SearchCar = () => {
    return (
        <div>
            <Navbar/>
            <HeroSection/>
            <SearchBar/>
            <Footer/>
        </div>
    )
}

export default SearchCar;