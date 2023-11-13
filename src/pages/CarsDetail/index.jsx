import React from "react";
import "./styles.css"
import Navbar from "../../components/Navbar";
import CarDetail from "../../components/CarDetail";
import Footer from "../../components/Footer";

const CarsDetail = () => {
    return (
        <div>
            <Navbar/>
            <CarDetail/>
            <Footer/>
        </div>
    )
}

export default CarsDetail;