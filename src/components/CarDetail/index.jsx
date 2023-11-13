import React, { useEffect, useState } from "react";
import "./styles.css";
import axios from "axios";
import { useParams } from "react-router-dom";

const CarDetail = () =>{

    const param = useParams()
    const [car, setCar] = useState ({})
    const carCategory = {
        small: '2 - 4 orang',
        medium: '4 - 6 orang',
        large: '6 - 8 orang',
      }

    useEffect(()=>{
        handleGetCarDetail()
    }, [])

    const handleGetCarDetail = () =>{
        axios
            .get(`https://api-car-rental.binaracademy.org/customer/car/${param.id}`)
            .then((res)=>{
                console.log(res)
                setCar(res.data);
            })

    }

    // const carCategory = category === 'small' ? "2 - 4 orang" : category === 'medium' ? "4 - 6 orang" : "6 - 8 orang" ;

    // let carCategory;
    //  if (category === 'small') {
    // carCategory = "2 - 4 orang";
    // } else if (category === 'medium') {
    // carCategory = "4 - 6 orang";
    // } else {
    // carCategory = "6 - 8 orang";
    // }

    return (
        <div className="cardetail">
            <div className="cardetail-container">
                <div className="cardetail-left">
                    <div className="cardetail-left-item">
                        <p>Tentang Paket</p>
                        <p>Include</p>
                        <ul>
                            <li>Apa saja yang termasuk dalam paket misal durasi max 12 jam</li>
                            <li>Sudah termasuk bensin selama 12 jam</li>
                            <li>Sudah termasuk Tiket Wisata</li>
                            <li>Sudah termasuk pajak</li>
                        </ul>
                        <p>Exclude</p>
                        <ul>
                            <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                            <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                            <li>Tidak termasuk akomodasi penginapan</li>
                        </ul>
                        <p>Refund, Reschedule, Overtime</p>
                        <ul>
                            <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                            <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                            <li>Tidak termasuk akomodasi penginapan</li>
                            <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                            <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                            <li>Tidak termasuk akomodasi penginapan</li>
                            <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                            <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                            <li>Tidak termasuk akomodasi penginapan</li>
                        </ul>

                    </div>
                </div>
                <div className="cardetail-right">
                    <div className="cardetail-right-item">
                        <img src={car.image} alt="" />
                        <p>{car.name}</p>
                        <p>{carCategory[car.category]}</p>
                        <div className="cardetail-right-item-total">
                            <p>Total</p>
                            <p>Rp {Intl.NumberFormat("es-ED").format(car.price)}</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default CarDetail;