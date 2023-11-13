import React, { useState } from "react";
import "./styles.css"

const WhyUs = () =>{
    const [DataWhyUs, setDataWhyUs] = useState ([
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M5.83329 18.3333H3.33329C2.89127 18.3333 2.46734 18.1577 2.15478 17.8452C1.84222 17.5326 1.66663 17.1087 1.66663 16.6667V10.8333C1.66663 10.3913 1.84222 9.96738 2.15478 9.65482C2.46734 9.34226 2.89127 9.16666 3.33329 9.16666H5.83329M11.6666 7.5V4.16666C11.6666 3.50362 11.4032 2.86774 10.9344 2.3989C10.4656 1.93006 9.82967 1.66666 9.16663 1.66666L5.83329 9.16666V18.3333H15.2333C15.6352 18.3379 16.0253 18.197 16.3315 17.9367C16.6378 17.6763 16.8397 17.3141 16.9 16.9167L18.05 9.41666C18.0862 9.17779 18.0701 8.9339 18.0027 8.70187C17.9354 8.46985 17.8184 8.25524 17.6598 8.07293C17.5013 7.89061 17.305 7.74494 17.0846 7.64601C16.8642 7.54708 16.6249 7.49726 16.3833 7.5H11.6666Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>,
            background: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
            <circle cx="16" cy="16" r="16" fill="#F9CC00"/>
          </svg>,
            title: "Mobil Lengkap",
            description: "Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat",
        },
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M17.1583 11.175L11.1833 17.15C11.0285 17.305 10.8447 17.4279 10.6424 17.5118C10.44 17.5956 10.2232 17.6388 10.0041 17.6388C9.7851 17.6388 9.56822 17.5956 9.36589 17.5118C9.16356 17.4279 8.97975 17.305 8.82496 17.15L1.66663 10V1.66666H9.99996L17.1583 8.825C17.4687 9.13727 17.6429 9.55969 17.6429 10C17.6429 10.4403 17.4687 10.8627 17.1583 11.175V11.175Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M5.83337 5.83334H5.84171" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>,
            background: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
            <circle cx="16" cy="16" r="16" fill="#FA2C5A"/>
            </svg> ,
            title: "Harga Murah",
            description: "Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain",
        },
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M9.99996 18.3333C14.6023 18.3333 18.3333 14.6024 18.3333 10C18.3333 5.39762 14.6023 1.66666 9.99996 1.66666C5.39759 1.66666 1.66663 5.39762 1.66663 10C1.66663 14.6024 5.39759 18.3333 9.99996 18.3333Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M10 5V10L13.3333 11.6667" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
             </svg>,
            background: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
            <circle cx="16" cy="16" r="16" fill="#0D28A6"/>
            </svg> ,
            title: "Layanan 24 Jam",
            description: "Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu",
        },
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="22" viewBox="0 0 20 22" fill="none">
            <path d="M10.0001 13.5C13.2217 13.5 15.8334 10.8883 15.8334 7.66667C15.8334 4.44501 13.2217 1.83334 10.0001 1.83334C6.77842 1.83334 4.16675 4.44501 4.16675 7.66667C4.16675 10.8883 6.77842 13.5 10.0001 13.5Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M6.84159 12.575L5.83325 20.1667L9.99992 17.6667L14.1666 20.1667L13.1583 12.5667" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>,
            background: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
            <circle cx="16" cy="16" r="16" fill="#5CB85F"/>
            </svg> ,
            title: "Sopir Profesional",
            description: "Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu",
        },
    ])

    return (
        <div class="wu-container">
            <h2>Why Us?</h2>
            <p class="wu-container-p">Mengapa harus pilih Binar Car Rental?</p>
            <div>
                <div class="wu-container-list">
                    {DataWhyUs.map((obj)=>{
                        return (
                            <div class="wu-list">
                                <div class="wu-list-icon">
                                    <div class="wu-list-icon-1">{obj.icon}</div>
                                    <div class="wu-list-icon-2">{obj.background}</div>
                                </div>
                                <p>{obj.title}</p>
                                <p>{obj.description}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default WhyUs;