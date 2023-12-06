import { useNavigate } from 'react-router-dom';

export default function CarListItem({
    _id,
    brandName,
    model,
    year,
    power,
    color,
    imageUrl,
}) {
    const navigate = useNavigate();

    const openDetails = (id) => {
        navigate(`/cars/${id}`)
    }
    return (
        <li onClick={() => openDetails(_id)}>
            <div className="car-img">
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