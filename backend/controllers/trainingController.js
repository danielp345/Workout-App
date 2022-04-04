const asyncHandler = require("express-async-handler")

const User = require("../models/userModel")
const Training = require("../models/trainingModel")

// @desc     Create a new training
// @route    GET /api/trainings
// @access   Private
const createTraining = asyncHandler(async (req, res) => {
	const { trainingName, exercises } = req.body

	if (!exercises) {
		res.status(400)
		throw new Error("Please put some exercises")
	}

	// Get user using the id in the JWT
	const user = await User.findById(req.user.id)

	if (!user) {
		res.status(401)
		throw new Error("User not found")
	}

	const training = await Training.create({
		trainingName,
		exercises,
		user: req.user.id,
	})

	res.status(201).json(training)
})

// @desc     Get user trainings
// @route    GET /api/trainings
// @access   Private
const getTrainings = asyncHandler(async (req, res) => {
	// Get user using the id in the JWT
	const user = await User.findById(req.user.id)

	if (!user) {
		res.status(401)
		throw new Error("User not found")
	}

	const trainings = await Training.find({ user: req.user.id })

	res.status(200).json(trainings)
})

// @desc	Get single training
// @route GET /api/trainings
// @access Private
const getTraining = asyncHandler(async (req, res) => {
	// Get user using the id in the JWT
	const user = await User.findById(req.user.id)

	if (!user) {
		res.status(401)
		throw new Error("User not found")
	}

	const training = await Training.findById(req.params.id)

	if (!training) {
		res.status(401)
		throw new Error("Training not found")
	}

	if (training.user.toString() !== req.user.id) {
		res.status(401)
		throw new Error("Not authorized")
	}

	res.status(200).json(training)
})

module.exports = {
	createTraining,
	getTrainings,
	getTraining,
}
