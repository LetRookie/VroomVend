import { Link } from "react-router-dom";

export default function Header (){
    return(
        <>
        <nav className="navbar">

        <div className="logo"><img src="/vroom-logo.svg" alt="" /></div>
    

        <ul className="nav-links">
    

          <div className="menu">
    
            <li><Link to="/">Home</Link></li>
            <li><Link to="/search">Buy</Link></li>
            <li><Link to="/">Sell</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/logout">Logout</Link></li>
            <li><Link to="/sign-up">Sign up</Link></li>
          </div>
        </ul>
      </nav>
    


    </>
    )
}