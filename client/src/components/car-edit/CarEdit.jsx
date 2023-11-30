import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';


import * as carService from '../../services/carService';
import '../../assets/styles/edit-car.css'
import useForm from '../../hooks/useForm'


export default function SellCar() {
    const navigate = useNavigate();
    const {carId} = useParams();
    const [car, setCar] = useState({});

    useEffect(() => {
        carService.getCar(carId)
            .then(result => {
                setCar(result);
            })
    }, [carId]);

    

    return (
        <section id="edit-page" className="edit-car">
            <form className="editForm" onSubmit={onSubmit}>
                <h2>Sell your car here:</h2>
                <div className="form-wrapper">
                    <label htmlFor="brandName">Brand:</label>
                    <input type="text" name="brandName" id="brandName" value={values.brandName} onChange={onChange} placeholder="   Enter brand of car..." />
                    <label htmlFor="model">Model:</label>
                    <input type="text" name="model" id="model" value={values.model} onChange={onChange}  placeholder="   Enter model of the brand..." />
                    <label htmlFor="year">Year:</label>
                    <input type="text" name="year" id="year" value={values.year} onChange={onChange}  placeholder="   Enter production year..." />
                    <label htmlFor="power">power:</label>
                    <input type="text" name="power" id="power" value={values.power} onChange={onChange}  placeholder="   Enter hps..." />
                    <label htmlFor="color">color:</label>
                    <input type="text" name="color" id="color" value={values.color} onChange={onChange} placeholder="   Enter color of car..." />
                    {/* <label htmlFor="imageUrl">Image:</label> */}
                    {/* <input type="file" name="imageUrl" id="imageUrl" multiple={true} placeholder="   Main image url..." /> */}
                    <label htmlFor="imageUrl">Image:</label> 
                    <input type="text" name="imageUrl" id="imageUrl" value={values.imageUrl} onChange={onChange}  placeholder="   Main image url..." />
                    <label htmlFor="img1">Image 2:</label>
                    <input type="text" name="img1" id="img1" value={values.img1} onChange={onChange}  placeholder="   Image 2 url..." />
                    <label htmlFor="img2">Image 3:</label>
                    <input type="text" name="img2" id="img2" value={values.img2} onChange={onChange}  placeholder="   Image 3 url..." />
                    <label htmlFor="img3">Image 4:</label>
                    <input type="text" name="img3" id="img3" value={values.img3} onChange={onChange}  placeholder="   Image 4 url..." />
                    <label htmlFor="subscription">Description:</label>
                    <textarea name="subscription" id="subscription" value={values.subscription} onChange={onChange}  cols="40" rows="5"></textarea>


                    <input className="btn submit" type="submit" value="Edit Car" />
                </div>
            </form>
        </section>
    )
}