const express = require("express")
const router = express.Router({ mergeParams: true })
const {
	createTrainingDay,
	getTrainingDays,
} = require("../controllers/trainingDayController")

const { protect } = require("../middleware/authMiddleware")

router.route("/").get(protect, getTrainingDays).post(protect, createTrainingDay)

module.exports = router

// /api/trainings/:id/training-day
