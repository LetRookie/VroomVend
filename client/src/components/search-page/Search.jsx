import { useEffect, useState } from "react"
import * as carService from '../../services/carService'

export default function Search() {
    const [cars, setCars] = useState([]);
    useEffect(() => {
        carService.getAll()
        .then(result => setCars(result));
    }, []);

    console.log(cars);

    return (
        <div className="buy-cars">
            <section className="search">
                <p>Search Form Here</p>
            </section>
            <section className="car-list">
                <ul>
                    <li>
                        <div className="car-img">
                            <img src="https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2FyfGVufDB8fDB8fHww" alt="" />
                        </div>
                        <div className="subscription">
                            <p>Name</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, corporis!</p>
                        </div>
                    </li>
                    <li>
                        <div className="car-img">
                            <img src="https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2FyfGVufDB8fDB8fHww" alt="" />
                        </div>
                        <div className="subscription">
                            <p>Name</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, corporis!</p>
                        </div>
                    </li>
                    <li>
                        <div className="car-img">
                            <img src="https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2FyfGVufDB8fDB8fHww" alt="" />
                        </div>
                        <div className="subscription">
                            <p>Name</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, corporis!</p>
                        </div>
                    </li>
                    <li>
                        <div className="car-img">
                            <img src="https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2FyfGVufDB8fDB8fHww" alt="" />
                        </div>
                        <div className="subscription">
                            <p>Name</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, corporis!</p>
                        </div>
                    </li>
                    <li>
                        <div className="car-img">
                            <img src="https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2FyfGVufDB8fDB8fHww" alt="" />
                        </div>
                        <div className="subscription">
                            <p>Name</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, corporis!</p>
                        </div>
                    </li>
                </ul>
            </section>
        </div>
    )
}