import {useNavigate} from 'react-router-dom';

export default function CarCard({
    brandName,
    model,
    year,
    imageUrl,
    _id
}) {

    const navigate = useNavigate();
    return (
        <div className="card" onClick={() => navigate(`/cars/${_id}`)}>
            <img
                src={imageUrl}
                alt={`${brandName}`} />
            <div className="container">
                <h4><b>{brandName}</b></h4>
                <p>{`${model} - ${year}`}</p>
            </div>
        </div>
    )
}