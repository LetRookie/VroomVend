import { useNavigate } from 'react-router-dom';

import * as carService from '../../services/carService';

export default function SellCar() {

    const navigate = useNavigate();

    const sellCarSubmitHandler = async (e) => {
        e.preventDefault();
        const carData = Object.fromEntries(new FormData(e.currentTarget));

        console.log(carData);
        try {
            const result = await carService.create(carData);
            
            navigate('/search');
        } catch (err) {
            
        }
    }

    return (
        <section id="sell page" className="sell-car">
            <form className="sellForm" onSubmit={sellCarSubmitHandler}>
                <h2>Sell your car here:</h2>
                <div className="form-wrapper">
                    <label htmlFor="brandName">Brand:</label>
                    <input type="text" name="brandName" id="brandName" placeholder="   Enter brand of car..." />
                    <label htmlFor="model">Model:</label>
                    <input type="text" name="model" id="model" placeholder="   Enter model of the brand..." />
                    <label htmlFor="year">Year:</label>
                    <input type="text" name="year" id="year" placeholder="   Enter production year..." />
                    <label htmlFor="power">power:</label>
                    <input type="text" name="power" id="power" placeholder="   Enter hps..." />
                    <label htmlFor="color">color:</label>
                    <input type="text" name="color" id="color" placeholder="   Enter color of car..." />
                    <label htmlFor="imageUrl">Image:</label>
                    <input type="file" name="imageUrl" id="imageUrl" multiple={true} placeholder="   Main image url..." />
                    {/* <label htmlFor="img1">Image 2:</label>
                    <input type="text" name="img1" id="img1" placeholder="   Image 2 url..." />
                    <label htmlFor="img2">Image 3:</label>
                    <input type="text" name="img2" id="img2" placeholder="   Image 3 url..." />
                    <label htmlFor="img3">Image 4:</label>
                    <input type="text" name="img3" id="img3" placeholder="   Image 4 url..." /> */}
                    <label htmlFor="subscription">Subscription:</label>
                    <textarea name="subscription" id="subsciption" cols="40" rows="5"></textarea>


                    <input className="btn submit" type="submit" value="Sell Car" />
                </div>
            </form>

        </section>

    )
}