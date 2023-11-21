export default function SellCar() {
    const sellCarSubmitHandler = (e) => {
        e.preventDefault();

        const carData = Object.fromEntries(new FormData(e.currentTarget));
        console.log(carData);
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
                    <input type="text" name="imageUrl" id="imageUrl" placeholder="   Image url..." />

                    <input className="btn submit" type="submit" value="Sell Car" />
                </div>
            </form>

        </section>

    )
}