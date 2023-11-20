export default function Login() {
    return (
        <>
            <div id="login-modal" className="login-modal">

                <form className="modal-content animate" >
                    <div className="imgcontainer">
                        <span className="close" title="Close Modal">&times;</span>
                        <img src="img_avatar2.png" alt="Avatar" className="avatar" />
                    </div>

                    <div className="login-container">
                        <label htmlFor="uname"><b>Username</b></label>
                        <input type="text" placeholder="Enter Username" name="uname" required />

                        <label htmlFor="psw"><b>Password</b></label>
                        <input type="password" placeholder="Enter Password" name="psw" required />

                        <button type="submit">Login</button>
                        <div className="remember">
                        <input type="checkbox" name="remember" />
                        <label>Remember me</label>
                        </div>
                    </div>

                    <div className="login-container" >
                        <button type="button" className="cancelBtn">Cancel</button>
                        <span className="psw">Forgot <a href="#">password?</a></span>
                    </div>
                </form>
            </div>
        </>

    )
}