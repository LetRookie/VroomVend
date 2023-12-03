import { useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

import * as carService from '../../services/carService'
import '../../assets/styles/edit-car.css'


export default function SellCar() {
    const navigate = useNavigate();
    const { carId } = useParams();

    const [car, setCar] = useState({

        brandName: '',
        model: '',
        power: '',
        imageUrl: '',
        year: '',
        color: '',
        _id: '',
        img1: '',
        img2: '',
        img3: '',
        subscription: ''
    });

    useEffect ( () => {
        carService.getCar(carId)
        .then(result => {
            setCar(result);
        });
    }, [carId]);

    const editSubmitHandler = async (e) => {

        e.preventDefault();
        const values = Object.fromEntries(new FormData(e.currentTarget));

        try {
            
            await carService.edit(carId, values);

            navigate('/search')
        } catch (error) {
            //err notification
            console.log(error);
        }
    }

    const onChange = (e) => {
        setCar(state => ({
            ...state,
            [e.target.name]: e.target.value
        }))
    }

    return (
        <section id="edit-page" className="edit-car">
            <form className="editForm"   onSubmit={editSubmitHandler}>
                <h2>Sell your car here:</h2>
                <div className="form-wrapper">
                    <label htmlFor="brandName">Brand:</label>
                    <input type="text" name="brandName" id="brandName" value={car.brandName} onChange={onChange} />
                    <label htmlFor="model">Model:</label>
                    <input type="text" name="model" id="model" value={car.model} onChange={onChange} />
                    <label htmlFor="year">Year:</label>
                    <input type="text" name="year" id="year" value={car.year} onChange={onChange} />
                    <label htmlFor="power">power:</label>
                    <input type="text" name="power" id="power" value={car.power} onChange={onChange} />
                    <label htmlFor="color">color:</label>
                    <input type="text" name="color" id="color" value={car.color} onChange={onChange} />
                    <label htmlFor="imageUrl">Image:</label>
                    <input type="text" name="imageUrl" id="imageUrl" value={car.imageUrl} onChange={onChange} />
                    <label htmlFor="img1">Image 2:</label>
                    <input type="text" name="img1" id="img1" value={car.img1} onChange={onChange} />
                    <label htmlFor="img2">Image 3:</label>
                    <input type="text" name="img2" id="img2" value={car.img2} onChange={onChange} />
                    <label htmlFor="img3">Image 4:</label>
                    <input type="text" name="img3" id="img3" value={car.img3} onChange={onChange} />
                    <label htmlFor="subscription">Description:</label>
                    <textarea name="subscription" id="subscription" value={car.subscription} onChange={onChange} cols="40" rows="5"></textarea>

                    <input className="btn submit" type="submit" value="Edit Car" />
                </div>
            </form>
        </section>
    )
}