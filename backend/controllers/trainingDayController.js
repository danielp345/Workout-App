const asyncHandler = require("express-async-handler")

const User = require("../models/userModel")
const Training = require("../models/trainingModel")
const TrainingDay = require("../models/trainingDayModel")

// @desc     Create a new training day
// @route    POST /api/trainings/:id
// @access   Private
const createTrainingDay = asyncHandler(async (req, res) => {
	const { exercises } = req.body

	if (!exercises) {
		res.status(400)
		throw new Error("Please put some exercises")
	}

	// Get user and training using the id in the JWT
	const user = await User.findById(req.user.id)
	const training = await Training.findById(req.params.id)

	if (!user) {
		res.status(401)
		throw new Error("User not found")
	}

	if (!training) {
		res.status(401)
		throw new Error("Training not found")
	}

	const trainingDay = await TrainingDay.create({
		exercises,
		user: req.user.id,
		training: req.params.id,
		trainingName: training.trainingName,
	})

	training.trainingDays = [...training.trainingDays, trainingDay]

	res.status(201).json(training)
})

// @desc	Get training trainingDays
// @route	GET /api/trainings/:id
// @access  Private
const getTrainingDays = asyncHandler(async (req, res) => {
	// Get user and training using the id in the JWT
	const user = await User.findById(req.user.id)
	const training = await Training.findById(req.params.id)

	if (!user) {
		res.status(400)
		throw new Error("User not found")
	}

	if (!training) {
		res.status(401)
		throw new Error("Training not found")
	}

	const trainingDays = await TrainingDay.find({ training: req.params.id })

	res.status(200).json(trainingDays)
})

module.exports = {
	createTrainingDay,
	getTrainingDays,
}
