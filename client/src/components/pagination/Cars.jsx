import { useNavigate } from "react-router-dom";

export default function Cars({
    brandName,
    model,
    year,
    power,
    color,
    imageUrl,
    loading
}) {

    if(loading) {
        return(
            <p style={{color: "#ff6600"}}>Cars are loading...</p>
        )
    }


    const navigate = useNavigate();

    const openDetails = (id) => {
        navigate(`/cars/${id}`)
    }
    return (
        <li>
            <div className="car-img" onClick={openDetails}>
                <img src={imageUrl} alt="car-image" />
            </div>
            <div className="subscription">
                <p>{brandName}</p>
                <p>{model}</p>
                <p>{year}</p>
                <p>{power}</p>
                <p>{color}</p>
            </div>
            <a className="detailsButton">Details</a>
        </li>
    );
}