const express = require("express")
const router = express.Router()
const { createTraining, getTrainings, getTraining } = require("../controllers/trainingController")

const { protect } = require("../middleware/authMiddleware")

// Re-route into trainingDay router
const trainingDayRouter = require('./trainingDayRoutes')
router.use('/:id/training-days', trainingDayRouter)

router.route("/").get(protect, getTrainings).post(protect, createTraining)

router.route("/:id").get(protect, getTraining)

module.exports = router
