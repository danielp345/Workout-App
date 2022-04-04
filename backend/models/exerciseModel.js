const mongoose = require("mongoose")

const exerciseShema = mongoose.Schema(
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
		sets: {},
	},
	{
		timestamps: true,
	}
)

module.exports = mongoose.model("Excercise", trainingShema)
