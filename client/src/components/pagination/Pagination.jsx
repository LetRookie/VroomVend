import { useEffect, useState } from 'react';

import Cars from './Cars';
import PaginationFunc from './PaginationFunc';
import * as carService from '../../services/carService';


export default function Pagination() {

    const [carsPg, setCarsPg] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [carsPerPage] = useState(6);

    useEffect(() => {
        setLoading(true)
        carService.getAll()
            .then(result => setCarsPg(result))

        setLoading(false)
    }, [])

    //Get Current Posts

    const indexOfLastCar = currentPage * carsPerPage;
    const indexOfFirstCar = indexOfLastCar - carsPerPage;
    const currentCar = carsPg.slice(indexOfFirstCar, indexOfLastCar);

    //Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <>
            <div className="pagination-contanier">
                <h1>Pagination</h1>
                <ul>
                    {currentCar.map(car =>
                        <Cars key={car._id} {...car} loading={loading} />)}
                </ul>
            </div>
            <PaginationFunc
                carsPerPage={carsPerPage}
                totalCars={carsPg.length}
                paginate={paginate}
            />
        </>
    );
}