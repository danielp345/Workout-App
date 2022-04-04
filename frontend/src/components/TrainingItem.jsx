import { Link } from "react-router-dom"

function TrainingItem({ training }) {
	const { trainingName, exercises, createdAt } = training

	const date = new Date(createdAt).toLocaleDateString("en-US")

	return (
		<div className="side card compact bg-base-100 shadow-md">
			<div className="card-body items-center space-x-4">
				<Link
					to={`/training/${training._id}`}
					className="stats shadow bg-base-200"
				>
					<div className="stat place-items-center">
						<div className="stat-title">Name</div>
						<div className="stat-value mb-1">{trainingName}</div>
						<div className="stat-desc">{date}</div>
					</div>

					<div className="stat place-items-center">
						<div className="stat-title">Exercises</div>
						<div className="stat-value">{exercises.length}</div>
						<div className="stat-desc">{exercises[0].exerciseName}</div>
					</div>
				</Link>
			</div>
		</div>
	)
}

export default TrainingItem
