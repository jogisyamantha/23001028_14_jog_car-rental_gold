import React from "react";
import "./styles.css";
import carimg from "../../assets/img_car.png"
import { Link } from "react-router-dom";

const HeroSection = () => {
    return (
        <div class="hero-section">
            <div class="hr-text">
                <h1>Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</h1>
                <p>Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
                <Link to={"/search-cars"}>
                <button>Mulai Sewa Mobil</button>
                </Link>
            </div>
            <div class="hr-pic">
                <img src={carimg} alt=""/>
            </div>
        </div>
    )
}

export default HeroSection;