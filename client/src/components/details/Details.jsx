import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as carService from '../../services/carService';

export default function Details() {
    const [car, setCar] = useState({})
    const {carId} = useParams();


    useEffect(()=>{
        carService.getCar(carId)
        .then(setCar);// validation
    },[carId])

    return (
        <div className="details-wrapper">

            <div className="big-screen">
                <img src={car.imageUrl} alt={car.model} />
            </div>
            <div className="img-slide">
                <img src={car.imageUrl} alt={car.model} />
                <img src={car.img1} alt={car.model} />
                <img src={car.img2} alt={car.model} />
                <img src={car.img3} alt={car.model} />
            </div>
            <div className="details">
                <h3>{`${car.brandName}-${car.model}-${car.year}`}</h3>
                <h4>{`${car.power},${car.color}`}</h4>
                <p>{car.subscription}</p>
            </div>
        </div>
    )
}