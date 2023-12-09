import { Routes, Route } from "react-router-dom";

import { AuthProvider } from "./contexts/authContext";
import Path from "./lib/paths";
import './assets/styles/styles.css';

import Header from "./components/header/Header"
import Home from "./components/home/Home"
import Footer from "./components/footer/Footer"
import Search from "./components/search-page/Search"
import SellCar from "./components/sell-car/SellCar"
import Login from "./components/login-modal/Login"
import Logout from "./components/logout/Logout";
import Signup from "./components/register/Signup"
import Details from "./components/details/Details"
import CarEdit from "./components/car-edit/CarEdit";
import Pagination from "./components/pagination/Pagination";
import MyOffers from "./components/header/my-offers/MyOffers";


function App() {


    return (
        <AuthProvider>
            <>
                <Header />
                <Routes>
                    <Route path={Path.Home} element={<Home />} />
                    <Route path="/search" element={<Search />} />
                    <Route path="/sell" element={<SellCar />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/cars/:carId" element={<Details />} />
                    <Route path={Path.CarEdit} element={<CarEdit />} />
                    <Route path={Path.Logout} element={<Logout />} />
                    <Route path='/pagination' element={<Pagination />} />
                    <Route path="/my-offers" element={<MyOffers />} />
                </Routes>
                <Footer />
            </>
        </AuthProvider>
    )
}

export default App
