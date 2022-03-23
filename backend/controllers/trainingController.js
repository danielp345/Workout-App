const asyncHandler = require("express-async-handler")

const User = require("../models/userModel")
const Training = require("../models/trainingModel")

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

	res.status(200).json(tickets)
})

// @desc     Create a new training
// @route    GET /api/trainings
// @access   Private
const createTraining = asyncHandler(async (req, res) => {
	const { trainingName, muscleGroup } = req.body

	if (!muscleGroup) {
		res.status(400)
		throw new Error("Please choose a muscle group")
	}

	// Get user using the id in the JWT
	const user = await User.findById(req.user.id)

	if (!user) {
		res.status(401)
		throw new Error("User not found")
	}

    const training = await Training.create({
		trainingName,
        muscleGroup,
        user: req.user.id
    })

    res.status(201).json(training)
})

module.exports = {
    createTraining
}