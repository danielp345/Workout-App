import { useParams, Link } from "react-router-dom"

function TrainingDayItem({ trainingDay }) {

	const params = useParams()

	const createdDate = new Date(trainingDay.createdAt)
	const currentDate = new Date(Date.now())
	const differenceInDays = ((currentDate.getTime() - createdDate.getTime()) / (1000 * 3600 * 24)).toFixed(0)

	return (
		<div className="side card compact bg-base-100 shadow-md">
			<div className="card-body items-center space-x-4">
				<Link
					to={`/training/${params.trainingId}/${trainingDay._id}`}
					className="stats shadow bg-base-200"
				>
					<div className="stat place-items-center">
						<div className="stat-title">Date</div>
						<div className="stat-value mb-1">{differenceInDays} ago</div>
						<div className="stat-desc"></div>
					</div>

					<div className="stat place-items-center">
						<div className="stat-title">Volume</div>
						<div className="stat-value">0</div>
						<div className="stat-desc"></div>
					</div>
				</Link>
			</div>
		</div>
	)
}

export default TrainingDayItem
