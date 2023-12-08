import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import * as authService from "../services/authService";
import Path from "../lib/paths";




const AuthContext = createContext();


export const AuthProvider = ({
    children,
}) => {
    const navigate = useNavigate();

    const [auth, setAuth] = useState(() => {

        localStorage.removeItem('accessToken')

        return {};
    });

    const loginSubmitHandler = async (values) => {

        // NEED TRY CATCH BLOCK (ERROR HANDLING) FOR UNREGISTERED USERS(GUESTS)-NOTIFICATION
        try {
            const result = await authService.login(values.email, values.password);

            if(result.hasOwnProperty('message')){
                throw new Error(result.message);
            }

            setAuth(result);
            localStorage.setItem('accessToken', result.accessToken);
            navigate(Path.Home);

        } catch (error) {
            alert(error);
        }
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
        username: auth.username || auth.email,
        email: auth.email,
        id: auth._id,
        isAuthenticated: !!auth.accessToken,
    };
    return (
        <AuthContext.Provider value={providedValues}>
            {children}
        </AuthContext.Provider>
    );
}

AuthContext.displayName = 'AuthContext';

export default AuthContext;

