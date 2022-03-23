import { Link } from "react-router-dom"

function Home() {
	return (
		<div class="card w-100 bg-base-200 shadow-xl">
			<div class="card-body items-center text-center">
				<div class="card-actions">
					<Link to="/new-training" class="btn btn-primary btn-block">
						<h2 class="card-title">Create a new workout</h2>
					</Link>
				</div>
			</div>
		</div>
	)
}

export default Home
