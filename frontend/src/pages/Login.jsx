import { useState, useEffect } from "react"
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { login, reset } from "../features/auth/authSlice"
import Spinner from "../components/Spinner"

function Login() {
	const [formData, setFormData] = useState({
		email: "",
		password: "",
	})

	const { email, password } = formData

	const dispatch = useDispatch()
	const navigate = useNavigate()

	const { user, isLoading, isError, isSuccess, message } = useSelector(
		(state) => state.auth
	)

	useEffect(() => {
		if (isError) {
			toast.error(message)
		}

		// Redirect when logged in
		if (isSuccess || user) {
			navigate("/")
		}

		dispatch(reset())
	}, [isError, isSuccess, user, message, navigate, dispatch])

	const onChange = (e) => {
		setFormData((prevState) => ({
			...prevState,
			[e.target.name]: e.target.value,
		}))
	}

	const onSubmit = (e) => {
		e.preventDefault()

		const userData = {
			email,
			password,
		}

		dispatch(login(userData))
	}

	if (isLoading) {
		return <Spinner />
	}

	return (
		<form
			className="form-control card rounded-box  w-full bg-base-200 text-center p-3 px-5 pb-10"
			onSubmit={onSubmit}
		>
			<div className="card-body items-center text-center">
				<p className="text-3xl font-bold m-5">Login</p>

				<div>
					<label className="input-group">
						<span>Email</span>
						<input
							id="email"
							name="email"
							onChange={onChange}
							type="email"
							placeholder="Put your email"
							className="input"
							required
						/>
					</label>
				</div>
				<br />
				<div>
					<label className="input-group">
						<span>Password</span>
						<input
							id="password"
							name="password"
							onChange={onChange}
							type="password"
							placeholder="Put your password"
							className="input"
							required
						/>
					</label>
				</div>
			</div>

			<button className="btn btn-block">Submit</button>
		</form>
	)
}

export default Login
