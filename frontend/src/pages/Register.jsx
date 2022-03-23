import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { toast } from "react-toastify"
import { register, reset } from "../features/auth/authSlice"
import Spinner from "../components/Spinner"

function Register() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		password: "",
		password2: "",
	})

	const { name, email, password, password2 } = formData

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
		if (isSuccess) {
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

		if (password !== password2) {
			toast.error("The passwords are different")
		} else {
			const userData = {
				name,
				email,
				password,
			}

			dispatch(register(userData))
		}
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
				<p className="text-3xl font-bold ">Register</p>
				<p className="m-3">Create an account</p>

				<div>
					<label className="input-group">
						<span>Name</span>
						<input
							id="name"
							name="name"
							type="text"
							onChange={onChange}
							placeholder="Put your name"
							className="input"
							required
						/>
					</label>
				</div>
				<br />
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
				<br />
				<div>
					<label className="input-group">
						<span>Confirm password</span>
						<input
							id="password2"
							name="password2"
							onChange={onChange}
							type="password"
							placeholder="Confirm your password"
							className="input"
							required
						/>
					</label>
				</div>
			</div>

			<button className="btn">Submit</button>
		</form>
	)
}

export default Register
