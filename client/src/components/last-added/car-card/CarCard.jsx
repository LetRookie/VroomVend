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
        <div key={_id} className="card" onClick={() => navigate(`/cars/${_id}`)}>
            <img
                src={imageUrl}
                alt={`${brandName}`} />
            <div className="container">
                <h2><b>{brandName}</b></h2>
                <h4>{`${model} - ${year}`}</h4>
            </div>
        </div>
    )
}