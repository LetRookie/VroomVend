import { useEffect, useState } from "react"

import * as carService from '../../services/carService'
import CarListItem from '../search-page/car-list/CarListItem'

export default function Search() {
    const [cars, setCars] = useState([]);
    useEffect(() => {
        carService.getAll()
        .then(result => setCars(result));
    }, []);

    return (
        <div className="buy-cars">
            <section className="search">
                <p>Search Form Here</p>
            </section>
            <section className="car-list">
                <ul>
                    {cars.map (car => (
                        <CarListItem key={car._id} {...car} />
                    ))}
                </ul>
            </section>
        </div>
    )
}