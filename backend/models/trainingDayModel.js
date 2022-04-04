const mongoose = require("mongoose")

const trainingDayShema = mongoose.Schema(
	{
		user: {
			type: mongoose.Schema.Types.ObjectId,
			required: true,
			ref: "User",
		},
		training: {
			type: mongoose.Schema.Types.ObjectId,
			required: true,
			ref: "Training",
		},
		trainingName: {
			type: String,
			required: true,
		},
		exercises: {
			type: Array,
			required: true,
		},
	},
	{
		timestamps: true,
	}
)

module.exports = mongoose.model("TrainingDay", trainingDayShema)
