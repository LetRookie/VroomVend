import { useEffect, useState } from "react";

import * as carService from '../../services/carService';
import CarCard from "./car-card/CarCard";

export default function LastAdded() {

  const [lastAdded, setLastAdded] = useState([]);
  

  useEffect(() => {
    carService.getAll()
      .then(result => setLastAdded(result));
  }, []);

  return (
    <div className="recently-added">

      <h3>Lately Offered Cars</h3>

      <div className="card-list">
        {lastAdded.reverse().slice(0, 3).map(lastCar => (
          <CarCard { ...lastCar}/>
        ))}

        {!lastAdded.length && (
          <h2>No cars offered yet</h2>
        )}
      </div>

    </div>
  )
}