export default function CarListItem ({
    brandName,
    model,
    year,   
    power,
    color,
    imageUrl,
    _id
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
                    <a href="#" className="detailsButton">Details</a>
                </div>
            </li>
    );
}