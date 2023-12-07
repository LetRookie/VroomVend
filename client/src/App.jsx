import { Routes, Route, useNavigate } from "react-router-dom";
import { useState } from "react";

import AuthContext from "./contexts/authContext";
import * as authService from "./services/authService";
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
import { pathToUrl } from "./utils/pathUtil";
import Pagination from "./components/pagination/Pagination";


function App() {
    const navigate = useNavigate();

    const [auth, setAuth] = useState(() => {
        localStorage.removeItem('accessToken')

        return {};
    });

    // {"email":"peter@abv.bg",
    // "username":"Peter",
    // "_id":"35c62d76-8152-4626-8712-eeb96381bea8",
    // "accessToken":"4b0f85a9bf7b55d32c61de75b33cfeb4f978982c86a5ccea726bc1289e1095cd"}

    const loginSubmitHandler = async (values) => {

        // NEED TRY CATCH BLOCK (ERROR HANDLING) FOR UNREGISTERED USERS(GUESTS)-NOTIFICATION
        const result = await authService.login(values.email, values.password);
        setAuth(result);

        localStorage.setItem('accessToken', result.accessToken);

        navigate(Path.Home);
    }

    const signupSubmitHandler = async (values) => {
        const result = await authService.signup(values.username, values.email, values.password);
        setAuth(result);

        localStorage.setItem('accessToken', result.accessToken);

        navigate(Path.Home);
    }

    const logoutHandler = () => {
        setAuth({});
        localStorage.removeItem('accessToken')
    }

    const providedValues = {
        loginSubmitHandler,
        signupSubmitHandler,
        logoutHandler,
        username: auth.username,
        email: auth.email,
        id: auth._id,
        isAuthenticated: !!auth.accessToken,
    }

    return (
        <AuthContext.Provider value={providedValues}>
            <>
                <Header />
                <Routes>
                    <Route path={Path.Home} element={<Home />} />
                    <Route path="/search" element={<Search />} />
                    <Route path="/sell" element={<SellCar />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/cars/:carId" element={<Details />} />
                    <Route path="/pagination" element={<Pagination/>} />
                    <Route path={Path.CarEdit} element={<CarEdit />} />
                    <Route path={Path.Logout} element={<Logout />} />
                </Routes>
                <Footer />
            </>
        </AuthContext.Provider>
    )
}

export default App
