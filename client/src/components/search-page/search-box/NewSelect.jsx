import { useEffect, useState } from "react";


export default function NewSelect(props) {
    const [dt, setDt] = useState([])
    useEffect(() => {
        props.data.filter((item, index) => {
            setDt(prevState => [...prevState, props.data.indexOf(item) === index])
          });
    }, [])
    return (
        <div className="formElement" >
            <label htmlFor="brandName">{props.title}</label>
            <select name="brandName" id="brandName">
                <option defaultValue=" "></option>
                {
                    dt.map((brand, index) => {
                        return <option key={index} value={brand.brandName}>{brand.brandName}</option>;
                    })}
            </select>
        </div>
    )
}