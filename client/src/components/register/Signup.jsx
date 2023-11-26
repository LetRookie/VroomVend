import { useState } from "react"

export default function Signup() {
	const [regFrom, setRegForm] = useState({
		username: '',
		email: '',
		password: '',
		confirmPass: ''
	})

	const handleOnChange = (e) => {
		setRegForm(prevState => ({
			...prevState,
			[e.target.name]: e.target.value
		}))
	}

	const submitHandler = async (e) => {
		e.preventDefault();

		const response = await fetch('http://localhost:3030/users/register', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				username: regFrom.username,
				email: regFrom.email,
				password: regFrom.password
			})
		})
		const result = await response.json();

		console.log(result);
	}

	return (
		<div className="wrapper">
			<div className="inner">
				<div className="image-holder">
					<img src="https://images.unsplash.com/photo-1542282088-fe8426682b8f?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
				</div>
				<form onSubmit={submitHandler}>
					<h3>Registration Form</h3>
					<div className="form-wrapper">
						<input type="text" placeholder="Username" name="username" className="form-control" value={regFrom.username} onChange={handleOnChange} />
						<i className="zmdi zmdi-account"></i>
					</div>
					<div className="form-wrapper">
						<input type="text" placeholder="Email Address" name='email' className="form-control" value={regFrom.email} onChange={handleOnChange} />
						<i className="zmdi zmdi-email"></i>
					</div>
					<div className="form-wrapper">
						<input type="password" placeholder="Password" name="password" className="form-control" value={regFrom.password} onChange={handleOnChange} />
						<i className="zmdi zmdi-lock"></i>
					</div>
					<div className="form-wrapper">
						<input type="password" placeholder="Confirm Password" name="confirmPass" className="form-control" value={regFrom.confirmPass} onChange={handleOnChange} />
						<i className="zmdi zmdi-lock"></i>
					</div>
					<button type="submit">Register
						<i className="zmdi zmdi-arrow-right"></i>
					</button>
				</form>
			</div>
		</div>
	)
}