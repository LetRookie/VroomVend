export default function CarCard({
    _id,
    brandName,
    model,
    year,
    imageUrl
}) {
    return (
        <div className="card">
            <img
                src={imageUrl}
                alt={`${brandName}`} />
            <div className="container">
                <h4><b>{brandName}</b></h4>
                <p>{`${model}${year}`}</p>
            </div>
        </div>
    )
}