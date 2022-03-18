function Login() {
	return (
		<div className="form-control card rounded-box  w-full bg-base-200 text-center p-3 px-5 pb-10">
			<div className="card-body items-center text-center">
				<p className="text-3xl font-bold m-5">Login</p>

				<div>
					<label className="input-group">
						<span className="w-60">Email</span>
						<input
							type="email"
							placeholder="Put your email"
							className="input"
						/>
					</label>
				</div>
				<br />
				<div>
					<label className="input-group">
						<span className="w-60">Password</span>
						<input
							type="password"
							placeholder="Put your password"
							className="input"
						/>
					</label>
				</div>
			</div>
		</div>
	)
}

export default Login
