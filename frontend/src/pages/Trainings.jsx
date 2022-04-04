import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { getTrainings, reset } from "../features/trainings/trainingsSlice"
import TrainingItem from "../components/TrainingItem"
import Spinner from "../components/Spinner"

function Trainings() {
	const { trainings, isLoading, isSuccess } = useSelector(
		(state) => state.trainings
	)

    const trainingsInOrder = [...trainings].reverse()

	const dispatch = useDispatch()

	useEffect(() => {
		return () => {
			if (isSuccess) {
				dispatch(reset())
			}
		}
	}, [dispatch, isSuccess])

	useEffect(() => {
		dispatch(getTrainings())
	}, [dispatch])

	if (isLoading) {
		return <Spinner />
	}
	return (
		<>  
			{trainingsInOrder.map((training) => (
				<TrainingItem key={training._id} training={training} />
			))}
		</>
	)
}

export default Trainings
