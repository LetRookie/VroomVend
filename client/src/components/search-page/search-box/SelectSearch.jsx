import { useEffect, useState } from 'react'

import * as carService from '../../../services/carService'
import '../search-box/search.css'

export default function SelectSearchBox() {
    const [brandOptions, setBrandOptions] = useState([]);
    const [modelOptions, setModelOptions] = useState([]);

    useEffect(() => {
        carService.getBrands()
            .then(result => setBrandOptions(result))

    }, []);

    async function onBrandSelect (e) {

        await carService.getModels(e.target.value)
            .then(result => setModelOptions(result))

        console.log('working');
    };

    // let uniqueNames = {};

    // const filteredArray = brandOptions.filter(obj => {
    //     const name = obj.brandName;
    //     if (!uniqueNames[name]) {
    //         uniqueNames[name] = true;
    //         return true;
    //     }
    //     return false;
    // });



    return (
        <>
            <form className="search-box">
                <div className="formElement" >
                    <label htmlFor="brandName">Choose brand:</label>
                    <select name="brandName" id="brandName" onChange={onBrandSelect}>
                        {
                            brandOptions.map((brand, index) => {
                                return <option key={index} value={brand.brandName} >{brand.brandName}</option>;
                            })}
                    </select>
                </div>
                <div className="formElement" >
                    <label htmlFor="modelName">Model:</label>
                    <select name="modelName" id="modelName" >
                        {
                            modelOptions.map((model, index) => {
                                return <option key={index} value={model.model} onSelect={onBrandSelect}>{model.model}</option>;
                            })}
                    </select>
                </div>
                <div className="formElement">
                    <label htmlFor="year">Year:</label>
                    <select name="year" id="year" >
                    </select>
                </div>

                <input type="submit" value="Search" />
            </form>
        </>
    )
}