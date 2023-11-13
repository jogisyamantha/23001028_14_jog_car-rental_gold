import React, { useState } from "react";
import "./styles.css"
import Carousel from 'react-multi-carousel';

const Testimoni = () =>{

      
    const [DataTestimoni, setDataTestimoni] = useState ([
        {
            description: "“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”",
            status: "John Dee 32, Bromo",
            star: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" viewBox="0 0 16 15" fill="none">
            <path d="M8 0L9.79611 5.52786H15.6085L10.9062 8.94427L12.7023 14.4721L8 11.0557L3.29772 14.4721L5.09383 8.94427L0.391548 5.52786H6.20389L8 0Z" fill="#F9CC00"/>
            </svg>,
        },
        {
            description: "“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”",
            status: "John Dee 32, Bromo",
            star: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" viewBox="0 0 16 15" fill="none">
            <path d="M8 0L9.79611 5.52786H15.6085L10.9062 8.94427L12.7023 14.4721L8 11.0557L3.29772 14.4721L5.09383 8.94427L0.391548 5.52786H6.20389L8 0Z" fill="#F9CC00"/>
            </svg>,
        },
        // {
        //     description: "“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”",
        //     status: "John Dee 32, Bromo",
        //     star: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" viewBox="0 0 16 15" fill="none">
        //     <path d="M8 0L9.79611 5.52786H15.6085L10.9062 8.94427L12.7023 14.4721L8 11.0557L3.29772 14.4721L5.09383 8.94427L0.391548 5.52786H6.20389L8 0Z" fill="#F9CC00"/>
        //     </svg>,
        // },
    ])

    return (
        <div class="container-testimoni">
            <h2>Testimonial</h2>
            <p>Berbagai review positif dari para pelanggan kami</p>
            <div className="testimoni-carosell">
                <div className="testimoni-item">
                    {DataTestimoni.map((obj)=>{
                            return(
                                <div class="t-holder">
                                    <div class="t-holder-in">
                                        <img src="" alt="" />
                                        <div class="t-holder-item">
                                            <div class="holder-star">{obj.star}{obj.star}{obj.star}{obj.star}{obj.star}</div>
                                            <p>{obj.description}</p>
                                            <p class="holder-status">{obj.status}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                </div>
                <div class="t-holder-button">
                    <button class="t-holder-button-1"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M12.5 15L7.5 10L12.5 5" stroke="#222222" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg></button>
                    <button class="t-holder-button-2"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M7.5 15L12.5 10L7.5 5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg></button>
                </div>         
            </div>
        </div>
    )
}


export default Testimoni;