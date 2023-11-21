import {Link} from 'react-router-dom';

export default function CarListItem ({
    _id,
    brandName,
    model,
    year,   
    power,
    color,
    imageUrl,
}) {
    return (
            <li>
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
              <Link to={`/cars/${_id}`} className="detailsButton">Details</Link>
            </li>
    );
}