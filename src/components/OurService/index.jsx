import React, { useState } from "react";
import "./styles.css/"
import girlimg from "../../assets/img_service.png"

const OurService = () =>{
    const [DataOurService, setDataOurService] = useState ([
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M13.3333 4L5.99996 11.3333L2.66663 8" stroke="#0D28A6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>,
            description: "Sewa Mobil Dengan Supir di Bali 12 Jam",
        },
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M13.3333 4L5.99996 11.3333L2.66663 8" stroke="#0D28A6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>,
            description: "Sewa Mobil Lepas Kunci di Bali 24 Jam",
        },
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M13.3333 4L5.99996 11.3333L2.66663 8" stroke="#0D28A6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>,
            description: "Sewa Mobil Jangka Panjang Bulanan",
        },
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M13.3333 4L5.99996 11.3333L2.66663 8" stroke="#0D28A6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>,
            description: "Gratis Antar - Jemput Mobil di Bandara",
        },
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M13.3333 4L5.99996 11.3333L2.66663 8" stroke="#0D28A6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>,
            description: "Layanan Airport Transfer / Drop In Out",
        },
    ])

    return(
        <div class="container-ourservice">
            <div class="os-pic">
                <div class="os-pic-img">
                    <img src={girlimg} alt="" />
                </div>
            </div>
            <div class="os-text">
                <h2>Best Car Rental for any kind of trip in (Lokasimu)!</h2>
                <p>Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga lebih murah dibandingkan yang lain, kondisi mobil baru, serta kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting, dll.</p>
                <div class="os-list">
                  {DataOurService.map((obj)=>{
                    return (
                        <div>
                            <p> <a className="os-icon">{obj.icon}</a> {obj.description}</p>
                        </div>
                    )
                  })}
                </div>
            </div>
        </div>
    )
}

export default OurService;