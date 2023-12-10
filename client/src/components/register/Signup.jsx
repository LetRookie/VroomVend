import { useContext } from "react"
import AuthContext from "../../contexts/authContext"
import useForm from "../../hooks/useForm";


const SignupFormKeys = {
	Username: 'username',
	Email: 'email',
	Password: 'password',
	ConfirmPass: 'confirmPass'
}

export default function Signup() {

	const {signupSubmitHandler} = useContext(AuthContext);
	const {values, onChange, onSubmit, errMsg} = useForm(signupSubmitHandler, {
		[SignupFormKeys.Username] : '',
		[SignupFormKeys.Email] : '',
		[SignupFormKeys.Password] : '',
		[SignupFormKeys.ConfirmPass] : ''
	}, validation)

	function validation (){
		
		let msg = '';
		let emailRgx = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,6}$/gm;
		let passRgx = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/gm;

		if(values[SignupFormKeys.Username].length < 2){
			msg = '*Username must contain at least 2 characters!*'
		}else if (!values[SignupFormKeys.Email].match(emailRgx)){
			msg = '*Please enter valid email!*'
		}else if (!values[SignupFormKeys.Password].match(passRgx)){
			msg = '*Password must contain at least 8 characters (at least one uppercase, lowercase and number)!*'
		}else if (values[SignupFormKeys.Password] !== values[SignupFormKeys.ConfirmPass]){
			msg = '*Password must be equal*'
		}

		return msg;
	}
	return (
		<div className="wrapper">
			<div className="inner">
				<div className="image-holder">
					<img src="https://images.unsplash.com/photo-1542282088-fe8426682b8f?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
				</div>
				<form onSubmit={onSubmit}>
					<h3>Registration Form</h3>
					<div className="form-wrapper">
						<input 
						type="text" 
						placeholder="Username" 
						name="username" 
						className="form-control" 
						onChange={onChange}
						value={values[SignupFormKeys.Username]}
						/>
						<i className="zmdi zmdi-account"></i>
					</div>
					<div className="form-wrapper">
						<input 
						type="text" 
						placeholder="Email Address" 
						name='email' 
						className="form-control" 
						onChange={onChange}
						value={values[SignupFormKeys.Email]}
						/>
						<i className="zmdi zmdi-email"></i>
					</div>
					<div className="form-wrapper">
						<input 
						type="password" 
						placeholder="Password" 
						name="password" 
						className="form-control" 
						onChange={onChange}
						value={values[SignupFormKeys.Password]}
						/>
						<i className="zmdi zmdi-lock"></i>
					</div>
					<div className="form-wrapper">
						<input 
						type="password" 
						placeholder="Confirm Password" 
						name="confirmPass" 
						className="form-control" 
						onChange={onChange}
						value={values[SignupFormKeys.ConfirmPass]}
						/>
						<i className="zmdi zmdi-lock"></i>
					</div>
					<p className="error-msg">{errMsg}</p>
					<button type="submit">Register
						<i className="zmdi zmdi-arrow-right"></i>
					</button>
				</form>
			</div>
		</div>
	)
}








// const navigate = useNavigate();

// const [regFrom, setRegForm] = useState({
// 	username: '',
// 	email: '',
// 	password: '',
// 	confirmPass: ''
// })

// const handleOnChange = (e) => {
// 	setRegForm(prevState => ({
// 		...prevState,
// 		[e.target.name]: e.target.value
// 	}))
// }

// const submitHandler = async (e) => {
// 	e.preventDefault();

// 	const response = await fetch('http://localhost:3030/users/register', {
// 		method: 'POST',
// 		headers: {
// 			'Content-Type': 'application/json'
// 		},
// 		body: JSON.stringify({
// 			username: regFrom.username,
// 			email: regFrom.email,
// 			password: regFrom.password
// 		})
// 	})
// 	const result = await response.json();

// 	navigate(Path.Home);
	
// }