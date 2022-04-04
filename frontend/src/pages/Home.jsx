import { Link } from "react-router-dom"

function Home() {
	return (
		<div className="card w-100 bg-base-200 shadow-xl">
			<div className="card-body items-center text-center">
				<div className="card-actions">
					<Link to="/new-training" className="btn btn-primary btn-block">
						<h2 className="card-title">Create a new workout</h2>
					</Link>
					<Link to="/trainings" className="btn btn-primary btn-block">
						<h2 className="card-title">My workouts</h2>
					</Link>
				</div>
			</div>
		</div>
	)
}

export default Home
