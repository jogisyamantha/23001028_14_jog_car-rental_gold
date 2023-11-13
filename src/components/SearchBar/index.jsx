import React, { useEffect, useState } from "react";
import "./styles.css";
import car2img from "../../assets/image-car-2.png"
import { Link } from "react-router-dom";
import axios from "axios";

const SearchBar = () =>{

    const [cars, setCars] = useState([]);
    const [name, setName] = useState ("")
    const [category, setCategory] = useState ("")
    const [price, setPrice] = useState ("")
    const [isChange, setIsChange] = useState (false);
    const [status, setStatus] = useState ("")


    useEffect(()=>{
        handleGetCar(name, category, price, status);
    }, [])

    const handleGetCar = (dataName, dataCategory, dataPrice, dataRent) =>{
        axios
            .get(`https://api-car-rental.binaracademy.org/customer/v2/car?page=1&pageSize=10&name=${dataName}&category=${dataCategory}&price=${dataPrice}&isRented=${dataRent}`)
            .then((res)=>{
                console.log(res)
                setCars(res.data.cars)
            })
            .catch((err)=> console.log(err))
    }

    const handleChangeName = (e) => {
        setName (e.target.value)
    }

    const handleSubmit = () =>{
        handleGetCar (name, category, price, status)
        setIsChange (true)
    }

    const handleChangeType = (e) =>{
        setCategory (e.target.value)
    }

    const handlePrice = (e) =>{
        setPrice (e.target.value)
    }

    const handleChangeStatus = (e) =>{
        setStatus (e.target.value)
    }

    const handleReset = () =>{
        setName("")
        setPrice("")
        handleGetCar ("", "", "", "")
        setCategory ("")
        setIsChange (false)
        setStatus ("")
    }

    return (
        <div className="searchbar-page">
            <div className="searchbar-container">
                <div className="searchbar-item">
                    <p>Pencarianmu</p>
                    <div className="searchbar-input">
                        <div>
                            <p>Nama Mobil</p>
                            <input value={name} onChange={handleChangeName} type="text" placeholder="Ketik nama/tipe mobil" />
                        </div>
                        <div>
                            <p>Kategori</p>
                            <select value={category} onChange={handleChangeType} name="" id="">
                                <option value="">Masukan Kapasitas Mobil</option>
                                <option value="small">2 - 4 orang</option>
                                <option value="medium">4 - 6 orang</option>
                                <option value="large"> 6 - 8 orang</option>
                            </select>
                        </div>
                        <div>
                            <p>Harga</p>
                            <select value={price} onChange={handlePrice} name="" id="">
                                <option value="">Pilih Harga</option>
                                <option value="minPrice=200000&maxPrice=400000">Rp. 200.000 - Rp. 400.000</option>
                                <option value="minPrice=400000&maxPrice=600000">Rp. 400.000 - Rp. 600.000</option>
                                <option value="minPrice=600000&maxPrice=">&gt; Rp. 600.000</option>
                            </select>
                        </div>
                        <div>
                            <p>Status</p>
                            <select value={status} onChange={handleChangeStatus} name="" id="">
                                <option value="">Disewa</option>
                                <option value="true">Ready</option>
                                <option value="false">Not ready</option>
                            </select>
                        </div>
                        <div>
                            <button onClick={isChange ? handleReset : handleSubmit}>
                                {isChange ? "Reset" : "Cari Mobil"}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="detail-car">
                {cars.map((obj)=>(
                    (
                        <div className="detail-car-box">
                            <div className="detail-car-card">
                                <div className="detail-car-data">
                                    <img src={obj.image} />
                                    <div>
                                        <p>{obj.name}</p>
                                        <h3>Rp {Intl.NumberFormat("es-ED").format(obj.price)} / hari</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                                    </div>
                                </div>
                                <Link to={`/detail-car/${obj.id}`}>
                                <button>Pilih Mobil</button>
                                </Link>
                            </div>
                        </div>
                    )
                ))}
            </div>
        </div>
    )
}

export default SearchBar;