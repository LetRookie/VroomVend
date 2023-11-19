export default function Header (){
    return(
        <>
        <nav className="navbar">

        <div className="logo"><img src="/vroom-logo.svg" alt="" /></div>
    

        <ul className="nav-links">
    

          <div className="menu">
    
            <li><a href="/">Home</a></li>
            <li><a href="/">Buy</a></li>
            <li><a href="/">Login</a></li>
            <li><a href="/reg-form.html">Sign up</a></li>
          </div>
        </ul>
      </nav>
    

      <div className="parallax">
        <p>Pick the car which suits you best</p>
      </div>
    </>
    )
}