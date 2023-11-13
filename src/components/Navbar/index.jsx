import React, { useState } from "react";
import "./styles.css";
import binarimg from "../../assets/binar.png"
import { Link, useAsyncError } from "react-router-dom";
import bar1img from "../../assets/fi_menu.png"
import bar2img from "../../assets/fi_x.png"

const Navbar = () => {

    const [showSideBar, setShowSideBar] = useState (false);
    const [buttonIcon, setButtonIcon] = useState (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M3 18H21" stroke="#222222" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M3 12H21" stroke="#222222" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M3 6H21" stroke="#222222" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>)

    const handleSideBar = () => {
        setShowSideBar(!showSideBar)
        setButtonIcon(showSideBar ? <svg className="icon1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M3 18H21" stroke="#222222" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M3 12H21" stroke="#222222" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M3 6H21" stroke="#222222" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg> : <svg className="icon2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M18 6L6 18" stroke="#222222" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M6 6L18 18" stroke="#222222" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>)
    }

    return (
        <div className="navbar-container">
            <div className="navbar-item">
                <div class="navbar">
                    <Link to="/">
                    <img src={binarimg} alt="" />
                    </Link>
                    <div class="n-text">
                        <p>Our services</p>
                        <p>Why Us</p>
                        <p>Testimonial</p>
                        <p>FAQ</p>
                    </div>
                    <div className="sidebar">
                        <button onClick={handleSideBar}>{buttonIcon}</button>
                        {showSideBar &&
                        (<div className="sidebar-item">
                            <div className="sidebar-item-list">
                                <h3>BCR</h3>
                                <p>Our Services</p>
                                <p>Why Us</p>
                                <p>Testimony</p>
                                <p>FAQ</p>
                            </div>
                        </div>)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;