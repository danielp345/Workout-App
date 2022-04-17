import axios from "axios"

const API_URL = "/api/trainings/"

// Create new training day
const createTrainingDay = async (trainingId, token) => {
	const config = {
		headers: {
			Authorization: `Bearer ${token}`
		}
	}

	const response = await axios.post(
		API_URL + trainingId + '/training-days',
		{},
		config
	)

	return response.data
}


// Get all training days of training
const getTrainingDays = async (trainingId, token) => {
	const config = {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	}

	const response = await axios.get(
		API_URL + trainingId + "/training-days",
		config
	)

	return response.data
}

// Get one training day of training
const getTrainingDay = async (trainingId, trainingDayId, token) => {
	const config = {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	}

	const response = await axios.get(
		API_URL + trainingId + "/training-days/" + trainingDayId,
		config
	)

	return response.data
}

const trainingDaysService = {
	createTrainingDay,
	getTrainingDays,
	getTrainingDay,
}

export default trainingDaysService
