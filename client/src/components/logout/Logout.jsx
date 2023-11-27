import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import * as autheService from '../../services/authService';
import Path from "../../lib/paths";
import AuthContext from "../../contexts/authContext";

export default function Logout () {

    const navigate = useNavigate()
    const {logoutHandler} = useContext(AuthContext)

    useEffect(() => {
        autheService.logout()
        .then(()=> {
            logoutHandler()
            navigate(Path.Home)
        })
        .catch(() => navigate(Path.Home))
    }, [])
    return null;
}