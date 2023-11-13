import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";

const CtaBanner = () =>{
    return (
        <div class="ctabanner-container">
            <div class="ctabanner-group">
                <h4>Sewa Mobil di (Lokasimu) Sekarang</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                <Link to="/search-cars">
                <button>Mulai Sewa Mobil</button>
                </Link>
            </div>
        </div>
    )
}

export default CtaBanner