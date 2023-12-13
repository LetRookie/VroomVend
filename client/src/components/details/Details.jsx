import { useContext, useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';

import * as carService from '../../services/carService';
import AuthContext from '../../contexts/authContext';
import { pathToUrl } from '../../utils/pathUtil';
import Path from '../../lib/paths';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import '../../assets/styles/details.css'

import { FreeMode, Navigation, Thumbs } from 'swiper/modules';



export default function Details() {
    const navigate = useNavigate();
    const { id } = useContext(AuthContext);
    const [car, setCar] = useState({});
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const { carId } = useParams();


    useEffect(() => {
        carService.getCar(carId)
            .then(setCar); // validation 
    }, [carId]);

    const isOwner = id === car._ownerId;

    const deleteButtonClickHandler = async () => {
        const hasConfirmed = confirm('Are you sure you want to delete the announcement');

        if(hasConfirmed) {

            await carService.remove(carId);
            navigate('/search');
        }
    }
    
    return (
        <div style={{'margin': '2rem 0'}}>
            <Swiper
                style={{
                    '--swiper-navigation-color': '#fff',
                    '--swiper-pagination-color': '#fff',
                }}
                spaceBetween={10}
                navigation={true}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper2"
            >
                <SwiperSlide>
                    <img src={car.imageUrl} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={car.img1} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={car.img2} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={car.img3} />
                </SwiperSlide>
            </Swiper>
            <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={car.imageUrl} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={car.img1} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={car.img2} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={car.img3} />
                </SwiperSlide>
            </Swiper>
            <div className="details">
                <h3>{`${car.brandName}-${car.model}-${car.year}`}</h3>
                <h4>{`${car.power}  -  ${car.color}`}</h4>
                <p>{car.subscription}</p>

                {isOwner && (
                    <div className="update-details">
                        <Link to={pathToUrl(Path.CarEdit, { carId })}><button>Edit</button></Link>
                        {/* <Link to={pathToUrl(Path.CarDelete,{carId})}><button>Delete</button></Link> */}
                        <button onClick={deleteButtonClickHandler}>Delete</button>
                    </div>
                )}
            </div>
        </div>
    )
}


// const oldElement = (
//     <div className="details-wrapper">

//             <div className="big-screen">
//                 <img src={car.imageUrl} alt={car.model} />
//             </div>
//             <div className="img-slide">
//                 <img src={car.imageUrl} alt={car.model} />
//                 <img src={car.img1} alt={car.model} />
//                 <img src={car.img2} alt={car.model} />
//                 <img src={car.img3} alt={car.model} />
//             </div>
//             <div className="details">
//                 <h3>{`${car.brandName}-${car.model}-${car.year}`}</h3>
//                 <h4>{`${car.power},${car.color}`}</h4>
//                 <p>{car.subscription}</p>
//                 <div className="update-details">
//                     <button>Edit</button>
//                     <button>Delete</button>
//                 </div>
//             </div>
//         </div>
// )