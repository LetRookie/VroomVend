import { useEffect, useState } from "react"

import * as carService from '../../services/carService'
import CarListItem from '../search-page/car-list/CarListItem'
import SelectSearchBox from "./search-box/SelectSearch";

export default function Search() {
    const [cars, setCars] = useState([]);
    useEffect(() => {
        carService.getAll()
        .then(result => setCars(result));
    }, []);

    return (
        <div className="buy-cars">
            <section className="search">
                <SelectSearchBox />
            <section className="car-list">
                <ul>
                    {cars.map (car => (
                        <CarListItem key={car._id} {...car} />
                    ))}
                </ul>
            </section>
            </section>
        </div>
    )
}