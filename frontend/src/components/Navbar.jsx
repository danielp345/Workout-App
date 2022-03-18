import { FaDumbbell, FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa"
import { Link } from "react-router-dom"

function Navbar() {
	return (
		<nav className="navbar mb-12 shadow-lg bg-neutral text-neutral-content">
			<div className="container mx-auto">
				<div className="flex-1 px-2 mx-2">
					<Link to="/">
						<FaDumbbell className="inline mr-3 text-4xl" />
					</Link>
				</div>
				<div className="flex-none">
					<Link to="/login" className="btn">
						<FaUser className="inline mr-2 text-2xl" />
						Login
					</Link>
					<Link to="/register" className="btn">
						<FaSignInAlt className="inline mr-2 text-2xl" />
						Register
					</Link>
				</div>
			</div>
		</nav>
	)
}

export default Navbar
