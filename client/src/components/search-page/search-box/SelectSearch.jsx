import { useEffect, useState } from 'react'

import * as carService from '../../../services/carService'
import '../search-box/search.css'

export default function SelectSearchBox({ setSearch }) {

    const [brandOptions, setBrandOptions] = useState([]);
    const [modelOptions, setModelOptions] = useState([]);
    const [yearOptions, setYearOptions] = useState([]);


    useEffect(() => {
        carService.getBrands()
            .then(result => setBrandOptions(result))
    }, []);

    async function onBrandSelect(e) {
        setSearch({
            brandName: e.target.value,
            model: '',
            year: ''
        })

        setModelOptions([]);
        setYearOptions([]);

        await carService.getModels(e.target.value)
            .then(result => {
                setModelOptions(result)
            })


        await carService.getModelYearByBrandName(e.target.value)
            .then(result => {
                setYearOptions(result)
            })


    };

    async function onModelSelect(e) {
        setYearOptions([]);
        
        // setSearch((oldState) => ({ 
        //     ...oldState, 
        //     year: '' 
        // }))

        await carService.getModelYearByModel(e.target.value)
            .then(result => {
                setYearOptions(result),
                    setSearch(oldState => ({
                        ...oldState,
                        [e.target.name]: e.target.value
                    }))
            })

        // console.log('working');
    };

    async function onYearSelect(e) {
        setSearch(oldState => ({
            ...oldState,
            [e.target.name]: e.target.value
        }))
    }

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

            <div className="formElement" >
                <label htmlFor="brandName">Choose brand:</label>
                <select name="brandName" id="brandName" onChange={onBrandSelect}>
                    <option defaultValue={''}></option>
                    {
                        brandOptions.sort((a,b)=>a.brandName.localeCompare(b.brandName)).map((brand, index) => {
                            return <option key={index} value={brand.brandName}>{brand.brandName}</option>;
                        })}
                </select>
            </div>
            <div className="formElement" >
                <label htmlFor="model">Model:</label>
                <select name="model" id="model" onChange={onModelSelect}>
                    <option defaultValue={''}></option>
                    {
                        modelOptions.sort((a,b)=>a.model.localeCompare(b.model)).map((model, index) => {
                            return <option key={index} value={model.model}>{model.model}</option>;
                        })}
                </select>
            </div>
            <div className="formElement">
                <label htmlFor="year">Year:</label>
                <select name="year" id="year" onChange={onYearSelect}>
                    <option defaultValue={''}></option>
                    {
                        yearOptions.map((year, index) => {
                            return <option key={index} value={year.year}>{year.year}</option>;
                        })}
                </select>
            </div>
        </>
    )
}