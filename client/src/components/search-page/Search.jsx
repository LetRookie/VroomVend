import { useEffect, useState } from "react"

import * as carService from '../../services/carService'
import CarListItem from '../search-page/car-list/CarListItem'
import SelectSearchBox from "./search-box/SelectSearch";


export default function Search() {
    const [cars, setCars] = useState([]);
    const [filteredCars, setFilteredCars] = useState([]);
    const [search, setSearch] = useState({
        brandName: '',
        model: '',
        year: ''
    })
    const [hasResult, setHasResult] = useState(false);

    const onSubmit = (e) => {
        e.preventDefault();
        let filteredCars = [];

        if(search.brandName && !search.model && !search.year) {
            filteredCars = cars.filter(x => x.brandName === search.brandName)
        }

        if(search.brandName && search.model && !search.year) {
            filteredCars = cars.filter(x => x.brandName === search.brandName && x.model === search.model)
        }

        if(search.brandName && !search.model && search.year) {
            filteredCars = cars.filter(x => x.brandName === search.brandName && x.year === search.year)
        }

        if(search.brandName && search.model && search.year) {
            filteredCars = cars.filter(x => x.brandName === search.brandName && x.model === search.model && x.year === search.year)
        }
        
        setFilteredCars(filteredCars)
        setHasResult(true);
        console.log(search);
    };

    const mapedCars = (c) => {
        return c.map(car =>
            <CarListItem key={car._id} {...car} />)
    }

    useEffect(() => {
        carService.getAll()
            .then(result => setCars(result));
    }, []);

    return (
        <div className="buy-cars">
            <section className="search">
                <form className="search-box" onSubmit={onSubmit} >
                    <SelectSearchBox setSearch={setSearch} />
                    <input type="submit" value="Search" />
                </form>
            </section>
            <section className="car-list">
                <ul>
                    {!hasResult ? mapedCars(cars) :
                        filteredCars.length ? mapedCars(filteredCars) : <p>Nqma goo</p> 
                    }
                </ul>
            </section>
        </div>
    )
}