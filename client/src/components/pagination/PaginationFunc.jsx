import { useState } from "react";

export default function PaginationFunc({
    carsPerPage,
    totalCars,
    paginate
}) {

    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalCars / carsPerPage); i++) {
        pageNumbers.push(i);
        console.log(pageNumbers);
    }

    const [activePage, setActivePage] = useState(1);

    const handlePageClick = (number) => {
        setActivePage(number);
        paginate(number);
    }


    return (
        <div>
            <nav>
                <ul className="pagination">
                    {
                        pageNumbers.map((number) => (
                            <li key={number}
                            onClick={() => {
                                handlePageClick(number);
                                paginate(number);
                            }}>
                                <a href="#" className="page-link"> {number}</a>
                            </li>
                        ))
                    }
                </ul>
            </nav>
        </div>
    )

}