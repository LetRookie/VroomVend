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
import MyOffers from "./components/header/my-offers/MyOffers";
import ErrorBoundary from "./components/ErrorBoundary";
import AuthGuard from "./components/guards/AuthGuard";


function App() {


    return (
        <ErrorBoundary>
            <AuthProvider>
                <>
                    <Header />
                    <Routes>
                        {/* visible routes */}
                        <Route path={Path.Home} element={<Home />} />
                        <Route path={Path.Search} element={<Search />} />
                        <Route path={Path.Login} element={<Login />} />
                        <Route path={Path.Signup} element={<Signup />} />

                        {/* protected routes */}
                        <Route element={<AuthGuard />}>
                            <Route path={Path.SellCar} element={<SellCar />} />
                            <Route path={Path.Details} element={<Details />} />
                            <Route path={Path.CarEdit} element={<CarEdit />} />
                            <Route path={Path.Logout} element={<Logout />} />
                            <Route path={Path.MyOffers} element={<MyOffers />} />
                        </Route>
                    </Routes>
                    <Footer />
                </>
            </AuthProvider>
        </ErrorBoundary>
    )
}

export default App
