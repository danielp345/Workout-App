const mongoose = require("mongoose")

const trainingShema = mongoose.Schema(
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

module.exports = mongoose.model("Training", trainingShema)
