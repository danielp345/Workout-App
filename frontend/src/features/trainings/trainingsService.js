import axios from "axios"

const API_URL = "/api/trainings/"

// Create new training
const createTraining = async (trainingData, token) => {
	const config = {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	}

	const response = await axios.post(API_URL, trainingData, config)

	return response.data
}

// Get user trainings
const getTrainings = async (token) => {
	const config = {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	}

	const response = await axios.get(API_URL, config)

	return response.data
}

// Get single training
const getTraining = async (trainingId, token) => {
	const config = {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	}

	const response = await axios.get(API_URL + trainingId, config)

	return response.data
}

const trainingsService = {
	createTraining,
	getTrainings,
	getTraining,
}

export default trainingsService
