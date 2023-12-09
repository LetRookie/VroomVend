import { useNavigate } from "react-router-dom";

export default function Cars({
    _id,
    brandName,
    model,
    year,
    power,
    color,
    imageUrl
}) {
    const navigate = useNavigate();

    return (
        <li onClick={() => navigate(`/cars/${_id}`)}>
            <div className="car-img" >
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