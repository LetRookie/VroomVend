export default function Signup(){
    return (
        <div className="wrapper">
			<div className="inner">
				<div className="image-holder">
					<img src="https://images.unsplash.com/photo-1542282088-fe8426682b8f?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
				</div>
				<form action="">
					<h3>Registration Form</h3>
					<div className="form-group">
						<input type="text" placeholder="First Name" className="form-control" />
						<input type="text" placeholder="Last Name" className="form-control" />
					</div>
					<div className="form-wrapper">
						<input type="text" placeholder="Username" className="form-control" />
						<i className="zmdi zmdi-account"></i>
					</div>
					<div className="form-wrapper">
						<input type="text" placeholder="Email Address" className="form-control" />
						<i className="zmdi zmdi-email"></i>
					</div>
					<div className="form-wrapper">
						<select name="" id="" className="form-control">
							<option defaultValue="" >Gender</option>
							<option defaultValue="male">Male</option>
							<option defaultValue="femal">Female</option>
							<option defaultValue="other">Other</option>
						</select>
						<i className="zmdi zmdi-caret-down"></i>
					</div>
					<div className="form-wrapper">
						<input type="password" placeholder="Password" className="form-control" />
						<i className="zmdi zmdi-lock"></i>
					</div>
					<div className="form-wrapper">
						<input type="password" placeholder="Confirm Password" className="form-control" />
						<i className="zmdi zmdi-lock"></i>
					</div>
					<button>Register
						<i className="zmdi zmdi-arrow-right"></i>
					</button>
				</form>
			</div>
		</div>
    )
}