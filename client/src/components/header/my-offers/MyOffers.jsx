import { useEffect, useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";

import * as carService from '../../../services/carService';
import AuthContext from "../../../contexts/authContext";
import CarCard from "../../last-added/car-card/CarCard";

export default function MyOffers() {
    const { id } = useContext(AuthContext);
    const navigate = useNavigate();


    const [myOffers, setMyOffers] = useState([])

    useEffect(() => {

        carService.getAll()
            .then(result => {
                let filteredResult = result.filter(x => x._ownerId === id);
                setMyOffers(filteredResult)
            })
    }, [])

    console.log(myOffers);

    return (
        <div className="my-offers">
            <h1>My Offers</h1>
            <div className="cards-wrapper">
            {myOffers.length ? myOffers.map(car =>
                    <div key={car._id} className="offers-card">
                        <CarCard {...car} />
                        <button onClick={() => navigate(`/cars/${car._id}`)}>Open</button>
                    </div>
            ) : <div className="no-content">
                <p>You don't have any offers yet</p>
                <span className="offer-link">Create an offer <Link to="/sell">here!</Link></span>
                </div>}
            </div>
        </div>
    )
}