import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import * as carService from '../../../services/carService';
import AuthContext from "../../../contexts/authContext";
import CarCard from "../../last-added/car-card/CarCard";

export default function MyOffers() {
    const { id } = useContext(AuthContext);
    const navigate = useNavigate();


    const [myOffers, setMyOffers] = useState([])

    useEffect(() => {
        const getToken = localStorage.getItem('accessToken');

        carService.getAll()
            .then(result => {
                let filteredResult = result.filter(x => x._ownerId === id);
                setMyOffers(filteredResult)
            })
    }, [])

    console.log(myOffers);

    return (
        <>
            <h1>My Offers</h1>
            {myOffers.map(car =>
                <div key={car._id}>
                    <CarCard {...car} />
                    <button onClick={() => navigate(`/cars/${car._id}`)}>Open</button>
                </div>
            )}

        </>
    )
}