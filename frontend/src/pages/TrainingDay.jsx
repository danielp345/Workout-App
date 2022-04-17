import { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useParams } from "react-router-dom"
import { toast } from "react-toastify"
import {
	getTrainingDay,
	reset as resetTD,
} from "../features/trainingDays/trainingDaysSlice"
import { getTraining } from "../features/trainings/trainingsSlice"
import Spinner from "../components/Spinner"
import BackButton from "../components/BackButton"

function TrainingDay() {
	const { trainingDay, isLoading } = useSelector((state) => state.trainingDays)

	const dispatch = useDispatch()

	const { trainingId, trainingDayId } = useParams()

	useEffect(() => {
		dispatch(getTrainingDay({ trainingId, trainingDayId }))
	}, [])

	if (isLoading) {
		return <Spinner />
	}

	return (
		<>
			<BackButton url={`/training/${trainingId}`} />

			<div className="text-center">
				<h1 className="font-bold leading-tight text-5xl mt-0 mb-2">
					{trainingDay.trainingName}
				</h1>
			</div>

			{trainingDay.exercises?.map((exercise, index) => (
				<h1 key={index}>{exercise.exerciseName}</h1>
			))}
		</>
	)
}

export default TrainingDay
