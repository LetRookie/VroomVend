import { useEffect, useState } from "react";

export default function PaginationFunc({
    carsPerPage,
    totalCars,
    paginate,
    activePage,
    setActivePage
}) {

    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalCars / carsPerPage); i++) {
        pageNumbers.push(i);
        // console.log(pageNumbers);
    }

    // const [activePage, setActivePage] = useState(1);

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
                            <li key={number} className={`${activePage === number ? 'active' : ''}`}
                            onClick={() => {
                                handlePageClick(number);
                                paginate(number);
                            }}>
                                <span className="page-link"> {number}</span>
                            </li>
                        ))
                    }
                </ul>
            </nav>
        </div>
    )

}