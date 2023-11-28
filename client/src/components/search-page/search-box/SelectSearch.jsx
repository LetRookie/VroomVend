import '../search-box/search.css'

export default function SelectSearchBox() {
    return (
        <>
            <form className="search-box">
                <div className="formElement">
                    <label htmlFor="brandName">Choose brand:</label>
                    <select name="brandName" id="brandName">
                        <option value="volvo">Volvo</option>
                        <option value="saab">Saab</option>
                        <option value="opel">Opel</option>
                        <option value="audi">Audi</option>
                    </select>
                </div>
                <div className="formElement">
                    <label htmlFor="modelName">Model:</label>
                    <select name="modelName" id="modelName">
                        <option value="volvo">Volvo</option>
                        <option value="saab">Saab</option>
                        <option value="opel">Opel</option>
                        <option value="audi">Audi</option>
                    </select>
                </div>
                <div className="formElement">
                    <label htmlFor="year">Year:</label>
                    <select name="year" id="year">
                        <option value="volvo">Volvo</option>
                        <option value="saab">Saab</option>
                        <option value="opel">Opel</option>
                        <option value="audi">Audi</option>
                    </select>
                </div>

                <input type="submit" value="Search" />
            </form>
        </>
    )
}