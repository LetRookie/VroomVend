import { useEffect, useState } from "react"

import * as carService from '../../services/carService'
import SelectSearchBox from "./search-box/SelectSearch";
import Cars from '../pagination/Cars';
import PaginationFunc from '../pagination/PaginationFunc';


export default function Search() {
    const [cars, setCars] = useState([]);
    const [filteredCars, setFilteredCars] = useState([]);
    const [search, setSearch] = useState({
        brandName: '',
        model: '',
        year: ''
    })
    const [hasResult, setHasResult] = useState(false);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [activePage, setActivePage] = useState(1);
    const carsPerPage = 2;


    const onSubmit = (e) => {
        e.preventDefault();
        setCurrentPage(1);
        setActivePage(1)
        
        if(search.brandName === ''){
            setHasResult(false);
        }else{
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
        }
    };

    const indexOfLastCar = currentPage * carsPerPage;
    const indexOfFirstCar = indexOfLastCar - carsPerPage;
    const currentCar = cars.slice(indexOfFirstCar, indexOfLastCar);

    //Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const mapedCars = (c) => {
        return c.map(car =>
            <Cars key={car._id} {...car} />)
    }

    useEffect(() => {
        setLoading(true)
        carService.getAll()
            .then(result => setCars(result));
        setLoading(false)
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
                    {!hasResult ? mapedCars(currentCar) :
                        filteredCars.length ? mapedCars(filteredCars.slice(indexOfFirstCar, indexOfLastCar)) : <p className="no-content">No Content</p> 
                    }
                </ul>
            </section>
            <PaginationFunc
                carsPerPage={carsPerPage}
                totalCars={hasResult ? filteredCars.length : cars.length}
                paginate={paginate}
                activePage={activePage}
                setActivePage={setActivePage}
            />
        </div>
    )
}