const express = require("express")
const router = express.Router({ mergeParams: true })
const {
	createTrainingDay,
	getTrainingDays,
	getTrainingDay
} = require("../controllers/trainingDayController")

const { protect } = require("../middleware/authMiddleware")

router.route("/").get(protect, getTrainingDays).post(protect, createTrainingDay)

router.route("/:idTD").get(protect, getTrainingDay)

module.exports = router

// /api/trainings/:trainingId/training-day
