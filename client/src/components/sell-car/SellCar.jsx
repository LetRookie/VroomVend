export default function SellCar() {
    return (
        <section id="sell page" className="sell-car">
            <form className="sellForm">
                <h2>Sell your car here:</h2>
                <div className="form-wrapper">
                    <label htmlFor="brand-name">Brand:</label>
                    <input type="text" name="brand-name" id="brand-name" placeholder="   Enter brand of car..." />
                    <label htmlFor="model">Model:</label>
                    <input type="text" name="model" id="model" placeholder="   Enter model of the brand..." />
                    <label htmlFor="year">Brand:</label>
                    <input type="text" name="year" id="year" placeholder="   Enter production year..." />
                    <label htmlFor="km">Brand:</label>
                    <input type="text" name="km" id="km" placeholder="   Enter km driven..." />
                    <label htmlFor="color">Brand:</label>
                    <input type="text" name="color" id="color" placeholder="   Enter color of car..." />
                    <label htmlFor="car-image">Brand:</label>
                    <input type="text" name="car-image" id="car-image" placeholder="   Image url..." />

                    <input className="btn submit" type="submit" value="Sell Car" />
                </div>
            </form>

        </section>

    )
}