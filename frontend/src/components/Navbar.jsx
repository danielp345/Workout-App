import { FaDumbbell, FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa"
import { useNavigate, Link } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { logout, reset } from "../features/auth/authSlice"

function Navbar() {
	const navigate = useNavigate()
	const dispatch = useDispatch()
	const { user } = useSelector((state) => state.auth)

	const onLogout = () => {
		dispatch(logout())
		dispatch(reset())
		navigate("/home")
	}

	return (
		<nav className="navbar mb-12 shadow-lg bg-neutral text-neutral-content">
			<div className="container mx-auto">
				<div className="flex-1 px-2 mx-2">
					<Link to="/home">
						<FaDumbbell className="inline mr-3 text-4xl" />
					</Link>
				</div>
				<div className="flex-none">
					{user ? (
						<button onClick={onLogout} className="btn">
							<FaSignOutAlt className="inline mr-2 text-2xl" />
							Logout
						</button>
					) : (
						<>
							<Link to="/login" className="btn">
								<FaUser className="inline mr-2 text-2xl" />
								Login
							</Link>
							<Link to="/register" className="btn">
								<FaSignInAlt className="inline mr-2 text-2xl" />
								Register
							</Link>
						</>
					)}
				</div>
			</div>
		</nav>
	)
}

export default Navbar
