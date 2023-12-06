import { useContext, useEffect, useState } from 'react'

import * as carService from '../../../services/carService'
import '../search-box/search.css'

export default function SelectSearchBox({ setSearch, searchVal }) {

    const [brandOptions, setBrandOptions] = useState([]);
    const [modelOptions, setModelOptions] = useState([]);
    const [yearOptions, setYearOptions] = useState([]);

    const [brandValue, setBrandValue] = useState('');
    const [modelValue, setModelValue] = useState('');
    const [yearValue, setYearValue] = useState('');



    useEffect(() => {
        carService.getBrands()
            .then(result => setBrandOptions(result))
    }, []);

    async function onBrandSelect(e) {
        await carService.getModels(e.target.value)
            .then(result => {
                setModelOptions(result)
            })


        await carService.getModelYearByBrandName(e.target.value)
            .then(result => {
                setYearOptions(result)
            })

            setSearch({
                brandName: e.target.value,
                model: '',
                year: ''
            })
        // console.log('working');
    };

    async function onModelSelect(e) {

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
                    <option selected="true"></option>
                    {
                        brandOptions.map((brand, index) => {
                            return <option key={index} value={brand.brandName}>{brand.brandName}</option>;
                        })}
                </select>
            </div>
            <div className="formElement" >
                <label htmlFor="model">Model:</label>
                <select name="model" id="model" onChange={onModelSelect}>
                    <option selected="true">{searchVal?.model}</option>
                    {
                        modelOptions.map((model, index) => {
                            return <option key={index} value={model.model}>{model.model}</option>;
                        })}
                </select>
            </div>
            <div className="formElement">
                <label htmlFor="year">Year:</label>
                <select name="year" id="year" onChange={onYearSelect}>
                    <option selected="true">{searchVal?.year}</option>
                    {
                        yearOptions.map((year, index) => {
                            return <option key={index} value={year.year}>{year.year}</option>;
                        })}
                </select>
            </div>
        </>
    )
}