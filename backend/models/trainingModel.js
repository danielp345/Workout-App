const mongoose = require("mongoose")

const trainingShema = mongoose.Schema(
	{
		user: {
			type: mongoose.Schema.Types.ObjectId,
			required: true,
			ref: "User",
		},
		trainingName: {
			type: String,
			required: true,
		},
		exercises: {
			type: Array,
			required: true,
		},
		trainingDays: {
			type: Array
		}
	},
	{
		timestamps: true,
	}
)

module.exports = mongoose.model("Training", trainingShema)
