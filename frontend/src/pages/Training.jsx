import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useParams } from "react-router-dom"
import {
	getTrainingDays,
	reset as resetTD,
} from "../features/trainingDays/trainingDaysSlice"
import { getTraining, reset as resetT } from "../features/trainings/trainingsSlice"
import TrainingDayItem from "../components/TrainingDayItem"
import Spinner from "../components/Spinner"

function Training() {
	const { trainingDays, isLoading, isSuccess } = useSelector(
		(state) => state.trainingDays
	)

	const { training } = useSelector((state) => state.trainings)

	const dispatch = useDispatch()
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
	}, [dispatch, trainingId])

	if (isLoading) {
		return <Spinner />
	}
	return (
		<>
			<h1>{training.trainingName}</h1>
			{trainingDays.map((trainingDay) => (
				<TrainingDayItem key={trainingDay._id} trainingDay={trainingDay} />
			))}
		</>
	)
}

export default Training
