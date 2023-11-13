import React from "react";
import "./styles.css";
import binarimg from "../../assets/binar.png"
import fbimg from "../../assets/icon_facebook.png"
import igimg from "../../assets/icon_instagram.png"
import mailimg from "../../assets/icon_mail.png"
import twimg from "../../assets/icon_twitch.png"
import twtimg from "../../assets/icon_twitter.png"

const Footer = () => {
    return(
        <div className="footer-container">
            <div>
                <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
                <p>binarcarrental@gmail.com</p>
                <p>081-233-334-808</p>
            </div>
            <div className="footer-list">
                <p>Our services</p>
                <p>Why Us</p>
                <p>Testimonial</p>
                <p>FAQ</p>
            </div>
            <div>
                <p>Connect with us</p>
                <img src={fbimg} alt="" />
                <img src={igimg} alt="" />
                <img src={twtimg} alt="" />
                <img src={mailimg} alt="" />
                <img src={twimg} alt="" />
            </div>
            <div className="footer-copyr">
                <p>Copyright Binar 2022</p>
                <img src={binarimg} alt="" />
            </div>
        </div>
    )
}


export default Footer;