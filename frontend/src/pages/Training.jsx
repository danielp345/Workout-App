import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useParams, useNavigate} from "react-router-dom"
import {
	createTrainingDay,
	getTrainingDays,
	reset as resetTD,
} from "../features/trainingDays/trainingDaysSlice"
import {
	getTraining,
	reset as resetT,
} from "../features/trainings/trainingsSlice"
import TrainingDayItem from "../components/TrainingDayItem"
import Spinner from "../components/Spinner"

function Training() {
	const { trainingDays, isLoading, isSuccess } = useSelector(
		(state) => state.trainingDays
	)

	const { training } = useSelector((state) => state.trainings)

	const dispatch = useDispatch()
	const navigate = useNavigate()
	const { trainingId } = useParams()
		
	useEffect(() => {
		return () => {
			if (isSuccess) {
				dispatch(resetTD())
				dispatch(resetT())
			}
		}
	}, [dispatch, isSuccess])

	useEffect(() => {
		dispatch(getTrainingDays(trainingId))
		dispatch(getTraining(trainingId))
		// console.log(trainingId)
	}, [dispatch, trainingId])


	const onClickCreateTD = () => {
		dispatch(createTrainingDay(trainingId))
		navigate('/')
		// console.log(trainingId)
	}


	if (isLoading) {
		return <Spinner />
	}
	return (
		<>
			<div className="text-center">
				<h1 className="font-bold leading-tight text-5xl mt-0 mb-2">
					{training.trainingName}
				</h1>
			</div>

			<div className="side card compact bg-base-100 shadow-md">
				<div className="card-body items-center space-x-4">
					<button className="btn btn-primary" onClick={onClickCreateTD}>
						<h2 className="card-title">Add new training day</h2>
					</button>
				</div>
			</div>

			{trainingDays.map((trainingDay) => (
				<TrainingDayItem key={trainingDay._id} trainingDay={trainingDay} />
			))}
		</>
	)
}

export default Training
