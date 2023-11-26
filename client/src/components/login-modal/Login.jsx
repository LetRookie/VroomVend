import useForm from "../../hooks/useForm"


export default function Login() {
    
    const { values, onChange, onSubmit } = useForm({
        email: '',
        password: '',
    });


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
                            name="email"
                            onChange={onChange}
                            value={values.email}
                        />

                        <label htmlFor="password"><b>Password</b></label>
                        <input
                            type="password"
                            placeholder="Enter Password"
                            name="password"
                            onChange={onChange}
                            value={values.password}
                        />

                        <button type="submit">Login</button>
                        <div className="remember">
                        </div>
                    </div>

                    <div className="login-container" >
                        <span className="psw">Create account <a href="#">here!</a></span>
                        <button type="button" className="cancelBtn">Cancel</button>
                    </div>
                </form>
            </div>
        </>

    )
}