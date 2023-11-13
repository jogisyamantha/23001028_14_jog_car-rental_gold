import React, { useState } from "react";
import "./styles.css";

const Faq = () => {
    const [DataFaq, setDataFaq] = useState ([
        {
            title: "Apa saja syarat yang dibutuhkan?"
        },
        {
            title: "Berapa hari minimal sewa mobil lepas kunci?"
        },
        {
            title: "Berapa hari sebelumnya sabaiknya booking sewa mobil?"
        },
        {
            title: "Apakah Ada biaya antar-jemput?"
        },
        {
            title: "Bagaimana jika terjadi kecelakaan"
        },
    ])


    return (
        <div class="faq-container">
           <div>
            <h2>Frequently Asked Question</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
           </div>
           <div className="faq-container-list">
            {DataFaq.map((obj)=>{
                return(
                    <div className="faq-list">
                        <select name="" id="">
                            <option value="">{obj.title}</option>
                        </select>
                    </div>
                )
            })}
           </div>
        </div>
    )
}

export default Faq;