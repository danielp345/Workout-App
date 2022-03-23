const express = require("express")
const router = express.Router()
const { createTraining } = require("../controllers/trainingController")

const { protect } = require("../middleware/authMiddleware")

router.post("/new-training", protect, createTraining)

module.exports = router
