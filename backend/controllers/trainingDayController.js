const asyncHandler = require("express-async-handler")

const User = require("../models/userModel")
const Training = require("../models/trainingModel")
const TrainingDay = require("../models/trainingDayModel")

// @desc     Create a new training day
// @route    POST /api/trainings/:id
// @access   Private
const createTrainingDay = asyncHandler(async (req, res) => {
	const user = await User.findById(req.user.id)

	if (!user) {
		res.status(401)
		throw new Error("User not found")
	}

	const training = await Training.findById(req.params.trainingId)

	if (training.user.toString() !== req.user.id) {
		res.status(401)
		throw new Error("User not authorized")
	}

	const trainingDays = await TrainingDay.find({ training: req.params.trainingId })

	let lastTrainingDay = trainingDays[trainingDays.length - 1]

	let exercises

	if(trainingDays.length > 0) {
		exercises = [...lastTrainingDay.exercises]
	} else {
		exercises = [...training.exercises]
	}


	const trainingDay = await TrainingDay.create({
		exercises: exercises,
		training: req.params.trainingId,
		trainingName: training.trainingName,
		user: req.user.id
	})

	res.status(201).json(trainingDay)
})

// @desc	Get training trainingDay
// @route	GET /api/trainings/:idT/:idTD
// @access  Private
const getTrainingDay = asyncHandler(async (req, res) => {
	// Get user and training using the id in the JWT
	const user = await User.findById(req.user.id)

	if (!user) {
		res.status(400)
		throw new Error("User not found")
	}

	const training = await Training.findById(req.params.trainingId)

	if (!training) {
		res.status(401)
		throw new Error("Training not found")
	}

	const trainingDay = await TrainingDay.findById(req.params.idTD)

	if (!trainingDay) {
		res.status(401)
		throw new Error("Training Day not found")
	}

	if (
		training.user.toString() !== req.user.id ||
		trainingDay.user.toString() !== req.user.id ||
		training.id !== trainingDay.training.toString()
	) {
		res.status(401)
		throw new Error("Not authorized")
	}
		res.status(200).json(trainingDay)
})

// @desc	Get training trainingDays
// @route	GET /api/trainings/:id
// @access  Private
const getTrainingDays = asyncHandler(async (req, res) => {
	// Get user and training using the id in the JWT
	const user = await User.findById(req.user.id)
	const training = await Training.findById(req.params.trainingId)

	if (!user) {
		res.status(400)
		throw new Error("User not found")
	}

	if (!training) {
		res.status(401)
		throw new Error("Training not found")
	}

	const trainingDays = await TrainingDay.find({ training: req.params.trainingId })

	res.status(200).json(trainingDays)
})

module.exports = {
	createTrainingDay,
	getTrainingDays,
	getTrainingDay
}
