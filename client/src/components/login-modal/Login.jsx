import { useContext } from "react";
import { Link } from "react-router-dom";
import useForm from "../../hooks/useForm"
import AuthContext from "../../contexts/authContext";
import Path from "../../lib/paths";

const loginFormKeys = {
    email: 'email',
    password: 'password'
}

export default function Login() {

    const { loginSubmitHandler } = useContext(AuthContext);
    
    const { values, onChange, onSubmit, errMsg } = useForm(loginSubmitHandler, {
        [loginFormKeys.email]: '',
        [loginFormKeys.password]: '',
    }, validation);

    function validation () {
		
		let msg = '';
		
		 if (!values[loginFormKeys.email]){
			msg = 'Please enter email!'
		}else if (!values[loginFormKeys.password]){
			msg = 'Please enter password!'
		}

		return msg;
	}

    
    return (
        <>
            <div id="login-modal" className="login-modal">

                <form className="modal-content animate" onSubmit={onSubmit}>
                    <div className="imgcontainer">
                        <span className="close" title="Close Modal">&times;</span>
                    </div>

                    <div className="login-container">
                        <label htmlFor="email"><b>E-mail</b></label>
                        <input
                            type="text"
                            placeholder="Enter email"
                            name={loginFormKeys.email}
                            onChange={onChange}
                            value={values[loginFormKeys.email]}
                        />

                        <label htmlFor="password"><b>Password</b></label>
                        <input
                            type="password"
                            placeholder="Enter Password"
                            name={loginFormKeys.password}
                            onChange={onChange}
                            value={values[loginFormKeys.password]}
                        />
                        <p className="error-msg">{errMsg && `*${errMsg}*`}</p>

                        <button type="submit">Login</button>
                        <div className="remember">
                        </div>
                    </div>

                    <div className="login-container" >
                        <span className="psw">Create account <Link to="/signup">here!</Link></span>
                        <button type="button" className="cancelBtn"><Link to={Path.Home}>Cancel</Link></button>
                    </div>
                </form>
            </div>
        </>

    )
}