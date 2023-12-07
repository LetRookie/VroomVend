import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../contexts/authContext";
import Path from "../../lib/paths";

export default function Header() {
    const {
        username,
        isAuthenticated
    } = useContext(AuthContext)

    return (
        <>
            <nav className="navbar">

                <div className="logo"><img src="/vroom-logo.svg" alt="" /></div>


                <ul className="nav-links">


                    <div className="menu">

                        <li><Link to={Path.Home}>Home</Link></li>

                        {isAuthenticated && (
                            <>
                            <li><Link to="/search">Buy</Link></li>
                            <li><Link to="/sell">Sell</Link></li>
                            <li><Link to="/logout">Logout</Link></li>
                            <li>Welcome <b>{username}!</b></li>
                            </>
                        )}

                        {!isAuthenticated && (
                            <>
                            <li><Link to="/search">Buy</Link></li>
                            <li><Link to="/login">Login</Link></li>
                            <li><Link to="/pagination">Pagination</Link></li>
                            <li><Link to="/signup">Sign up</Link></li>
                            </>
                        )}

                    </div>
                </ul>
            </nav>



        </>
    )
}